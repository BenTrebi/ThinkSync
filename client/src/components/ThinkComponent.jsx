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
  MDBInputGroup
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
          <MDBCard>
            <MDBCardBody>
            <MDBCardTitle style={{color:'black'}}>Create a Bracket:</MDBCardTitle>
            <MDBInput name='Title' style={{ marginTop:"3%", marginBottom:"3%" }} label='Title/Question' id='titleQuestion' type='text' />
            <MDBInputGroup style={{marginTop:"1%", marginBottom:"1%"}}>
            <MDBInput name='Choice' label='Choice' id='Choice' type='text' />
            <MDBBtn class="btn btn-primary" type="button" id="button-addon1">
               Delete
            </MDBBtn>
            </MDBInputGroup>
            <MDBInputGroup style={{marginTop:"1%", marginBottom:"1%"}}>
            <MDBInput name='Choice' label='Choice' id='Choice' type='text' />
            <MDBBtn class="btn btn-primary" type="button" id="button-addon1">
               Delete
            </MDBBtn>
            </MDBInputGroup>
            <MDBInputGroup style={{marginTop:"1%", marginBottom:"1%"}}>
            <MDBInput name='Choice' label='Choice' id='Choice' type='text' />
            <MDBBtn class="btn btn-primary" type="button" id="button-addon1">
               Delete
            </MDBBtn>
            </MDBInputGroup>
            <MDBInputGroup style={{marginTop:"1%", marginBottom:"1%"}}>
            <MDBInput name='Choice' label='Choice' id='Choice' type='text' />
            <MDBBtn class="btn btn-primary" type="button" id="button-addon1">
               Delete
            </MDBBtn>
            </MDBInputGroup>
            <MDBBtn style={{marginTop:"2%", marginRight: "80%"}}>Add Choice</MDBBtn>
            <MDBBtn style={{marginTop:"2%"}}>Submit</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </>
  )
}