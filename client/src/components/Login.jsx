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

export default function Login() {

  return (
    <>
    <MDBContainer>
    <div className="card w-50">
      <div className="card-body">
      <div class="form-outline">
        <input type="text" id="typeText" class="form-control" />
        <label class="form-label" for="typeText">Username</label>
      </div>
        <MDBBtn></MDBBtn>
      </div>
    </div>
    </MDBContainer>
    </>
  )
}