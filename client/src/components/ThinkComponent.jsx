import React from 'react'

export default function ThinkComponent() {
  
  function addChoiceInput() {
    console.log("hello")
  }

  return (
    <>
    <form className='createBracket'>
      <h2>Create a Bracket:</h2>
      <h4>Title/Question:</h4>
      <input className='titleInput' type= "text"></input>
      <h5>Options:</h5>
      <ul>
      <li className='choiceInput'><input type= "text"></input></li>
      <li className='choiceInput'><input type= "text"></input></li>
      <li className='choiceInput'><input type= "text"></input></li>
      </ul>
      <button type='addChoices' className='add-button' onClick={ addChoiceInput }>
        Add Choice
      </button>
    </form>
    </>
  )
}