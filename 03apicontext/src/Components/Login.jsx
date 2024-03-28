import React, { useContext, useState } from 'react'
import Usercontext from '../Context/Usercontext';

function Login() {
    const [username,setusername]=useState(null)
    const [userpassword,setuserpassword]=useState(null)

    const {user}=useContext(Usercontext);

    const HandleSubmit=(e)=>{
        e.preventDefault()
        user({username,userpassword})
    }

  return (
    <>
    <h1>Login Page</h1>

    <input type="text" value={username} 
      onChange={(e)=>setusername(e.target.value)} placeholder='Enter the Name'/>
    <input type="password" value={userpassword}
       onChange={(e)=>setuserpassword(e.target.value)} placeholder='Enter the Password'/>

    <button onClick={HandleSubmit}>Submit here</button>
    </>
  )
}

export default Login