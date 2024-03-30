import { createContext, useState } from 'react'
import './App.css'
import { Global } from './Usercontext'
import Login from './Login'
// import Profile from './Profile'


function App() {
  const [user,setuser]=useState()
  const [colour, setcolor] = useState("green")
  return (
    <Global.Provider value={{colour}}>
      <Login/>
      {/* <Profile/> */}
    </Global.Provider>
  )
}

export default App
