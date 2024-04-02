import { useState } from 'react'
import './App.css'
import { Provider } from 'react-redux'
import { configStore } from './store/Store'
import Addtodo from './components/Addtodo'
import Todos from './components/Todos'

function App() {

  return (
    <Provider store={configStore}>
      <Addtodo/>
      <Todos/>
    </Provider>
  )
}

export default App
