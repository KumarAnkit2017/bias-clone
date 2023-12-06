import React from 'react'
import { Routes,Route,Navigate } from 'react-router-dom'
import Home from '../pages/users/Home'
import Contacts from '../pages/users/Contacts'
import Login from '../pages/users/Login'
import Register from '../pages/users/Register'
import AllProducts from '../pages/users/AllProducts'


const Routers = () => {
  return <Routes>
    <Route path="/" element={<Navigate to="/home" />}/>
    <Route path="/home" element={<Home/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/all-prod" element={<AllProducts/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/contact" element={<Contacts/>}/>
  </Routes>
}

export default Routers
