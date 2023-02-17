import React from 'react'
import { Route, Routes } from 'react-router-dom'
import home from '../pages/home'
import shop from '../pages/shop'
import cart from '../pages/cart'
// import ProductDetails from '../pages/ProductDetails'
// import checkout from '../pages/checkout'
// import login from '../pages/login'
// import signup from '../pages/signup'
const routers = () => {
  return <Routes>
    <Route path='home' element={<home />} />
    <Route path='shop' element={<shop />} />
    <Route path='cart' element={<cart />} />
    <Route path='productiondetails' element={<pro />} />
    <Route path='cart' element={<cart />} />
    <Route path='cart' element={<cart />} />
    <Route path='cart' element={<cart />} />

    {/* <Route path='shop' element={<shop/>} />
    <Route path='shop' element={<shop/>} /> 
    <Route path='cart' element={<cart/>} /> 
    <Route path='home' element={<Home/>} /> 
    <Route path='home' element={<Home/>} /> 
    <Route path='home' element={<Home/>} /> 
    <Route path='home' element={<Home/>} />  */}
  </Routes>
}

export default routers