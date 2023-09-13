import React from 'react'
import { Link } from 'react-router-dom'
import ThinkComponent from '../components/ThinkComponent'
import SavedBrackets from '../components/SavedBrackets'





export default function Think() {
  return (
    <>
      <span style={{ display: 'flex' }}>
        <aside>
            <SavedBrackets />
        </aside>
        <ThinkComponent />
      </span>
    </>
  )
}

{/* <Link to='/onesavedbracket/:_id'>
<SavedBrackets />
</Link> */}

