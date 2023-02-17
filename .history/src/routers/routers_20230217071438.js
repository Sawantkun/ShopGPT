import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import home from '../pages/Home'
import shop from '../pages/shop'
import cart from '../pages/Cart'
import productdetails from '../pages/ProductionDetails'
import checkout from '../pages/Checkout'
import login from '../pages/Login'
import signup from '../pages/signup'

const routers = () => {
  return <Routes>
    <Route path="/" element={<Navigate to='/home' />} />
    <Route path='home' element={<home />} />
    <Route path='shop' element={<shop />} />
    <Route path='cart' element={<cart />} />
    <Route path='productiondetails' element={<productdetails />} />
    <Route path='checkout' element={<checkout />} />
    <Route path='login' element={<login />} />
    <Route path='signup' element={<signup />} />
  </Routes>
}

export default routers