import React from 'react'
import Login from '../components/Login'
import SignUp from '../components/SignUp'

export default function LoginSignup() {
  return (
    <>
    <div style={{display:'flex' }}>
      <SignUp />
      <Login />
    </div> 
    </>
  )
}