import React from 'react'
import SyncComponent from '../components/SyncComponent'

export default function Sync() {

  const objFromThinkComponent = {
      title: "Best idea for a web application?",
      ideas: [
        "Coding Quiz",
        "Something about libraries",
        "etsy clone",
        "travel app for local music",
        "foreign language immersion",
        "service department car dealership software",
        "learning platform to create flashcards",
        "Sunflower growth tracker. Enter details like planting date, height, number of blooms, etc. Then take data to make visualizations or recommendations. Could be about more than just sunflowers.",
        "Dating app for coders",
        "fungi identifier",
        "code snippet library"
      ]
  }

  return (
    <>
      <SyncComponent brackets={objFromThinkComponent}/>
    </>
  )
}