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
              <MDBCard className='text-white mb-3 new-think'>
                    <MDBCardBody>
                      <MDBCardTitle>New Think</MDBCardTitle>
                      <MDBBtn className='button'href='/think'>
                        Get Started
                      </MDBBtn>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>     
      </MDBRow>
     
      {/* <div className="d-flex justify-content-start">...</div>
      <div className="d-flex justify-content-end">...</div>
      <div className="d-flex justify-content-center">...</div>
      <div className="d-flex justify-content-between">...</div>
      <div className="d-flex justify-content-around">...</div>
      <div className="d-flex justify-content-evenly">...</div> */}
    </>

  )
}