import { useState } from 'react'
import { Routes, Route, BrowserRouter, useParams } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import LoginSignup from './pages/LoginSignup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>ThinkSync</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/loginsignup' element={<LoginSignup />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
