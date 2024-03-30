import React, { useContext } from 'react'
import { Global } from './Usercontext'

const {user}=useContext(Global)
function Profile() {
  if (!user) return <div>Please login</div>
  return <div>Welcom {user.username}</div>
}

export default Profile