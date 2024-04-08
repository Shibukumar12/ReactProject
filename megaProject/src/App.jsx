import { useEffect, useState } from 'react'
import './App.css'
import Conf from './conf/Conf';
import { useDispatch } from 'react-redux'
import { authservice } from './appwrite/Auth';
import { login, logout } from './store/featureSlicing'
import { Footer, Header } from './components/index'

function App() {
  const [loading, setloading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authservice.Getcurrentuser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }))
        }
        else {
          dispatch(logout())
        }
      })
      .finally(() => {
        setloading(false)
      })
  }, [])

  return !loading ? (
    <div className='min-h-screen flex justify-center flex-wrap bg-gray-400 '>
      <div className='text-green-800 text-3xl '>
        <Header />
        <Footer />
      </div>
    </div>
  ) : null
}


export default App
