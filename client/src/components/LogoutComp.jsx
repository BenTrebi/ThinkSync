import { useState }  from 'react'

import PropTypes from 'prop-types';

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

export default function LogoutComp({ isAuthenticated }) {
   const [showConfirmation, setShowConfirmation] = useState(false);

  async function logout(e) {
    e.preventDefault();
    setShowConfirmation(false);
    console.log("Logging out...");

    try {
      // Make a POST request to your server-side logout route
      const response = await fetch('/api/auth/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        console.log('Logout successful.');
        // Redirect the user to the login page or any other appropriate page
        window.location.href = '/login';
      } else {
        console.error('Logout failed.');
        // Handle the error, e.g., by displaying an error message to the user
      }
    } catch (error) {
      console.error('An error occurred during logout:', error);
      // Handle the error, e.g., by displaying an error message to the user
    }
  }

  return (
    <MDBContainer style={{ marginTop: '3%', marginBottom: '3%' }}>
      {isAuthenticated && ( // Only render if the user is authenticated
        <MDBRow>
          <MDBCol col='6'>
            <MDBCard className='bg-dark'>
              <MDBCardBody>
                <MDBCardTitle>Log Out:</MDBCardTitle>
                <MDBCardBody className='text-white'>
                  Are you sure you would like to log out? All unsaved progress will not persist.
                </MDBCardBody>
                <MDBBtn style={{ marginTop: '2%' }} onClick={() => setShowConfirmation(true)}>Log Out</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      )}
      {showConfirmation && (
        // Render a confirmation modal when showConfirmation is true
        // You can use a modal component from a library or create your own
        <div className='modal'>
          <div className='modal-dialog'>
            <div className='modal-content'>
              <div className='modal-header'>
                <h5 className='modal-title'>Confirm Logout</h5>
                <button type='button' className='btn-close' onClick={() => setShowConfirmation(false)}></button>
              </div>
              <div className='modal-body'>
                Are you sure you want to log out?
              </div>
              <div className='modal-footer'>
                <button type='button' className='btn btn-secondary' onClick={() => setShowConfirmation(false)}>Cancel</button>
                <button type='button' className='btn btn-danger' onClick={logout}>Log Out</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </MDBContainer>
  );
}


LogoutComp.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};