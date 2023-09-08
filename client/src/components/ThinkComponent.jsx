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

const thinkData = {
  titleQuestion: "",

}

export default function ThinkComponent() {
  


  
  function addChoiceInput() {
    console.log("hello")
  }

  return (
    <>
    <MDBContainer style={{ marginTop:"3%", marginBottom:"3%" }}>
      <MDBRow>
        <MDBCol col='6'>
          <MDBCard>
            <MDBCardBody>
            <MDBCardTitle style={{color:'black'}}>Create a Bracket:</MDBCardTitle>
            <MDBInput name='Title' style={{ marginTop:"3%", marginBottom:"3%" }} label='Title/Question' id='titleQuestion' type='text' />
            <MDBInput name='Choice' style={{ marginTop:"1%", marginBottom:"1%" }} label='Choice' id='Choice' type='text' />
            <MDBInput name='Choice' style={{ marginTop:"1%", marginBottom:"1%" }} label='Choice' id='Choice' type='text' />
            <MDBInput name='Choice' style={{ marginTop:"1%", marginBottom:"1%" }} label='Choice' id='Choice' type='text' />
            <MDBInput name='Choice' style={{ marginTop:"1%", marginBottom:"1%" }} label='Choice' id='Choice' type='text' />
            <MDBBtn style={{marginTop:"2%"}} >Submit</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>








    
    </>
  )
}