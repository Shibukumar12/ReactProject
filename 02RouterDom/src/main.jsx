import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Github from './Components/Github/Github.jsx'
import User from './Components/User/User.jsx'

const router=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Home/>
     },
     {
      path:"about/",
      element:<About/>
    },
     {
      path:"contact/",
      element:<Contact/>
    },
     {
      path:"github/",
      element:<Github/>
    },
     {
      path:"user/:userid",
      element:<User/>
    },
    ]
  }
])

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <route path="/" element={<App />} >
//       <route path="" element={<Home />} />
//       <route path="about" element={<About />} />
//     </route>
//   )
// )


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
