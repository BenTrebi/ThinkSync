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

//code1 to use currUser current user from session - don't need user on this page
  // const { currUser } = useUserContext()


  //put oneBracket into state
  const [ oneBracket, setOneBracket ] = useState(null)
  const [ winner, setWinner ] = useState(null)

  async function getOneBracket(){
    
    const result = await fetch(`/api/bracket/${bracketId}`)
    //console.log(result)
    const data = await result.json()
    //console.log(data)
    console.log("1")
    setOneBracket(data)
  }

  console.log("2")
  console.log(oneBracket)


  function getWinner(){
    let currentLeader = { ideaText: "", votes: [] }
    oneBracket.ideas.map( idea => {
      if( idea.votes.length > currentLeader.votes.length ){
        currentLeader = idea
      }
    })
    console.log(currentLeader)
    setWinner(currentLeader)
  }

  useEffect(() => {
    if( oneBracket) getWinner()
  },[oneBracket])

    useEffect(() => {
      if( bracketId ) getOneBracket()
  },[bracketId])


  // //code to use currUser - don't need current user on this page
  // useEffect(() => {
  //   if( currUser?.data._id ){
  //     getOneBracket(currUser?.data._id)
  //   }
  // },[currUser])


  if( !oneBracket ) return <></>

  // const ideaVoteList=[]
  // oneBracket.ideas.map((item, index)=> (
  //   key = {index},
  //   ideaVoteList.push({ideaWords:item.ideaText, voteCount: item.votes.length})

  // ));

  // console.log(ideaVoteList)

  

  return (
    <>
    <MDBContainer style={{ marginTop:"3%", marginBottom:"3%" }}>
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
    </>
  )
}





// {/* <MDBContainer>
// <h2 className='sync-title'>bunny fluff</h2>

// <MDBRow className='round d-flex flex-nowrap'>
//   {/* mapping over pairedIdeas array to generate Decision divs*/}
//   {pairedIdeas.map((pair, index) => (
//     <MDBCol key={index} size='' className='mt-5'>
//       <div className='decision'>
//         <MDBCard className='decision-card bg-dark'>

//           <MDBCardTitle className='text-center mt-2' 
//                         style={{ color: 'darkgray', fontSize: '1em' }}>
//                         Decision <span style={{ color: 'white' }}>{index + 1}</span>
//           </MDBCardTitle>

//           <MDBCardBody className='decision-pair-container d-flex justify-content-center flex-nowrap'>
//             <div className='decision-pair-item d-flex flex-wrap justify-content-center align-items-end'>

//             {/* checking if ideaText is not null before rendering */}
//             {pair[0] && pair[0].ideaText && (
//               <MDBCardText className='idea-text text-white d-flex justify-content-center'>
//                 {pair[0].ideaText}
//               </MDBCardText>
//             )}

//             <MDBBtn floating 
//                     className='decision-button' 
//                     onClick={() => handleWinnerClick(index, 0)}
//                     disabled={winners[index] !== undefined}>
//               <MDBIcon fas icon="tint" /></MDBBtn>
//             </div>

//             {pair[1] && (
//               <div className='decision-pair-item d-flex flex-wrap justify-content-center align-items-end'>
//                 {/* checking if ideaText is not null before rendering */}
//                 {pair[1].ideaText && (
//                   <MDBCardText className='idea-text text-white d-flex justify-content-center'>
//                     {pair[1].ideaText}
//                   </MDBCardText>
//                 )}

//                 <MDBBtn floating 
//                         className='decision-button' 
//                         onClick={() => handleWinnerClick(index, 1)}
//                         disabled={winners[index] !== undefined}
//                 ><MDBIcon fas icon="tint" /></MDBBtn>
//               </div>
//             )}
//           </MDBCardBody>
//         </MDBCard>
//       </div>
//     </MDBCol>
//   ))}
// </MDBRow>

// <MDBBtn className='mt-4 d-flex flex-wrap' onClick={handleVoteReset} disabled={winners.length === 0} style={{ backgroundColor: 'purple'}}>Reset Votes</MDBBtn>

// <MDBBtn className='mt-4' onClick={handleSyncReset} disabled={winners.length === 0} style={{ backgroundColor: 'maroon'}}>Reset Sync</MDBBtn>

// {/* display winner data (mainly for development debugging)
// The decision-log outputs vote for each decision of each round */}
// <div className='decision-log'>
// <h5 className='mt-4'>{`Round ${round}`}</h5>
// {Object.keys(winners).map((decisionIndex, index) => (
//     <div key={index}>
//       <p style={{ fontFamily: 'monospace', fontSize: '0.8em'}}>
//         Decision <strong style={{ color: 'darkgray' }}>{winners[decisionIndex].decision}</strong> vote: {winners[decisionIndex].vote}
//       </p>
//     </div>
// ))}
// </div>

// </MDBContainer> */}


