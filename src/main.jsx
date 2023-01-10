import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Layout from './Components/Layout'
import Home from './pages/Home'


import './index.css'
const router = createBrowserRouter([
     {
      path:'/',
      element:<Layout/>,
      children:[
        {
          index:true,
          element:<Home/>
        }
      ]
     }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
