import React from 'react'
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';
import groupPhoto from '../assets/images/groupPhoto.jpg'

export default function Home() {
  return (
    <>
    
    <MDBContainer className='mt-4'>
  
      <MDBRow>
        <MDBCol md='12'>
          <MDBCard alignment='center' className='bg-dark text-white'>
          <MDBCardImage src={ groupPhoto } position='top' alt='...' />
            <MDBCardHeader  tag="h2">About</MDBCardHeader>
            <MDBCardBody>
              <p>ThinkSync is a dynamic online platform designed to enhance collaboration and productivity among individuals and teams. Whether you're a student, professional, or creative thinker, ThinkSync provides a virtual space for brainstorming, organizing ideas, and working together seamlessly.</p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>

    </MDBContainer>

    <MDBContainer className='mt-4'>
      <MDBRow>

        <MDBCol md='6'>
            <MDBCard className='text-white mb-6 new-think'>
              <MDBCardBody>
                <MDBCardTitle>New Think</MDBCardTitle>
                <MDBBtn className='button'href='/think'>
                          Get Started
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>          
        </MDBCol>
        
        <MDBCol md='6'>
            <MDBCard className='text-white mb-6 new-think'>
              <MDBCardBody>
                <MDBCardTitle>View Syncs</MDBCardTitle>
                <MDBBtn className='button'href='/sync'>
                          Open The Faucet
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>          
        </MDBCol>

      </MDBRow>

    </MDBContainer>
      

    
    </>

  )
}