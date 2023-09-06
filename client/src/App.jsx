import { useState } from 'react'
import { Routes, Route, BrowserRouter, useParams } from 'react-router-dom'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>ThinkSync</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={} />
          <Route path='/about' element={} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
