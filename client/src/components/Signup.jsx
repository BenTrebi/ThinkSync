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
  const [ signupResult, setSignupResult ] = useState("")

  function handleSignUpChange(e) {
    e.preventDefault();
    setSignUpState({ ...signUpData, [e.target.name]: e.target.value })
  }

  async function submitSignUp(e){
    e.preventDefault()
    console.log(signUpData)

    const query = await fetch("/api/auth/register", {
      method: "POST",
      body: JSON.stringify(signUpData),
      headers: {
        "Content-Type": "application/json",
        "User-Agent": "Insomnia/2023.5.6"
      }
    })

      const result = await query.json()
      // console.log(result)
      if( result.status === "success" && result.payload ){
        window.location.href = "/think"
      }
      console.log(result)
  }

  return (
  
    <MDBContainer style={{ marginTop:"3%", marginBottom:"3%" }}>
      <MDBRow>
        <MDBCol col='6'>
          <MDBCard className='bg-dark'>
            <MDBCardBody>
              <MDBCardTitle>Sign Up:</MDBCardTitle>
              <MDBInput name='username' style={{ marginTop:"3%", marginBottom:"3%" }} contrast label='Username' id='typeTextSignup' type='text' value={signUpData.username} onChange={handleSignUpChange}/>
              <MDBInput name='email' style={{ marginTop:"3%", marginBottom:"3%" }} contrast label='Email' id='typeEmail' type='email' value={signUpData.email} onChange={handleSignUpChange} />         
              <MDBInput name='password' style={{ marginTop:"3%", marginBottom:"3%" }} contrast label='Password' id='typePasswordSignup' type='password' value={signUpData.password} onChange={handleSignUpChange} />         
              <MDBBtn style={{marginTop:"2%"}} onClick={submitSignUp}>Sign Up Now</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
      { signupResult === "fail" && (
        <div style={{marginTop:'2%'}} className="alert alert-danger" role="alert">
          Signup failed!
        </div>
      )}
    </MDBContainer>
    

  )
}