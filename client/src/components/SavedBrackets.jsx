import React, { useEffect, useState } from 'react'
import { useUserContext } from "../utils/UserContext"
import { Link } from 'react-router-dom'
import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
  MDBRow,
  MDBListGroup,
  MDBListGroupItem,
  MDBRipple,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function SavedBrackets() {

  const { currUser } = useUserContext()
  console.log(currUser)

  const [ brackets, setBrackets ] = useState([])

  async function getBrackets() {
    const result = await fetch(`/api/bracket/history/${currUser.data._id}`)
    const data = await result.json()
    setBrackets(data)
  }

    useEffect(() => {
      getBrackets()
  },[currUser])


  return (
    <MDBContainer className='mt-5'>
      <MDBRow>
        <MDBCol col='2'>
          <MDBCard className='bg-dark text-white'>
            <MDBCardBody>
            <MDBCardTitle className='text-white'>Your Completed Brackets:</MDBCardTitle>
            <MDBListGroup className='mt-4'>

              { brackets.map( (bracket) => (
                <MDBRipple>
                  
                    <MDBListGroupItem action noBorders className='px-3 bg-dark'>
                      <Link to ={`onesavedbracket/${bracket._id}`}>
                        <MDBBtn className='saved-bracket-item'>
                          {bracket.questionTitle}
                        </MDBBtn>
                      </Link>
                    </MDBListGroupItem>

                </MDBRipple>
              ))}

            </MDBListGroup>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}
