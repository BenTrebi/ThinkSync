import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';


export default function Footer() {

  return (
    <MDBFooter className='fixed-bottom bg-dark text-center text-white'>

      <div className='footer text-center p-1'>

        <img 
            src='./assets/logo.png'
            height='30'
            alt=''
            loading='lazy'
            className='logo'
          />
          
          &nbsp;&nbsp;

            ThinkSync
          
          &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;

          <a className='footer-link' href='https://github.com/BenTrebi/ThinkSync'>
            GitHub&nbsp;&nbsp;<MDBIcon fab icon="github" />
          </a>
      </div>
    </MDBFooter>
  )
}