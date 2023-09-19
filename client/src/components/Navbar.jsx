import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Cookies from 'js-cookie';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  // MDBNavbarNav,
  // MDBNavbarItem,
  // MDBNavbarLink,
  // MDBBtn,
  // MDBDropdown,
  // MDBDropdownToggle,
  // MDBDropdownMenu,
  // MDBDropdownItem,
  MDBCollapse,
} from 'mdb-react-ui-kit';

export default function Navbar({ isAuthenticated } ) {
  // https://mdbootstrap.com/docs/react/navigation/navbar/

  const [showBasic, setShowBasic] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  // Function to handle user login
  const handleLogin = () => {
    // Perform login logic
    // Once logged in, set loggedIn to true
    setLoggedIn(true);
    window.location.href = '/loginsignup'
  };

  // Function to handle user logout
  const handleLogout = () => {
    // Perform logout logic
    // Once logged out, set loggedIn to false
    Cookies.remove('auth-cookie')
    setLoggedIn(false);
    window.location.href = '/loginsignup'
  };

  useEffect(() => {
    setShowBasic(false); // Ensure the menu is closed by default
  }, [isAuthenticated]);

  return (
    <MDBNavbar id='navbar' expand='lg' dark>
      <MDBContainer fluid>
        <MDBNavbarBrand href='/'>
          <img
            src='/assets/logo.png'
            height='40'
            alt=''
            loading='lazy'
            className='logo'
          />
          ThinkSync
        </MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <div className='d-flex justify-content-end align-items-center w-100'>
            <ul className='navbar-nav'>
              
              {isAuthenticated ? (
                <>
                  {/* Render logout button when authenticated */}
                  <li className='nav-item'>
                <a className='nav-link' href='/'>
                  Home
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='/think'>
                  Think
                </a>
              </li>
              {/* <li className='nav-item'>
                <a className='nav-link' href='/sync'>
                  Sync
                </a>
              </li> */}
              <li className='nav-item'>
                <a onClick={handleLogout} className='nav-link' href='/loginsignup'>
                  Logout
                </a>
              </li>
                </>
              ) : (
                <>
                  {/* Render login/signup button when not authenticated */}
              <li className='nav-item'>
                <a onClick={handleLogin} className='nav-link' href='/loginsignup'>
                  Login | Signup
                </a>
              </li>
                </>
              )}
            </ul>
          </div>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}

Navbar.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};