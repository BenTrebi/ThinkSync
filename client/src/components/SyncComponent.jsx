import React from 'react'
import { useState, useEffect } from 'react';
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

  const [pairs, setPairs] = useState([]);
  const [round, setRound] = useState(1);
  const [winners, setWinners] = useState({});
  const [originBracket, setOriginBracket] = useState(null);

  // This is the variable for which bracket to fetch from Mongo by Object Id ("_id") using GET "/:id" route.
  // Eventually this ID will come as a URL parameter from the ThinkComponent via react-router.
  const bracketId = '64ff3bbc11ce5113ae631df2'

  // fetchData is nested within useEffect because it is asynchronous
  useEffect(() => {
    async function fetchData() {
      try {
        const bracketData = await fetchBracket(bracketId);
        setOriginBracket(bracketData);
        // console.log(bracketData)
      } catch (error) {
        console.error(`\nerror fetching bracketData:\n${error}`);
      }
    }

    // here we call the function immediately and the originBracket is no longer null (state change)
    fetchData(bracketId);

  }, []);

  useEffect(() => {
    if (winners.length === 0) {
      setRound(1);
    }
  }, [winners]);

  // This function queries the database for the bracketData by ID, it is called above ^.
  async function fetchBracket(bracketId) {
    try {
      const response = await fetch(`/api/bracket/${bracketId}`)
      const bracketData = await response.json()
      return bracketData
    } catch (error) {
      return console.error(`\nerror fetching bracketData:\n${error}`)
    }
  }

  // Pairs ideas and pushes them into a new array.
  const pairIdeas = (originBracketIdeas) => {
    const pairedIdeas = [];
    const length = originBracketIdeas.length;

    // loop through array in pairs
    for (let i = 0; i < length; i += 2) {
      // If there's at least one more idea after the current pair
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
  const handleReset = () => {
    setWinners({})
  }

  // This function will be called to post results of finished round to database.
  function handleRoundPost() {

  }

  const handleWinnerClick = (index, ideaIndex) => {
    const updatedWinners = {...winners};

    updatedWinners[index] = {
      decision: index + 1,
      vote: pairedIdeas[index][ideaIndex].ideaText,
    };

    setWinners(updatedWinners);
    console.log(updatedWinners)

    // To-Do: implement check here if all decision divs have a winner selected..

    console.log(`handleWinnerClick called for Bracket ${index + 1} (pairedIdeas[${index}]) with winner being option ${ideaIndex + 1} (pairedIdeas[${index}][${ideaIndex}])`)
  };

  const originBracketTitle = originBracket ? originBracket.bracket.questionTitle : '';
  const originBracketIdeas = originBracket ? originBracket.ideas : [];
  
  // variable that contains all ideas paired into a new array
  const pairedIdeas = pairIdeas(originBracketIdeas);

  return (
    <MDBContainer>
      <h2 className='sync-title'>{originBracketTitle}</h2>
      
      <MDBRow className='round d-flex flex-nowrap'>
        {/* mapping over pairedIdeas array to generate Decision divs*/}
        {pairedIdeas.map((pair, index) => (
          <MDBCol key={index} size='' className='mt-5'>
            <div className='decision'>
              <MDBCard className='decision-card bg-dark'>

                <MDBCardTitle className='text-center mt-2' 
                              style={{ color: 'darkgray', fontSize: '1em' }}>
                              Decision <span style={{ color: 'white' }}>{index + 1}</span>
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
                          disabled={winners[index] !== undefined}>
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
                              disabled={winners[index] !== undefined}
                      ><MDBIcon fas icon="tint" /></MDBBtn>
                    </div>
                  )}
                </MDBCardBody>
              </MDBCard>
            </div>
          </MDBCol>
        ))}
      </MDBRow>

      <MDBBtn className='mt-4' onClick={handleReset} disabled={winners.length === 0} style={{ backgroundColor: 'purple'}}>Reset</MDBBtn>

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