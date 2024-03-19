import { useState } from 'react'
import './App.css'
import Home from './Components/Home/Home'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home/>
    </>
  )
}

export default App
