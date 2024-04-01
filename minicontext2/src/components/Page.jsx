import React, { useContext } from 'react'
import { Globalcontext } from '../context/Globalcontext'

function Page() {
    const {username,UID}=useContext(Globalcontext)
  return (
    <h1 style={{color:'greenyellow'}} >The username is {username} and College UID is {UID}</h1>
  )
}

export default Page