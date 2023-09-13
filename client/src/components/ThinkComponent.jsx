import React from 'react'
import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import { useUserContext } from '../utils/UserContext';

import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBBtn,
  MDBCol,
  MDBRow,
  MDBInput,
  MDBInputGroup,
  MDBIcon
} from 'mdb-react-ui-kit';

export default function ThinkComponent() {
  const { currUser } = useUserContext();
  const [formVal, setFormVal] = useState([{ idea: '' }]);
  const [formInput, setFormInput] = useState({ title: '', ideas: [''] })

  const [ alertState, setAlertState ] = useState({type: "", message:""})

  const addIdea = () => {
    setFormInput((prevState) => ({
      ...prevState,
      ideas: [...prevState.ideas, ''],
    }))

    setFormVal([...formVal, { idea: '', }])
  }
  const deleteIdea = (i) => {
    const updatedIdeas = formInput.ideas.filter((_, index) => index !== i);
    setFormInput((prevState) => ({
      ...prevState,
      ideas: updatedIdeas,
    }))
  }

  const handleInputChange = (e, i) => {
      const {name, value } = e.target;
      const updatedIdeas = [...formInput.ideas];
      updatedIdeas[i] = value;
      setFormInput((prevState) => ({
        ...prevState,
        ideas: updatedIdeas
      }))
    console.log(formInput)
  }

  function checkErrors(boolean) {
    if( boolean === true) {
      setAlertState({type:"danger", message: "Please Enter all Form Fields!"})
    }}

    function generateNumber(){
      const random = Math.floor(Math.random() * (1000 - 1 + 1) + 1)
      const secs = Math.round(Date.now() / 1000 ) + random
      console.log(secs)
      return secs
    }


    function convertData(data){
      let ideers= []
      data.map( item => {
        const obj = {
          ideaNum: generateNumber(),
          ideaText: item,
          userId: currUser.data._id
        }
        ideers.push(obj)
      })
      return ideers
    }

  const handleSubmit = async (e)  => {
    e.preventDefault()

    let ideaList = [];

    for (let idea of formInput.ideas) {
      ideaList.push(idea)
    }

    console.log(formInput)
    console.log(currUser)
    const requestData = {
      bracket:{
        questionTitle: formInput.title,
        userId: currUser.data._id
      },
      ideers: convertData(formInput.ideas)
    }

   console.log(requestData)

    let errorsFound = 0 

    for (const key in formInput) {
      if (!formInput[key] || !formInput[key].length) {
        errorsFound++
      }
    }

    if( errorsFound > 0 ){
      checkErrors(true)
      return
    }
    
    const query = await fetch("/api/idea", {
      method: "POST",
      body: JSON.stringify(requestData),
      headers: {
        "Content-Type": "application/json",
      }
    })
      
    const result = await query.json()
    console.log(query)
    console.log(result)

    if( query.ok ){
      // console.log('fires')
      window.location.href = `/sync/${result.bracket.id}`
    } else {
      // continue..
    }
  }


  return (
    <>
      <MDBContainer style={{ marginTop: "3%", marginBottom: "3%" }}>
        <MDBRow>
          <MDBCol col='6'>
            <MDBCard className='bg-dark'>
              <MDBCardBody>


                <MDBCardTitle style={{ color: 'white' }}>Create a Bracket:</MDBCardTitle>

                <MDBInput
                  className='text-white'
                  key={formInput.key}
                  name='Title'
                  style={{ marginTop: "3%", marginBottom: "3%" }}
                  label='Title/Question'
                  id='titleQuestion'
                  type='text'

                  value={formInput.title || ""}
                  onChange={(e) => setFormInput({ ...formInput, title: e.target.value })}
                  contrast

                />
                {formInput.ideas.map((idea, i) => (
                  <MDBInputGroup style={{ marginTop: "1%", marginBottom: "1%" }} key={i}>
                    <MDBInput
                    className='text-white'
                    name={`idea${i + 1}`}
                    label='Idea'
                    type='text'
                    value={idea}
                    onChange={(e) => handleInputChange(e, i)} 
                    contrast
                    />
                    <MDBBtn className="btn btn-primary" type="button" id={`button-addon${i + 1}`} onClick={() => deleteIdea(i)}color='danger'>
                    <MDBIcon fas icon="backspace" />
                    </MDBBtn>
                  </MDBInputGroup>
                ) )}
                {/* {formVal.map((item, i) => (
                  <MDBInputGroup style={{ marginTop: "1%", marginBottom: "1%" }} key={i}>
                    <MDBInput name='idea' label='Idea' type='text' value={formInput.idea || ""} onChange={handleInputChange} />
                    <MDBBtn className="btn btn-primary" type="button" id="button-addon1" onClick={deleteIdea}>
                      Delete
                    </MDBBtn>
                  </MDBInputGroup>
                ))} */}
                {/* <MDBInputGroup style={{marginTop:"1%", marginBottom:"1%"}}>
            <MDBInput  name='idea2' label='Idea' type='text' value={formInput.idea2 || ""} onChange={handleInputChange} />
            <MDBBtn className="btn btn-primary" type="button" id="button-addon2" onClick={deleteIdea}>
               Delete
            </MDBBtn>
            </MDBInputGroup>
            <MDBInputGroup style={{marginTop:"1%", marginBottom:"1%"}}>
            <MDBInput  name='idea3' label='Idea'  type='text' value={formInput.idea3 || ""} onChange={handleInputChange} />
            <MDBBtn className="btn btn-primary" type="button" id="button-addon3" onClick={deleteIdea}>
               Delete
            </MDBBtn>
            </MDBInputGroup>
            <MDBInputGroup style={{marginTop:"1%", marginBottom:"1%"}}>
            <MDBInput  name='idea4' label='Idea' type='text' value={formInput.idea4 || ""} onChange={handleInputChange} />
            <MDBBtn className="btn btn-primary" type="button" id="button-addon4" onClick={deleteIdea}>
              Delete
            </MDBBtn>
            </MDBInputGroup> */}
                <MDBBtn style={{ marginTop: "2%", marginRight: "80%" }} className='addButton' onClick={addIdea}>Add Idea</MDBBtn>
                <MDBBtn style={{ marginTop: "2%" }} className='submitButton' onClick={handleSubmit}>Submit</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
        { alertState.type.length > 0 && (
      <>
      <Alert variant={alertState.type} className="mt-3">
          {alertState.message}
          </Alert>
      </>
        )}
      </MDBContainer>
    </>
  )
}