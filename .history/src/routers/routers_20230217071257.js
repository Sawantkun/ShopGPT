import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import home from '../pages/home'
import shop from '../pages/shop'
import cart from '../pages/cart'
import productdetails from '../pages/productiondetails'
import checkout from '../pages/checkout'
import login from '../pages/login'
import signup from '../pages/signup'

const routers = () => {
  return <Routes>
    <Route path="/" element={<Navigate to='/home' />} />    <Route path='home' element={<home />} />
    <Route path='shop' element={<shop />} />
    <Route path='cart' element={<cart />} />
    <Route path='productiondetails' element={<productdetails />} />
    <Route path='checkout' element={<checkout />} />
    <Route path='login' element={<login />} />
    <Route path='signup' element={<signup />} />
  </Routes>
}

export default routers