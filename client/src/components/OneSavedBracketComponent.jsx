import React from 'react'
import { useState, useEffect } from 'react';
import { useParams} from 'react-router-dom';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBIcon
} from 'mdb-react-ui-kit';

export default function OneSavedBracket() {
  //access parameters from URL using useParams
  const {bracketId} = useParams();

  console.log(bracketId)  //this does capture the bracketId from the URL!!!
  console.log(`/api/bracket/${bracketId}`)
 
  //get current user from session
  // const { currUser } = useUserContext()


  //put oneBracket into state
  const [ oneBracket, setOneBracket ] = useState([])


  // async function getBrackets(userId){//circumvent currUser for now
  async function getOneBracket(){
    
    const result = await fetch(`/api/bracket/${bracketId}`)
    console.log(result)
    const data = await result.json()
    console.log(data)
    setOneBracket(data)
  }

  console.log(oneBracket)
  //this breaks oneBracket also
  // let snuffy = oneBracket.bracket.questionTitle
  // console.log(snuffy)
  //these two console.logs break oneBracket
  // console.log(oneBracket.bracket.questionTitle)
  // console.log(oneBracket.ideas[0].ideaText)

  //circumvent currUser for now
    useEffect(() => {
      getOneBracket()
  },[])


  //circumvent currUser for now
  // useEffect(() => {
  //   if( currUser?.data._id ){
  //     getOneBracket(currUser?.data._id)
  //   }
  // },[currUser])

  return (
    <>
    <MDBContainer style={{ marginTop:"3%", marginBottom:"3%" }}>
      <MDBRow>
        <MDBCol col='2'>
          <MDBCard className='bg-dark text-white'>
            <MDBCardBody>
            <MDBCardTitle className='text-white'>Saved Bracket whoop whoop:</MDBCardTitle>
            <p> something or other</p>
            <ul >


            {oneBracket.ideas.map((item, index) => (
              <div key={index}>
               <div>ideaNum: {item.ideaNum}</div>
               <div>ideaText: {item.ideaText}</div>
              </div>
            ))}

            





              {/* { oneBracket.ideas.map( (bracketBits) => (
                <li key = {bracketBits._id}>
                  {bracketBits.ideaNum}
                </li>
              ))} */}
            </ul>
            <p> and something else again</p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </>
  )
}


