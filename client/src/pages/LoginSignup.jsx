import React from 'react'
import Login from '../components/Login'
import SignUp from '../components/SignUp'

export default function LoginSignup() {
  return (
    <>
    <span style={{display:'flex' }}>
      <SignUp />
      <Login />
    </span> 
    </>
  )
}