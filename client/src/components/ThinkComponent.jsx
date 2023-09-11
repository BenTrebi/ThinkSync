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
  const formValidation=() =>  {
    const data = [...formVal]
    for (let index = 0; index < data.length; index++) {
      // const element = array[index];
      if(data[index].idea == "")  {
        data[index].ideaCheck= "idea required"
      } else if (data[index].idea.length > 1) {
        data[index].ideaLengthCheck = "idea needs to be greater than 1"
      }
      else{
        data[index].ideaCheck =""
        data[index].ideaLengthCheck = ""
      }
    }
    setFormVal(data)
  }
  const onSubmit=(e) => {
    e.preventDefault();
    console.log("submitData", formVal)
    formValidation(formVal)
  }


  return (
    <>
    <MDBContainer style={{ marginTop:"3%", marginBottom:"3%" }}>
      <MDBRow>
        <MDBCol col='6'>
          <MDBCard>
            <MDBCardBody>
            <MDBCardTitle style={{color:'black'}}>Create a Bracket:</MDBCardTitle>
            <MDBInput name='Title' style={{ marginTop:"3%", marginBottom:"3%" }} label='Title/Question' id='titleQuestion' type='text' />
            <div>
              {formVal.map((item, i) =>(
            <MDBInputGroup style={{marginTop:"1%", marginBottom:"1%"}} key={i}>
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
            <MDBBtn style={{marginTop:"2%"}} className='submitButton' onClick={onSubmit}>Submit</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </>
  )
}