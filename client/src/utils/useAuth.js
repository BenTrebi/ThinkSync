import { useEffect, useState } from "react"
import Cookies from "js-cookie"


export default function useAuth(){

  const [currUser, setCurrUser] = useState(false);

  async function verifyUser(){
    setCurrUser({ status: "searching", data: null })
    if( Cookies.get("auth-cookie") ){
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

  return {
    verifyUser,
    currUser
  }

}