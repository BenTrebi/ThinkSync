import React, { useEffect, useState } from 'react'
//TODO: Verify this path
import { useUserContext } from "../utils/UserContext" //comment out to circumvent currUser
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
  //code1of3 to use currUser
  const { currUser } = useUserContext()
  console.log(currUser)

  //put brackets into state
  const [ brackets, setBrackets ] = useState([])

  async function getBrackets(){//code2of3 to use currUser
  // async function getBrackets(){//code1of3 to circumvent currUse
  //   const userId = '65020085ff66366cfe539df3'//code2of3 circumvent currUser
    const result = await fetch(`/api/bracket/history/${currUser.data._id}`)
    const data = await result.json()
    setBrackets(data)
  }

  //code3of3 to circumvent currUser
    useEffect(() => {
      getBrackets()
  },[])

  //code3of3 to use currUser
  // useEffect(() => {
  //   if( currUser?.data._id ){
  //     getBrackets()
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