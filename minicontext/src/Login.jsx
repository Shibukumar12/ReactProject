import React, { useContext,useState } from 'react'
import { Global } from './Usercontext'

function Login() {
    const {colour}= useContext(Global)
    const [username,setUsername]=useState()
    const [password,setPassword]=useState()
    return (
        <>
        <h1 style={{color:colour}}>Login Page</h1>
        <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} placeholder='Enter the Username'/>{ "   "}
        <input type="password"  value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter the password' />
        <button>Submit</button>
        </>
  )
}

export default Login