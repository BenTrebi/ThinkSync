import React from 'react'
import { useState } from 'react';


import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBBtn,
  MDBCol,
  MDBRow,
  MDBInput,
  MDBInputGroup
} from 'mdb-react-ui-kit';


export default function ThinkComponent() {
  const [formVal, setFormVal] = useState([{ idea: '',}])
  const addIdea = () => {
    setFormVal([...formVal, {idea: '',}])
  }
  const deleteIdea=(i) => {
    const newForm = [...formVal]
    newForm.splice(i,1)
    setFormVal(newForm)
  }




  return (
    <>
    <MDBContainer style={{ marginTop:"3%", marginBottom:"3%" }}>
      <MDBRow>
        <MDBCol col='6'>
          <MDBCard className='bg-dark'>
            <MDBCardBody>
            <MDBCardTitle style={{color:'black'}}>Create a Bracket:</MDBCardTitle>
            <MDBInput name='Title' style={{ marginTop:"3%", marginBottom:"3%" }} label='Title/Question' id='titleQuestion' type='text' />
            <div>
              {formVal.map((item, i) =>(
            <MDBInputGroup style={{marginTop:"1%", marginBottom:"1%"}}>
            <MDBInput name='idea' label='Idea'  type='text' />
            <MDBBtn className="btn btn-primary" type="button" id="button-addon1" onClick={deleteIdea}>
               Delete
            </MDBBtn>
            </MDBInputGroup>
            ))}
            </div>
            <MDBInputGroup style={{marginTop:"1%", marginBottom:"1%"}}>
            <MDBInput name='idea' label='Idea' type='text' />
            <MDBBtn className="btn btn-primary" type="button" id="button-addon2" onClick={deleteIdea}>
               Delete
            </MDBBtn>
            </MDBInputGroup>
            <MDBInputGroup style={{marginTop:"1%", marginBottom:"1%"}}>
            <MDBInput name='idea' label='Idea'  type='text' />
            <MDBBtn className="btn btn-primary" type="button" id="button-addon3" onClick={deleteIdea}>
               Delete
            </MDBBtn>
            </MDBInputGroup>
            <MDBInputGroup style={{marginTop:"1%", marginBottom:"1%"}}>
            <MDBInput name='idea' label='Idea' type='text' />
            <MDBBtn className="btn btn-primary" type="button" id="button-addon4" onClick={deleteIdea}>
              Delete
            </MDBBtn>
            </MDBInputGroup>
            <MDBBtn style={{marginTop:"2%", marginRight: "80%"}} className='addButton' onClick={addIdea}>Add Choice</MDBBtn>
            <MDBBtn style={{marginTop:"2%"}} className='submitButton'>Submit</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </>
  )
}