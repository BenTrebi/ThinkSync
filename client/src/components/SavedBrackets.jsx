import React, { useEffect, useState } from 'react';
import { useUserContext } from "../utils/UserContext";
import { Link } from 'react-router-dom';
import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBListGroup,
  MDBListGroupItem,
  MDBRipple,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function SavedBrackets() {
  const { currUser } = useUserContext();
  const [brackets, setBrackets] = useState([]);

  async function getBrackets() {
    try {
      // Check to see if currUser cookie exists (!null) before fetching with currUser object.
      if (currUser && currUser.data && currUser.data._id) {
        const result = await fetch(`/api/bracket/history/${currUser.data._id}`);
        const data = await result.json();
        setBrackets(data);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => {
    getBrackets();
  }, [currUser]);

  return (
    <MDBContainer className='mt-5'>
      <MDBCard className='bg-dark text-white'>
        <MDBCardBody>
          <MDBCardTitle className='text-white'>Your Completed Brackets:</MDBCardTitle>
          <MDBListGroup className='mt-4'>
            {/* don't bother to render if the brackets array is empty */}
            {brackets.length > 0 ? (
              brackets.map((bracket) => (
                <MDBRipple key={bracket._id}>
                  <MDBListGroupItem action noBorders className='px-3 bg-dark'>
                    <Link to={`onesavedbracket/${bracket._id}`}>
                      <MDBBtn className='saved-bracket-item'>
                        {bracket.questionTitle}
                      </MDBBtn>
                    </Link>
                  </MDBListGroupItem>
                </MDBRipple>
              ))
            ) : (
              <p>No saved brackets available.</p>
            )}
          </MDBListGroup>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}
