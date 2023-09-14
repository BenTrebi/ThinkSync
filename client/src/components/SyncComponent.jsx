import React from 'react'
import { useState, useEffect } from 'react';
import { useParams} from 'react-router-dom';
import { useUserContext } from '../utils/UserContext'
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBIcon
} from 'mdb-react-ui-kit';

export default function SyncComponent() {

  const { currUser } = useUserContext() 

  const [round, setRound] = useState(1);
  const [winners, setWinners] = useState({});
  const [originBracket, setOriginBracket] = useState(null);
  const [pairedIdeas, setPairedIdeas] = useState([]);
  const [finalRound, setFinalRound] = useState(false);

  // This is the object_id for a bracket in Mongo fetched from URL
  const unparsedBracketId = useParams();
  const bracketId = unparsedBracketId.bracketId
  // console.log(bracketId)

  // fetchData is nested within useEffect because it is asynchronous
  useEffect(() => {
    async function fetchBracketData() {
      try {
        const bracketData = await getBracket(bracketId);
        setOriginBracket(bracketData);
        // Initialize pairedIdeas with bracketData.ideas
        const initialPairedIdeas = pairIdeas(bracketData.ideas);
        setPairedIdeas(initialPairedIdeas);
      } catch (error) {
        console.error(`\nerror fetching brackets:\n${error}`);
      }
    }
  
    fetchBracketData(bracketId);
  
  }, []);  


  //////////////////////////////////////////////////////////////////////////////////////////
  // ROUND VOTE CHECK //////////////////////////////////////////////////////////////////////
  // This tracks and compares vote count with decision count to change state of round.
  useEffect(() => {
    const voteCount = Object.keys(winners).length;

    if (voteCount === 0 && round === 1) {
      setRound(1);
      // console.log(round, voteCount);
    } else if (voteCount === pairedIdeas.length) { 
      setRound(round + 1);
    } else {
      // continue..
    }

    console.log("Current round:", round);
  }, [winners]);


  ////////////////////////////////////////////////////////////////////////////////////////
  // ROUND UPDATER ////////////////////////////////////////////////////////////////////////
  // This tracks the round to update pairedIdeas and does calls postRoundVotes to POST to database for round and clears winner object to use it to track the next round.
  useEffect(() => {
    if (round > 1) {
      // create new array by spread operator copy
      const updatedPairedIdeas = [...pairedIdeas];
  
      // initialize array to hold new paired ideas
      const newPairedIdeas = [];

      // console.log(winners)
  
      // Iterate through the keys (decision indices) of winners
      Object.keys(winners).forEach((decision) => {

        const winningIdeaText = winners[decision].vote;
  
        // keep winners and replace losers with empty objects
        updatedPairedIdeas[decision] = updatedPairedIdeas[decision].map((idea) => {
          if (idea.ideaText === winningIdeaText) {
            return idea; // keep winning idea
          } else {
            return {}; // replace losers with empty objects (to filter out)
          }
        });
      });
  
      // empty objects accumulate in the nested arrays, so now we remove them here
      const filteredUpdatedPairedIdeas = updatedPairedIdeas.map((decision) =>
        decision.filter((idea) => Object.keys(idea).length > 0)
      );
  
      // filtered ideas can now be grouped into pairs
      for (let i = 0; i < filteredUpdatedPairedIdeas.length; i += 2) {
        // newPair comes from the filtered array via spread operator with array indexing
        const newPair = [...filteredUpdatedPairedIdeas[i]];
        // adding each pair to the newPair array
        if (i + 1 < filteredUpdatedPairedIdeas.length) {
          newPair.push(...filteredUpdatedPairedIdeas[i + 1]);
        }
        // completing the array
        newPairedIdeas.push(newPair);
      }

      console.log(newPairedIdeas)

      // shuffling newPairedIdeas to prevent a bye from persisting across rounds
      const shuffledNewPairedIdeas = shuffleArray(newPairedIdeas)
      // console.log(shuffledNewPairedIdeas)
  
      // set the updated pairedIdeas
      setPairedIdeas(shuffledNewPairedIdeas);

      


      // before the winner array is cleared with 'handleVoteReset', send vote data from client to server
      postRoundVotes(newPairedIdeas);
      // ..then..
      handleVoteReset();
    } 
    
    // - FINAL ROUND -
    if (pairedIdeas.length === 1) {
      console.log('final round reached!')
      setFinalRound(true)
    }
  }, [round])


  // when finalRound is reached
  useEffect(() => {
    if (finalRound) {
      console.log('final round state change')
    }
  }, [finalRound])


  // shuffle an array using Fisher-Yates shuffle algorithm
  function shuffleArray(array) {
    const shuffledArray = [...array]; // Create a copy of the original array
  
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); // get random index between 0 to i
  
      // Swap elements at i and j
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
  
    return shuffledArray;
  }
  


  // This function queries the database for the bracketData by ID, it is called above in a useEffect ^.
  async function getBracket(bracketId) {
    try {
      const response = await fetch(`/api/bracket/${bracketId}`)
      const bracketData = await response.json()
      return bracketData
    } catch (error) {
      return console.error(`\nerror fetching bracketData:\n${error}`)
    }
  }

  async function postRoundVotes(pairedWinners) {
    // -----------------------------------------------------------------------------------------
    // POST should look like this (array of objects with these properties):
    //
    //  [
    //      {
    //        "userId": "64ff3af8c12136ee6ee90b59",
    //        "ideaId": "64ff3bbc11ce5113ae631df5",
    //        "roundNum": 2
    //      },
    //      {
    //        "userId": "64ff3af8c12136ee6ee90b59",
    //        "ideaId": "64ff3b828f11a3668ce7053b",
    //        "roundNum": 2
    //      }
    //    ]
    //
    //
    // -----------------------------------------------------------------------------------------
    //
    // userId is available from client session cookie from: currUser.data._id
    //
    // -----------------------------------------------------------------------------------------
    //
    //
    // ideaId is avaiable from "pairedWinners" which is passed as an arugment to this function.
    //
    //  It looks like this:
    //    * see this by using: "console.log(pairedWinners)" *
    //    **note that this is an array of arrays which contain object pairs (of ideas)**
    //
    //
    //   [
    //     [
    //         {
    //             "_id": "64ff3bbc11ce5113ae631df4",
    //             "ideaNum": 1,
    //             "ideaText": "Coding Quiz",
    //             "userId": "64ff3af8c12136ee6ee90b59",
    //             "votes": [],
    //             "createdAt": "2023-09-11T16:09:32.538Z",
    //             "updatedAt": "2023-09-11T16:09:32.538Z",
    //             "__v": 0,
    //             "voteCount": 0,
    //             "id": "64ff3bbc11ce5113ae631df4"
    //         },
    //         {
    //             "_id": "64ff3bbc11ce5113ae631df8",
    //             "ideaNum": 5,
    //             "ideaText": "foreign language immersion - music, movies, news, travel?",
    //             "userId": "64ff3af8c12136ee6ee90b59",
    //             "votes": [],
    //             "createdAt": "2023-09-11T16:09:32.538Z",
    //             "updatedAt": "2023-09-11T16:09:32.538Z",
    //             "__v": 0,
    //             "voteCount": 0,
    //             "id": "64ff3bbc11ce5113ae631df8"
    //         }
    //     ]
    // ]
    //
    // -----------------------------------------------------------------------------------------
    //
    // roundNum is available from "round" stateful variable (may need to subtract 1)
    //
    // -----------------------------------------------------------------------------------------

    try {

      // create the voteData array to send to server
      const voteData = [];

      for (const decision of pairedWinners) {
        const decisionVotes = decision.map((idea) => ({
          userId: currUser.data._id,
          ideaId: idea._id,
          roundNum: round - 1 // decrement by 1 here because state has aleady incremented by 1 by now
        }))

        voteData.push(...decisionVotes)
      }

      console.log(voteData)

      const response = await fetch('/api/bracket/vote', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(voteData),
      })
      
      console.log(response)

      const roundVoteSuccess = await response.json()
      return roundVoteSuccess
    } catch (error) {
      return console.error(`\nerror posting round vote data:\n${error}`)
    }
  }

  // pairs ideas and pushes them into a new array.
  const pairIdeas = (originBracketIdeas) => {
    const pairedIdeas = [];
    const length = originBracketIdeas.length;

    // loop through array in pairs
    for (let i = 0; i < length; i += 2) {
      if (i + 1 < length) {
        pairedIdeas.push([originBracketIdeas[i], originBracketIdeas[i + 1]]);
      } else {
        // if odd number of ideas, then push last item individually
        pairedIdeas.push([originBracketIdeas[i]]);
      }
    }

    return pairedIdeas;
  };

  // reset the entire bracket
  const handleVoteReset = () => {
    setWinners({})
  }

  const handleSyncReset = async () => {
    try {
      // fetch original bracket data
      const bracketData = await getBracket(bracketId);
  
      // pair original bracket data again
      const pairedIdeasFromData = pairIdeas(bracketData.ideas);
  
      // set pairedIdeas with original bracket data
      setPairedIdeas(pairedIdeasFromData);
  
      // state resets
      setWinners({});
      setRound(1);
      setFinalRound(false)
  
      console.log("sync reset completed.");
    } catch (error) {
      console.error(`error resetting sync: ${error}`);
    }
  };


  const handleWinnerClick = (index, ideaIndex) => {
    const updatedWinners = {...winners};

    updatedWinners[index] = {
      decision: index + 1,
      vote: pairedIdeas[index][ideaIndex].ideaText,
    };
    setWinners(updatedWinners);
    console.log(updatedWinners)

    // To-Do: implement check here if all decision divs have a winner selected..

    console.log(`handleWinnerClick called for ${index + 1} (pairedIdeas[${index}]) with winner being option ${ideaIndex + 1} (pairedIdeas[${index}][${ideaIndex}])`)
  };

  const originBracketTitle = originBracket ? originBracket.bracket.questionTitle : '';
  

  return (
    <MDBContainer>

      <h2 className='sync-title'>
        {finalRound ? "Think has been Synced!" : originBracketTitle}
        </h2>
      
      <MDBRow className='round d-flex flex-nowrap'>
        {/* mapping over pairedIdeas array to generate Decision divs*/}
        {pairedIdeas.map((pair, index) => (
          <MDBCol key={index} size='' className='mt-5'>
            <div className='decision'>
              <MDBCard className='decision-card bg-dark'>

                <MDBCardTitle className='text-center mt-2' 
                              style={{ color: 'darkgray', fontSize: '1em' }}>
                              {finalRound ? "Final Result" : `Decision ${index + 1}`}
                </MDBCardTitle>

                <MDBCardBody className='decision-pair-container d-flex justify-content-center flex-nowrap'>
                  <div className='decision-pair-item d-flex flex-wrap justify-content-center align-items-end'>

                  {/* checking if ideaText is not null before rendering */}
                  {pair[0] && pair[0].ideaText && (
                    <MDBCardText className='idea-text text-white d-flex justify-content-center'>
                      {pair[0].ideaText}
                    </MDBCardText>
                  )}

                  <MDBBtn floating 
                          className='decision-button' 
                          onClick={() => handleWinnerClick(index, 0)}
                          disabled={winners[index] !== undefined || finalRound}>
                    <MDBIcon fas icon="tint" /></MDBBtn>
                  </div>

                  {pair[1] && (
                    <div className='decision-pair-item d-flex flex-wrap justify-content-center align-items-end'>
                      {/* checking if ideaText is not null before rendering */}
                      {pair[1].ideaText && (
                        <MDBCardText className='idea-text text-white d-flex justify-content-center'>
                          {pair[1].ideaText}
                        </MDBCardText>
                      )}

                      <MDBBtn floating 
                              className='decision-button' 
                              onClick={() => handleWinnerClick(index, 1)}
                              disabled={winners[index] !== undefined || finalRound}
                      ><MDBIcon fas icon="tint" /></MDBBtn>
                    </div>
                  )}
                </MDBCardBody>
              </MDBCard>
            </div>
          </MDBCol>
        ))}
      </MDBRow>

      <MDBBtn className='mt-4 d-flex flex-wrap' onClick={handleVoteReset} disabled={finalRound || Object.keys(winners).length === 0} style={{ backgroundColor: 'purple'}}>Reset Votes</MDBBtn>

      <MDBBtn className='mt-4' onClick={handleSyncReset} disabled={round === 1 ? true : false} style={{ backgroundColor: 'maroon'}}>Reset Sync</MDBBtn>

      {/* display winner data (mainly for development debugging)
      The decision-log outputs vote for each decision of each round */}
      <div className='decision-log'>
      <h5 className='mt-4'>{`Round ${round}`}</h5>
      {Object.keys(winners).map((decisionIndex, index) => (
          <div key={index}>
            <p style={{ fontFamily: 'monospace', fontSize: '0.8em'}}>
              Decision <strong style={{ color: 'darkgray' }}>{winners[decisionIndex].decision}</strong> vote: {winners[decisionIndex].vote}
            </p>
          </div>
      ))}
    </div>

    </MDBContainer>
  )
}