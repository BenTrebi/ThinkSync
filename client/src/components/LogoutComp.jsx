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
} from 'mdb-react-ui-kit';

// card component: https://mdbootstrap.com/docs/standard/components/cards/

export default function Logout() {

  const [loggedIn, setLoggedIn] = useState(true);

  async function logout(e){
    e.preventDefault()
    console.log()

    setLoggedIn(false)
    window.location.href = "/"
  }

  return (
  
    <MDBContainer style={{ marginTop:"3%", marginBottom:"3%" }}>
      <MDBRow>
        <MDBCol col='6'>
          <MDBCard className='bg-dark'>
            <MDBCardBody>
              <MDBCardTitle>Log Out:</MDBCardTitle>
                <MDBCardBody className='text-white'>
              Are you sure you'd like to log out? All unsaved progess will not persist. 
                </MDBCardBody>      
              <MDBBtn style={{marginTop:"2%"}} onClick={logout}>Log Out</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    
  )
}