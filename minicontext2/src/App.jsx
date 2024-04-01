import { useState } from 'react'
import './App.css'
import Page from './components/Page'
import { GlobalProvider } from './context/Globalcontext'

function App() {
  const [username, setusername] = useState("shibu kumar")
  const [UID, setUID] = useState(213234)
  return (
    <GlobalProvider value={{username,UID}}>
       <Page/>
    </GlobalProvider>
  )
}

export default App
