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
  const {bracketId} = useParams();

  // console.log(bracketId)
  // console.log(`/api/bracket/${bracketId}`)

  const [ oneBracket, setOneBracket ] = useState(null)
  const [ winner, setWinner ] = useState(null)

  async function getOneBracket(){
    
    const result = await fetch(`/api/bracket/${bracketId}`)
    const data = await result.json()
    setOneBracket(data)
  }

  // console.log(oneBracket)


  function getWinner(){
    let currentLeader = { ideaText: "", votes: [] }
    oneBracket.ideas.map( idea => {
      if( idea.votes.length > currentLeader.votes.length ){
        currentLeader = idea
      }
    })
    // console.log(currentLeader)
    setWinner(currentLeader)
  }

  useEffect(() => {
    if( oneBracket) getWinner()
  },[oneBracket])

    useEffect(() => {
      if( bracketId ) getOneBracket()
  },[bracketId])


  if( !oneBracket ) return <></>

  return (
    <MDBContainer className='mt-5'>
      <MDBRow>
        <MDBCol col='2'>
          <MDBCard className='bg-dark text-white'>
            <MDBCardBody>
            <MDBCardTitle className='text-white'>Saved Bracket:</MDBCardTitle>
            <p> { oneBracket.bracket.questionTitle }</p>
            <ul > 

            {oneBracket.ideas.map((item, index) => (
              <div key={index}>
               <li>{item.ideaText}  ({item.votes.length} votes)</li>
              </div>
            ))}

            </ul>
            { winner !== null && (
              <p> And the winner is ... {winner.ideaText}</p>
            )}
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>    
  )
}
