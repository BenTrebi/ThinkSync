import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from 'mdb-react-ui-kit';

export default function Navbar() {
  // https://mdbootstrap.com/docs/react/navigation/navbar/

  const [showBasic, setShowBasic] = useState(false);

  return (
    <MDBNavbar id='navbar' expand='lg' dark>
      <MDBContainer fluid>
        <MDBNavbarBrand href='/'>ThinkSync</MDBNavbarBrand>

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
              <li className='nav-item'>
                <a className='nav-link' href='/sync'>
                  Sync
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='/loginsignup'>
                  Login | Signup
                </a>
              </li>
            </ul>
          </div>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}