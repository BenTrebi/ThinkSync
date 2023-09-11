import { MDBBtn } from "mdb-react-ui-kit";
import React, { useState } from "react";



export default function addInput(){
  const [idea, setIdea]= useState([])
  const handleAdd=() => {
    const abc=[...idea, []]
    setIdea(abc)
  }
  const handleChange=(OnChangeidea,i)=>{
    const inputData = [...idea]
    inputData[i]= idea.target.value
    setIdea(inputData)
  }
  console.log(idea,"data")


  return(
    <>
    <MDBBtn onClick={() => handleAdd()}>Add Idea</MDBBtn>
    {idea.map((data,i) =>{
      return(
        <input onChange={e=>handleChange(e,i)} />
      )
    })}
    </>
  );
}


