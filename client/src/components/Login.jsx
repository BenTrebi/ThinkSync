import React from 'react'
import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';

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

// card component: https://mdbootstrap.com/docs/react/components/cards/
// form components: https://mdbootstrap.com/docs/standard/forms/input-fields/

const defaultUser = {
  username:"",
  password:""
}

export default function Login() {
  const [ loginData, setLoginState ] = useState(defaultUser)
  const [ alertState, setAlertState ] = useState({type: "", message:""})

  function handleLoginChange(e) {
    e.preventDefault();
    setLoginState({ ...loginData, [e.target.name]: e.target.value })
    setAlertState({type: "", message:""})
  }

  function checkErrors(boolean) {
    if( boolean === true) {
      setAlertState({type:"danger", message: "Please Enter the correct form information!"})
    }}

  async function submitLogin(e) {
    e.preventDefault()
    console.log(loginData)
    let errorsFound = 0 
    for (const key in loginData) {
      if (!loginData[key] || !loginData[key].length) {
        errorsFound++
      }
    }
    if( errorsFound > 0 ){
      checkErrors(true)
      return
    }

    const query = await fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify(loginData),
      headers: {
        "Content-Type": "application/json",
      }
    })

      const result = await query.json()
      console.log(result)
      if( result.status === "success" && result.payload ){
        window.location.href = "/think"
      } else {
        errorsFound++
        checkErrors(true)
        return
      }
  }

  return (
    <MDBContainer style={{ marginTop:"3%", marginBottom:"3%" }}>
      <MDBRow>
        <MDBCol col='6'>
          <MDBCard className='bg-dark'>
            <MDBCardBody>
              <MDBCardTitle>Login:</MDBCardTitle>
              <MDBInput name='username' style={{ marginTop:"3%", marginBottom:"3%" }} contrast label='Username' id='typeText' type='text' value={loginData.username} 
              onChange={handleLoginChange} />
              <MDBInput name='password' style={{ marginTop:"3%", marginBottom:"3%" }} contrast label='Password' id='typePassword' type='password' value={loginData.password} onChange={handleLoginChange} />
              <MDBBtn style={{marginTop:"2%"}} onClick={submitLogin}>Login</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
      { alertState.type.length > 0 && (
      <>
      <Alert variant={alertState.type} className="mt-3">
          {alertState.message}
          </Alert>
      </>
        )}
    </MDBContainer>
    
  )
  }