import React, { useState } from 'react'
import { useEffect } from 'react'

function Github() {

    const [data,usedata]=useState([])
    useEffect(()=>{fetch("https://api.github.com/users/shibukumar12")
    .then(Response=>Response.json())
    .then(data=>{
        console.log(data)
        usedata(data)}
    )}
      ,[ ])

  return (
    <>
   <h1 className='text-center bg-orange-400 text-white text-3xl p-4'>Followers:{data.followers}
   <img src={data.avatar_url} alt="" />
   </h1>
   
    </>
  )
}

export default Github