import React from 'react'

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

// card component: https://mdbootstrap.com/docs/standard/components/cards/
// form components: https://mdbootstrap.com/docs/standard/forms/input-fields/


export default function Login() {

  return (
    <>
    <MDBContainer>
    <div className="card w-50">
      <div className="card-body">
      <div class="form-outline">
        <input type="text" id="typeText" className="form-control" />
        <label className="form-label" for="typeText">Username</label>
        <input type="password" id="typePassword" className="form-control" />
        <label className="form-label" for="typePassword">Password</label>
      </div>
        <MDBBtn>Login</MDBBtn>
      </div>
    </div>
    </MDBContainer>
    </>
  )
}