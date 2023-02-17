import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Shop from '../pages/Shop'
import Cart from '../pages/Cart'
import Checkout from '../pages/Checkout'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Home from '../pages/Home'
import ProductDetails from '../pages/ProductionDetails'

const routers = () => {
  return <Routes>
    <Route path="/" element={<Navigate to='/home' />} />
    <Route path='home' element={<Home />} />
    <Route path='shop' element={<Shop />} />
    <Route path='cart' element={<Cart />} />
    <Route path='shop/:id' element={<ProductDetails />} />
    <Route path='checkout' element={<Checkout />} />
    <Route path='login' element={<Login />} />
    <Route path='signup' element={<Signup />} />
  </Routes>
}

export default routers