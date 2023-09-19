import React from 'react'
import { Link } from 'react-router-dom'
import ThinkComponent from '../components/ThinkComponent'
import SavedBrackets from '../components/SavedBrackets'
import {
  MDBContainer,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';


export default function Think() {
  return (
    <MDBContainer>
        <MDBRow>
          <MDBCol>
            <ThinkComponent />
          </MDBCol>
        </MDBRow>
        <MDBRow>
        <MDBCol>
            <SavedBrackets />
          </MDBCol>
        </MDBRow>
    </MDBContainer>
  )
}

