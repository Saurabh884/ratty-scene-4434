import React from 'react'
import { Routes,Route } from 'react-router-dom'
import { Cart } from '../Components/Cart'
import { Checkout } from '../Components/Checkout'
import { HairServices } from '../Components/HairServices'
import Home from '../Components/Home'

export const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hairservices" element={<HairServices/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
    </Routes>
  )
}
