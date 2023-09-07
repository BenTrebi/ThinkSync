import React from 'react'
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function Home() {
  return (
    <>
     {/* <MDBContainer>

      <MDBRow>

        <MDBCol size='md'>
          <MDBCard alignment='center'>
            <MDBCardHeader  tag="h2">About</MDBCardHeader>
            <MDBCardBody>
              <p>A one-stop-shop for all that you and your team could need to vote on ideas, make come to decisions, or just make a bracket for March Madness.</p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBCol size='md'>
          One of three columns
        </MDBCol>

        <MDBCol size='md'>
          <MDBCard background='success' className='text-white mb-3'>
              <MDBCardBody>
                <MDBCardTitle>New Think</MDBCardTitle>
                <MDBBtn>
                  Get Started
                </MDBBtn>
              </MDBCardBody>
          </MDBCard>
        </MDBCol>

      </MDBRow>

    </MDBContainer> */}

<MDBRow>
      <MDBCol md='8'>
      <MDBCard alignment='center'>
            <MDBCardHeader  tag="h2">About</MDBCardHeader>
            <MDBCardBody>
              <p>A one-stop-shop for all that you and your team could need to vote on ideas, make come to decisions, or just make a bracket for March Madness.</p>
            </MDBCardBody>
          </MDBCard>
      </MDBCol>
      <MDBCol md='4'>
        <MDBCard background='success' className='text-white mb-3'>
              <MDBCardBody>
                <MDBCardTitle>New Think</MDBCardTitle>
                <MDBBtn>
                  Get Started
                </MDBBtn>
              </MDBCardBody>
          </MDBCard>
      </MDBCol>
</MDBRow>
   
         
    </>

  )
}