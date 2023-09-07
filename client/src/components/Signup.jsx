import React from 'react'
import { useState } from 'react';

import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBCol,
  MDBRow,
  MDBInput
} from 'mdb-react-ui-kit';

// card component: https://mdbootstrap.com/docs/standard/components/cards/
// form components: https://mdbootstrap.com/docs/standard/forms/input-fields/

export default function Signup() {

  return (
    <MDBContainer style={{ marginTop:"3%", marginBottom:"3%" }}>
      <MDBRow>
        <MDBCol col='6'>
          <MDBCard>
            <MDBCardBody>
              <MDBCardTitle style={{color:'black'}}>Sign Up:</MDBCardTitle>
              <MDBCardText>
              <MDBInput label='Username' id='typeTextSignup' type='text' />
              </MDBCardText>
              <MDBCardText>
              <MDBInput label='Email' id='typeEmail' type='password' />
              </MDBCardText>
              <MDBCardText>
              <MDBInput label='Password' id='typePasswordSignup' type='password' />
              </MDBCardText>
              <MDBBtn style={{marginTop:"2%"}}>Sign Up</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}