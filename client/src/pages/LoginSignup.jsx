import React from 'react'
import Login from '../components/Login'
import SignUp from '../components/Signup'

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