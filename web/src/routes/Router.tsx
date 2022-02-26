import React from 'react'
import Home from './Home'
import Prescriptions from './Prescriptions'
import { Navigate, Route, Routes } from 'react-router'

const PageRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/prescriptions" element={<Prescriptions />} />
      <Route path="/" element={<Navigate to="/home" />} />
    </Routes>
  )
}

export default PageRoutes
