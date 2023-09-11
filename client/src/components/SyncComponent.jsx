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

export default function SyncComponent(prop) {
  // console.log(prop)

  const [pairs, setPairs] = useState([]);
  const [round, setRound] = useState(1);
  const [winners, setWinners] = useState([]);
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
    const pairedIdeas = []
    for (let i = 0; i < originBracketIdeas.length; i += 2) {
      pairedIdeas.push([originBracketIdeas[i], originBracketIdeas[i + 1]])
    }
    return pairedIdeas;
  };

  const handleWinnerClick = (index, ideaIndex) => {
    console.log(`handleWinnerClick called for Bracket ${index + 1} (pairedIdeas[${index}]) with winner being option ${ideaIndex + 1} (pairedIdeas[${index}][${ideaIndex}])`)
  };

  const originBracketTitle = originBracket ? originBracket.bracket.questionTitle : '';
  const originBracketIdeas = originBracket ? originBracket.ideas : [];
  
  // variable that contains all ideas paired into a new array
  const pairedIdeas = pairIdeas(originBracketIdeas);

  return (
    <MDBContainer>
      <h2 className='sync-title'>{originBracketTitle}</h2>

      {/* We map over the pairedIdeas array to generate the "round" container div containing decision divs that contain the paired ideas. */}

      <MDBRow className='round d-flex flex-nowrap'>
        {pairedIdeas.map((pair, index) => (
          <MDBCol key={index} size='' className='mt-5'>
            <div className='decision'>
              <MDBCard className='decision-card bg-dark'>
                <MDBCardTitle className='text-center mt-2'>Decision {index + 1}</MDBCardTitle>
                <MDBCardBody className='decision-pair-container d-flex justify-content-center flex-nowrap'>
                  <div className='decision-pair-item d-flex flex-wrap justify-content-center align-items-end'>
                    <MDBCardText className='idea-text text-white d-flex justify-content-center'>
                      {pair[0].ideaText}
                    </MDBCardText>

                    <MDBBtn floating 
                            className='decision-button' 
                            onClick={() => handleWinnerClick(index, 0)}
                            disabled={false} // disable other button of pair after winner of pair chosen

                  ><MDBIcon fas icon="tint" /></MDBBtn>
                  </div>
                  <div className='decision-pair-item d-flex flex-wrap justify-content-center align-items-end'>
                    <MDBCardText className='idea-text text-white d-flex justify-content-center'>
                      {pair[1].ideaText}
                    </MDBCardText>
                    d 
                    <MDBBtn floating 
                            className='decision-button' 
                            onClick={() => handleWinnerClick(index, 1)}
                            disabled={false} // disable other button of pair after winner of pair chosen
                                          // To-Do: Create function to manage `isDisabled` state for button.

                  ><MDBIcon fas icon="tint" /></MDBBtn>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </div>
          </MDBCol>
          ))}
      </MDBRow>
    </MDBContainer>
  )
}