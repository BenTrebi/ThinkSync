import React from 'react'
import {
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

      
      <MDBCard alignment='center'>
        <MDBCardHeader  tag="h2">About</MDBCardHeader>
        <MDBCardBody>
          <p>A one-stop-shop for all that you and your team could need to vote on ideas, make come to decisions, or just make a bracket for March Madness.</p>
        </MDBCardBody>
      </MDBCard>

      <MDBCard background='success' className='text-white mb-3'>
        <MDBCardHeader>Header</MDBCardHeader>
        <MDBCardBody>
          <MDBCardTitle>New Think</MDBCardTitle>
          <MDBCardText>
            'replace this whole thing with a button once the grid is set up'
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
      
      
    </>
  )
}