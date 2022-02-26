import React from 'react'
import Home from './Home'
import { Navigate, Route, Routes } from 'react-router'

const PageRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<Navigate to="/home" />} />
    </Routes>
  )
}

export default PageRoutes
