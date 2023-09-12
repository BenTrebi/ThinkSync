import { useEffect, useState } from 'react'
import { Routes, Route, BrowserRouter, useParams } from 'react-router-dom'
import Cookies from "js-cookie"
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import './App.css'        
import { UserProvider } from "./utils/UserContext";                  
import Home from './pages/Home'
import LoginSignup from './pages/LoginSignup'
import Logout from './pages/Logout'
import Sync from './pages/Sync'
import Think from './pages/Think'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  const [currUser, setCurrUser] = useState(false);

  async function verifyUser(){
    const verifyUser = async() => {
      setCurrUser({ status: "searching", data: null })
      if( Cookies.get("auth-cookie") ){
        console.log("verify")
        try {
          const query = await fetch("/api/auth/verify", {
            method: "post",
            body: JSON.stringify({}),
            headers: {
              "Content-Type": "application/json"
            }
          })
          const result = await query.json()
          console.log(result)
          if( result && result.status === "success" ){
            setCurrUser({ status: "found", data: result.payload })
          } else {
            setCurrUser({ status: "notfound" })
          }
        } catch(err){
          setCurrUser({ status: "notfound", data: null })
          if( !window.location.href.includes("/login") && !window.location.href.includes("/signup") ){
            window.location.href = "/login"
          }
        }
      } else {
        setCurrUser({ status: "notfound" })
      }
    }
  }

  useEffect(() => {
    verifyUser()
  }, [])

  return (
    <UserProvider>
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
    </UserProvider>
  )
}

export default App
