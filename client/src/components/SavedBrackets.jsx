import React from 'react'

import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBBtn,
  MDBCol,
  MDBRow,
  MDBInput
} from 'mdb-react-ui-kit';

export default function SavedBrackets() {

  return (
    <>
    <MDBContainer style={{ marginTop:"3%", marginBottom:"3%" }}>
      <MDBRow>
        <MDBCol col='2'>
          <MDBCard>
            <MDBCardBody>
            <MDBCardTitle style={{color:'black'}}>Past Brackets:</MDBCardTitle>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </>
  )
}