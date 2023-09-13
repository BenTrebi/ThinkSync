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
  MDBInputGroup,
  MDBIcon
} from 'mdb-react-ui-kit';

export default function ThinkComponent() {
  const [formVal, setFormVal] = useState([{ idea: '' }]);
  const [formInput, setFormInput] = useState({ title: '', ideas: [''] })
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
    // const newForm = [...formVal]
    // newForm.splice(i, 1)
    // setFormVal(newForm)
  }

  const handleInputChange = (e, i) => {
      const {name, value } = e.target;
      const updatedIdeas = [...formInput.ideas];
      updatedIdeas[i] = value;
      setFormInput((prevState) => ({
        ...prevState,
        ideas: updatedIdeas
      }))

    // e.preventDefault();
    // // setAlertState({type: "", message:""})
    // setFormInput({ ...formInput, [e.target.name]: e.target.value })
    console.log(formInput)
  }
  // const onHandle = (e, i) =>  {
  //   let newForm = [...formVal]
  //   newForm[i][e.target.name]=e.target.value
  //   setFormVal
  // }
  // const formValidation=() =>  {
  //   const data = [...formVal]
  //   for (let index = 0; index < data.length; index++) {
  //     // const element = array[index];
  //     if(data[index].idea == "")  {
  //       data[index].ideaCheck= "idea required"
  //     } else if (data[index].idea.length > 1) {
  //       data[index].ideaLengthCheck = "idea needs to be greater than 1"
  //     }
  //     else{
  //       data[index].ideaCheck =""
  //       data[index].ideaLengthCheck = ""
  //     }
  //   }
  //   setFormVal(data)
  // }
  const handleSubmit= (e) => {
    e.preventDefault();
    console.log("Form Data", formInput);
    // formValidation(formVal)
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
      </MDBContainer>
    </>
  )
}