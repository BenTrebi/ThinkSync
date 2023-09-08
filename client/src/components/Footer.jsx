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
      <div className='footer text-center p-3'>
        <a className='text-white' href='/'>
          ThinkSync &#128161;
        </a>
      </div>
    </MDBFooter>
  )
}