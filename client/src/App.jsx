import { useState } from 'react'
import { Routes, Route, BrowserRouter, useParams } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import LoginSignup from './pages/LoginSignup'
import Sync from './pages/Sync'
import Think from './pages/Think'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/loginsignup' element={<LoginSignup />} />
          <Route path='/sync' element={<Sync/>} />
          <Route path='/think' element={<Think />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
