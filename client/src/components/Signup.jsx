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

export default function Signup() {

  return (
    <>
    <MDBContainer style={{ marginTop:"3%", marginBottom:"3%" }}>
    <div className="card w-50">
      <div className="card-body">
        <h4>Sign Up:</h4>
        <div className="form-outline">
          <input type="text" id="typeTextSignUp" className="form-control" />
          <label className="form-label" htmlFor="typeText">Username</label>
        </div>
        <div className="form-outline">
          <input type="email" id="typeEmail" className="form-control" />
          <label className="form-label" htmlFor="typeEmail">Email</label>
        </div>
        <div className="form-outline">
          <input type="password" id="typePasswordSignUp" className="form-control" />
          <label className="form-label" htmlFor="typePassword">Password</label>
        </div>
        <MDBBtn style={{marginTop:"2%"}}>Sign Up</MDBBtn>
      </div>
    </div>
    </MDBContainer>
    </>
  )
}