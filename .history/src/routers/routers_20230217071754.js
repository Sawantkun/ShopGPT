import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Shop from '../pages/Shop'
import Cart from '../pages/Cart'
import ProductionDetails from '../pages/ProductionDetails'
import Checkout from '../pages/Checkout'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Home from '../pages/Home'

const routers = () => {
  return <Routes>
    <Route path="/" element={<Navigate to='/home' />} />
    <Route path='home' element={<Home />} />
    <Route path='shop' element={<Shop />} />
    <Route path='cart' element={<Cart />} />
    <Route path='shop/:' element={<productdetails />} />
    <Route path='checkout' element={<checkout />} />
    <Route path='login' element={<login />} />
    <Route path='signup' element={<signup />} />
  </Routes>
}

export default routers