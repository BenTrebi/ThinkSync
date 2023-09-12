import React, { useEffect, useState } from 'react'
//TODO: Verify this path
// import { useUserContext } from "../utils/UserProvider" ///circumvent currUser for now
import { Link } from 'react-router-dom'

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
  // const { currUser } = useUserContext()


  //put brackets into state
  const [ brackets, setBrackets ] = useState([])

  // async function getBrackets(userId){//circumvent currUser for now
  async function getBrackets(){
    const userId = '6500b324072e326187a1fdf1'//circumvent currUser for now
    const result = await fetch(`/api/bracket/history/${userId}`)
    const data = await result.json()
    setBrackets(data)
  }

  //circumvent currUser for now
    useEffect(() => {
      getBrackets()
  },[])

  //circumvent currUser for now
  // useEffect(() => {
  //   if( currUser?.data._id ){
  //     getBrackets(currUser?.data._id)
  //   }
  // },[currUser])



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
                <li key = {bracket._id}><Link to ={`onesavedbracket/${bracket._id}`}>
                  {bracket.questionTitle}
                </Link>
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



// { brackets.map( (bracket) => (
                
//   <li>
//     <a href={`onesavedbracket/${bracket._id}`}>
//       {bracket.questionTitle}
//       {bracket._id}
//     </a>
//   </li>
// ))}