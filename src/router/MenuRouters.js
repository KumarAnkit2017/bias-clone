import React from 'react'
import { Routes,Route } from 'react-router-dom'
import InvoiceMatch from '../pages/users/InvoiceMatch'


const MenuRouters = () => {
  return <Routes>
    <Route path="/invoice-match" element={<InvoiceMatch/>}/>
  </Routes>
}

export default MenuRouters
