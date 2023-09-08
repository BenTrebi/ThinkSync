import React from 'react'
import ThinkComponent from '../components/ThinkComponent'
import SavedBrackets from '../components/SavedBrackets'




export default function Think() {
  return (
    <>
       <span style={{display:'flex' }}>
        <aside>
       <SavedBrackets />
       </aside>
      <ThinkComponent />
    </span> 
    </>
  )
}