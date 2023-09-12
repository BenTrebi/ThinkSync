import React, { useEffect } from 'react'
import Navbar from './Navbar'
import useAuth from '../utils/useAuth'

export default function Header() {
  const { currUser, verifyUser } = useAuth()

  useEffect(() => {
    console.log(currUser)
  }, [currUser])

  useEffect(() => {
    verifyUser()
  }, [])

  return (
    <>
      <Navbar />
    </>
  )
}