import React from 'react'
import Home from './Home'
import Prescriptions from './Prescriptions'
import { Navigate, Route, Routes } from 'react-router'
import ListAppointments from './Appointment/New/List'

const PageRoutes = () => {
  return (
    <Routes>
      <Route path='/home' element={<Home />} />
      <Route path='/prescriptions' element={<Prescriptions />} />
      <Route path='/appointment/new/list' element={<ListAppointments />} />
      <Route path='/' element={<Navigate to='/home' />} />
    </Routes>
  )
}

export default PageRoutes
