import React from 'react'
import SyncComponent from '../components/SyncComponent'

export default function Sync() {
  return (
    <>
      <SyncComponent ideas={
        {
          title: "How should we do this particular thing?",
          brackets: [
            "This is the first idea",
            "This is the second idea",
            "This is the third idea",
            "This is the fourth idea",
            "This is the fifth idea",
            "This is the sixth idea",
            "This is the seventh idea",
          ]
        }
      }/>
    </>
  )
}