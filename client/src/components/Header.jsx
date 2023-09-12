import React, { useEffect } from 'react'
import Navbar from './Navbar'
import { useUserContext } from '../utils/UserContext'

export default function Header() {
  const { currUser } = useUserContext() 
  console.log(currUser)

  useEffect(() => {
    console.log(currUser)
  }, [currUser])

  return (
    <>
      <Navbar />
    </>
  )
}