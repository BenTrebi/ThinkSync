import React from 'react'
import ThinkComponent from '../components/ThinkComponent'
import SavedBrackets from '../components/SavedBrackets'



export default function Think() {
  return (
    <>
      <aside>
      <SavedBrackets />
      </aside>
      <main>
      <ThinkComponent />
      </main>
    </>
  )
}