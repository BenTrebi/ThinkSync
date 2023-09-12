import React from 'react'
import { useState, useEffect } from 'react';
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
  //get current user from session
  const { currUser } = useUserContext()


  //put oneBracket into state
  const [ oneBracket, setOneBracket ] = useState([])

  // async function getBrackets(userId){//circumvent currUser for now
  async function getOneBracket(){
    const bracketId = '64ff7ef0a426228b29921105'//circumvent currUser for now
    const result = await fetch(`/api/bracket/history/${bracketId}`)
    const data = await result.json()
    setOneBracket(data)
  }

  //circumvent currUser for now
    useEffect(() => {
      getOneBracket()
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
            <MDBCardTitle className='text-white'>Saved Bracket whoohoo:</MDBCardTitle>
            <ul >
                <li>
                    {oneBracket.questionTitle}
                </li>
            </ul>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </>
  )
}

// export default function Sync() {

//   // const [round, setRound] = useState(1);
//   // const [winners, setWinners] = useState({});
//   // const [originBracket, setOriginBracket] = useState(null);

//   // This is the object_id for a bracket in Mongo, hardcoded here (to-do).
//   // const bracketId = '64fb994606371152ba2eed01' //project3 bracket
//   const bracketId = '64ff62aa154bba90c48ed4f8' //favorite movie bracket





//   // fetchData is nested within useEffect because it is asynchronous
//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const bracketData = await fetchBracket(bracketId);
//         setOriginBracket(bracketData);
//         // console.log(bracketData)
//       } catch (error) {
//         console.error(`\nerror fetching bracketData:\n${error}`);
//       }
//     }

//     // here we call the function immediately and the originBracket is no longer null (state change)
//     fetchData(bracketId);

//   }, []);

//   // This tracks and compares vote count with decision count to change state of round.
//   // useEffect(() => {
//   //   const voteCount = Object.keys(winners).length;

//   //   if (voteCount === 0) {
//   //     setRound(1);
//   //     console.log(round, voteCount);
//   //   } else if (voteCount === pairedIdeas.length) { 
//   //     setRound(round + 1);
//   //   } else {
//   //     // continue..
//   //   }
//   // }, [winners]);

//   // This function queries the database for the bracketData by ID, it is called above ^.
//   async function fetchBracket(bracketId) {
//     try {
//       const response = await fetch(`/api/bracket/${bracketId}`)
//       const bracketData = await response.json()
//       return bracketData
//     } catch (error) {
//       return console.error(`\nerror fetching bracketData:\n${error}`)
//     }
//   }

//   // Pairs ideas and pushes them into a new array.
//   const pairIdeas = (originBracketIdeas) => {
//     const pairedIdeas = [];
//     const length = originBracketIdeas.length;

//     // loop through array in pairs
//     for (let i = 0; i < length; i += 2) {
//       // If there's at least one more idea after the current pair
//       if (i + 1 < length) {
//         pairedIdeas.push([originBracketIdeas[i], originBracketIdeas[i + 1]]);
//       } else {
//         // if odd number of ideas, then push last item individually
//         pairedIdeas.push([originBracketIdeas[i]]);
//       }
//     }

//     return pairedIdeas;
//   };

//   // reset the entire bracket
//   const handleReset = () => {
//     setWinners({})
//   }

//   // This function will be called to post results of finished round to database.
//   function handleRoundPost() {

//   }

//   const handleWinnerClick = (index, ideaIndex) => {
//     const updatedWinners = {...winners};

//     updatedWinners[index] = {
//       decision: index + 1,
//       vote: pairedIdeas[index][ideaIndex].ideaText,
//     };

//     setWinners(updatedWinners);
//     console.log(updatedWinners)

//     // To-Do: implement check here if all decision divs have a winner selected..

//     console.log(`handleWinnerClick called for Bracket ${index + 1} (pairedIdeas[${index}]) with winner being option ${ideaIndex + 1} (pairedIdeas[${index}][${ideaIndex}])`)
//   };

//   const originBracketTitle = originBracket ? originBracket.bracket.questionTitle : '';
//   const originBracketIdeas = originBracket ? originBracket.ideas : [];
  
//   // variable that contains all ideas paired into a new array
//   const pairedIdeas = pairIdeas(originBracketIdeas);

//   return (
//     <MDBContainer>
//       <h2 className='sync-title'>{originBracketTitle}</h2>
      
//       <MDBRow className='round d-flex flex-nowrap'>
//         {/* mapping over pairedIdeas array to generate Decision divs*/}
//         {pairedIdeas.map((pair, index) => (
//           <MDBCol key={index} size='' className='mt-5'>
//             <div className='decision'>
//               <MDBCard className='decision-card bg-dark'>

//                 <MDBCardTitle className='text-center mt-2' 
//                               style={{ color: 'darkgray', fontSize: '1em' }}>
//                               Decision <span style={{ color: 'white' }}>{index + 1}</span>
//                 </MDBCardTitle>

//                 <MDBCardBody className='decision-pair-container d-flex justify-content-center flex-nowrap'>
//                   <div className='decision-pair-item d-flex flex-wrap justify-content-center align-items-end'>

//                   {/* checking if ideaText is not null before rendering */}
//                   {pair[0] && pair[0].ideaText && (
//                     <MDBCardText className='idea-text text-white d-flex justify-content-center'>
//                       {pair[0].ideaText}
//                     </MDBCardText>
//                   )}

//                   <MDBBtn floating 
//                           className='decision-button' 
//                           onClick={() => handleWinnerClick(index, 0)}
//                           disabled={winners[index] !== undefined}>
//                     <MDBIcon fas icon="tint" /></MDBBtn>
//                   </div>

//                   {pair[1] && (
//                     <div className='decision-pair-item d-flex flex-wrap justify-content-center align-items-end'>
//                       {/* checking if ideaText is not null before rendering */}
//                       {pair[1].ideaText && (
//                         <MDBCardText className='idea-text text-white d-flex justify-content-center'>
//                           {pair[1].ideaText}
//                         </MDBCardText>
//                       )}

//                       <MDBBtn floating 
//                               className='decision-button' 
//                               onClick={() => handleWinnerClick(index, 1)}
//                               disabled={winners[index] !== undefined}
//                       ><MDBIcon fas icon="tint" /></MDBBtn>
//                     </div>
//                   )}
//                 </MDBCardBody>
//               </MDBCard>
//             </div>
//           </MDBCol>
//         ))}
//       </MDBRow>

//       <MDBBtn className='mt-4' onClick={handleReset} disabled={winners.length === 0} style={{ backgroundColor: 'purple'}}>Reset</MDBBtn>

//       {/* display winner data (mainly for development debugging)
//       The decision-log outputs vote for each decision of each round */}
//       <div className='decision-log'>
//       <h5 className='mt-4'>{`Round ${round}`}</h5>
//       {Object.keys(winners).map((decisionIndex, index) => (
//           <div key={index}>
//             <p style={{ fontFamily: 'monospace', fontSize: '0.8em'}}>
//               Decision <strong style={{ color: 'darkgray' }}>{winners[decisionIndex].decision}</strong> vote: {winners[decisionIndex].vote}
//             </p>
//           </div>
//       ))}
//     </div>

//     </MDBContainer>
//   )
// }