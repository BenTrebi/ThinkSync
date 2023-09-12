import React, { useEffect, useState } from 'react'
//TODO: Verify this path
import { useUserContext } from "../utils/UserContext"


import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCol,
  MDBRow,
} from 'mdb-react-ui-kit';

export default function SavedBrackets() {
  //get current user from session
  const { currUser } = useUserContext()


  //put brackets into state
  const [ brackets, setBrackets ] = useState([])

  async function getBrackets(userId){//circumvent currUser for now
  // async function getBrackets(){
    // const userId = '64fb98af06371152ba2eecf9'//circumvent currUser for now
    const result = await fetch(`/api/bracket/history/${userId}`)
    const data = await result.json()
    setBrackets(data)
  }

  //circumvent currUser for now
  //   useEffect(() => {
  //     getBrackets()
  // },[])

  //circumvent currUser for now
  useEffect(() => {
    if( currUser?.data._id ){
      getBrackets(currUser?.data._id)
    }
  },[currUser])

  return (
    <>
    <MDBContainer style={{ marginTop:"3%", marginBottom:"3%" }}>
      <MDBRow>
        <MDBCol col='2'>
          <MDBCard className='bg-dark text-white'>
            <MDBCardBody>
            <MDBCardTitle className='text-white'>Saved Brackets:</MDBCardTitle>
            <ul >
              { brackets.map( (bracket) => (
                <li>
                  <a href={`onesavedbracket/${bracket._id}`}>
                    {bracket.questionTitle}
                  </a>
                </li>
              ))}
            </ul>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </>
  )
}