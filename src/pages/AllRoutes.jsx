import React from 'react'
import { Routes,Route } from 'react-router-dom'
import { HairServices } from '../Components/HairServices'
import Home from '../Components/Home'

export const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hairservices" element={<HairServices/>}/>
    </Routes>
  )
}
