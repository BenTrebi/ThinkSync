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
  MDBInput
} from 'mdb-react-ui-kit';

// card component: https://mdbootstrap.com/docs/standard/components/cards/
// form components: https://mdbootstrap.com/docs/standard/forms/input-fields/

const defaultUser = {
  username:"",
  email:"",
  password:""
}

export default function Signup() {
  const [ signUpData, setSignUpState ] = useState(defaultUser)

  function handleSignUpChange(e) {
    e.preventDefault();
    setSignUpState({ ...signUpData, [e.target.name]: e.target.value })
  }

  function submitSignUp(e) {
    e.preventDefault()
    console.log(signUpData)
  }

  return (
    <MDBContainer style={{ marginTop:"3%", marginBottom:"3%" }}>
      <MDBRow>
        <MDBCol col='6'>
          <MDBCard>
            <MDBCardBody>
              <MDBCardTitle style={{color:'black'}}>Sign Up:</MDBCardTitle>
              <MDBInput name='username' style={{ marginTop:"3%", marginBottom:"3%" }} label='Username' id='typeTextSignup' type='text' value={signUpData.username} onChange={handleSignUpChange}/>
              <MDBInput name='email' style={{ marginTop:"3%", marginBottom:"3%" }} label='Email' id='typeEmail' type='email' value={signUpData.email} onChange={handleSignUpChange} />         
              <MDBInput name='password' style={{ marginTop:"3%", marginBottom:"3%" }} label='Password' id='typePasswordSignup' type='password' value={signUpData.password} onChange={handleSignUpChange} />         
              <MDBBtn style={{marginTop:"2%"}} onClick={submitSignUp}>Sign Up</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}