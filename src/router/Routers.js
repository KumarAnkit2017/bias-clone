import React from 'react'
import { Routes,Route,Navigate } from 'react-router-dom'
import Home from '../pages/users/Home'
import Contacts from '../pages/users/Contacts'
import Login from '../pages/users/Login'
import Register from '../pages/users/Register'
import AllProducts from '../pages/users/AllProducts'
import InvoiceMatch from '../pages/users/InvoiceMatch'



const Routers = () => {
  return <Routes>
    <Route path="/" element={<Navigate to="/home" />}/>
    <Route path="/home/*" element={<Home/>}>
        <Route path="invoice-match" element={<InvoiceMatch />} />
    </Route>
    <Route path="/register" element={<Register/>}/>
    <Route path="/all-prod" element={<AllProducts/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/contact" element={<Contacts/>}/>
    <Route path="/invoice-match" element={<InvoiceMatch/>}/>
  </Routes>
}

export default Routers
