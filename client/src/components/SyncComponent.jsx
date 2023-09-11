import React from 'react'
import { useState } from 'react';
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

  async function fetchRound(roundNum) {
    // fetch GET for /api/brackets/_id here:
    const roundData = await fetch('/api/brackets/_id') // object _id goes here...
  }

  // pair ideas together
  const pairIdeas = (ideasArray) => {
    const pairedIdeas = [];
    for (let i = 0; i < ideasArray.length; i += 2) {
      pairedIdeas.push([ideasArray[i], ideasArray[i + 1]]);
    }
    return pairedIdeas;
  };

  const handleWinnerClick = (index, ideaIndex) => {
    console.log(`handleWinnerClick called for Bracket ${index + 1} (pairedIdeas[${index}]) with winner being option ${ideaIndex + 1} (pairedIdeas[${index}][${ideaIndex}])`);
  };
  
  const pairedIdeas = pairIdeas(prop.brackets.ideas);

  return (
    <MDBContainer>
      <h2 className='sync-title'>{prop.brackets.title}</h2>
      <MDBRow className='round d-flex flex-nowrap'>
        {pairedIdeas.map((pair, index) => (
          <MDBCol key={index} size='' className='mt-5'>
            <div className='decision'>
              <MDBCard className='decision-card bg-dark'>
                <MDBCardTitle className='text-center mt-2'>Decision {index + 1}</MDBCardTitle>
                <MDBCardBody className='decision-pair-container d-flex justify-content-center flex-nowrap'>
                  <div className='decision-pair d-flex flex-wrap justify-content-center align-items-end'>
                    <MDBCardText className='idea-text text-white'>
                      {pair[0]}
                    </MDBCardText>

                    <MDBBtn floating 
                            className='decision-button' 
                            onClick={() => handleWinnerClick(index, 0)}
                            disabled={false} // disable other button of pair after winner of pair chosen

                  ><MDBIcon fas icon="tint" /></MDBBtn>
                  </div>
                  <div className='decision-pair d-flex flex-wrap justify-content-center align-items-end'>
                    <MDBCardText className='idea-text text-white d-flex'>
                      {pair[1]}
                    </MDBCardText>

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