import { useState } from 'react'
import './App.css'
import UsercontextProvider from './Context/UsercontextProvider'
import Login from './Components/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UsercontextProvider>
         <Login/>
    </UsercontextProvider>
  )
}

export default App
