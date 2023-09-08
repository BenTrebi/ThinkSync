import React from 'react'
import { useState } from 'react';

import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBBtn,
  MDBCol,
  MDBRow,
  MDBInput,
  MDBBtnGroup,
  MDBInputGroup,
  MDBIcon
} from 'mdb-react-ui-kit';

const thinkData = {
  titleQuestion: "",
  choices: "",
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
          <MDBCard className='bg-dark'>
            <MDBCardBody>
            <MDBCardTitle>Create a Bracket:</MDBCardTitle>
            <MDBInput contrast name='Title' style={{ marginTop:"3%", marginBottom:"3%" }} label='Title/Question' id='titleQuestion' type='text' />
            <MDBInputGroup style={{marginTop:"1%", marginBottom:"1%"}}>
            <MDBInput contrast name='Choice' label='Choice' id='Choice' type='text' />
            <MDBBtn className='btn-danger' id="button-addon1">
              <MDBIcon fas icon="backspace" />
            </MDBBtn>
            </MDBInputGroup>
            <MDBInputGroup style={{marginTop:"1%", marginBottom:"1%"}}>
            <MDBInput contrast name='Choice' label='Choice' id='Choice' type='text' />
            <MDBBtn className='btn-danger' id="button-addon1">
              <MDBIcon fas icon="backspace" />
            </MDBBtn>
            </MDBInputGroup>
            <MDBInputGroup style={{marginTop:"1%", marginBottom:"1%"}}>
            <MDBInput contrast name='Choice' label='Choice' id='Choice' type='text' />
            <MDBBtn className='btn-danger' id="button-addon1">
              <MDBIcon fas icon="backspace" />
            </MDBBtn>
            </MDBInputGroup>
            <MDBInputGroup style={{marginTop:"1%", marginBottom:"1%"}}>
            <MDBInput contrast name='Choice' label='Choice' id='Choice' type='text' />
            <MDBBtn className='btn-danger' id="button-addon1">
              <MDBIcon fas icon="backspace" />
            </MDBBtn>
            </MDBInputGroup>
            <MDBBtn className='button' style={{marginTop:"2%", marginRight: "80%"}}>Add Choice</MDBBtn>
            <MDBBtn style={{marginTop:"2%"}}>Submit</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </>
  )
}