import React from 'react'
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
  let ideaCount = prop.ideaCount;

  // if amount of ideas is odd, add an extra (for the by)
  if (ideaCount % 2 !== 0) {
    ideaCount++;
  }

  const ideas = Array.from({ length: ideaCount })

  return (
    <MDBContainer>
      <MDBRow className='d-flex flex-nowrap'>
        {ideas.map((idea, index) => (
          <MDBCol key={index} size='' className='mt-5'>
            <div className='idea-bracket'>
              <MDBCard className='idea-bracket bg-dark'>
                <MDBCardBody>
                  <MDBCardTitle>idea #{index + 1}</MDBCardTitle>
                  <MDBCardText className='text-white'>
                    ...idea text will go here...
                  </MDBCardText>
                  <MDBBtn floating className='idea-button'><MDBIcon fas icon="tint" /></MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </div>
          </MDBCol>
        ))}
      </MDBRow>
    </MDBContainer>
  )
}