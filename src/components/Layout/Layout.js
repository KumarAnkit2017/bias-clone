import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Routers from '../../router/Routers'
import { useLocation } from 'react-router-dom'


const Layout = () => {
  const useLoc=useLocation();
  const paths=useLoc.pathname;

  return (
    <div>
      <Header/>
      <div>
       <Routers></Routers>
      </div>
      {
        (paths==="/login") || (paths==="/home") ? "":<Footer/>
      }
    </div>
  )
}

export default Layout
