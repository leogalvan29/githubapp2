import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import Encabezado from './Encabezado'

const Layout = () => {

    const id = 5
  return (
    <div>

     


        <Outlet/> 

        
      
    </div>
  )
}

export default Layout
