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
      <MDBRow className='d-flex flex-nowrap'>
        {pairedIdeas.map((pair, index) => (
          <MDBCol key={index} size='' className='mt-5'>
            <div className='idea-bracket'>
              <MDBCard className='idea-bracket-card bg-dark'>
                <MDBCardTitle className='text-center mt-2'>Bracket {index + 1}</MDBCardTitle>
                <MDBCardBody className='idea-bracket-pair-container d-flex justify-content-center flex-nowrap'>
                  <div className='idea-bracket-pair d-flex flex-wrap justify-content-center align-items-end'>
                    <MDBCardText className='idea-bracket-text text-white'>
                      {pair[0]}
                    </MDBCardText>

                    <MDBBtn floating 
                            className='idea-button' 
                            onClick={() => handleWinnerClick(index, 0)}
                            disabled={false} // disable other button of pair after winner of pair chosen

                  ><MDBIcon fas icon="tint" /></MDBBtn>
                  </div>
                  <div className='idea-bracket-pair d-flex flex-wrap justify-content-center align-items-end'>
                    <MDBCardText className='idea-bracket-text text-white d-flex'>
                      {pair[1]}
                    </MDBCardText>

                    <MDBBtn floating 
                            className='idea-button' 
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