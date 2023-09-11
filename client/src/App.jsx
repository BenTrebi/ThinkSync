import { useState } from 'react'
import { Routes, Route, BrowserRouter, useParams } from 'react-router-dom'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import './App.css'
import Home from './pages/Home'
import LoginSignup from './pages/LoginSignup'
import Logout from './pages/Logout'
import Sync from './pages/Sync'
import Think from './pages/Think'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/loginsignup' element={<LoginSignup />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/sync' element={<Sync/>} />
          <Route path='/think' element={<Think />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
