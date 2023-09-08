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

  let ideaCount = Object.keys(prop.ideas.brackets).length;
  // console.log(ideaCount)

  // if amount of ideas is odd, add an extra (for the by)
  if (ideaCount % 2 !== 0) {
    ideaCount++;
  }

  const ideas = Array.from({ length: ideaCount })

  return (
    <MDBContainer>
      <h1>{prop.ideas.title}</h1>
      <MDBRow className='d-flex flex-nowrap'>
        {ideas.map((idea, index) => (
          <MDBCol key={index} size='' className='mt-5'>
            <div className='idea-bracket'>
              <MDBCard className='idea-bracket bg-dark'>
                <MDBCardBody>
                  <MDBCardTitle>idea #{index + 1}</MDBCardTitle>
                  <MDBCardText className='text-white'>
                    {prop.ideas.brackets[index]}
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