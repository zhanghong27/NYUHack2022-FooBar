import React from 'react'
import Home from './Home'
import Prescriptions from './Prescriptions'
import { Navigate, Route, Routes } from 'react-router'
import ListAppointments from './Appointment/New/List'
import NewAppointmentConfirm from './Appointment/New/Confirm'
import AppointmentVideoChat from './Appointment/VideoChat'
import NotFound from './NotFound'

const PageRoutes = () => {
  return (
    <Routes>
      <Route path='/home' element={<Home />} />
      <Route path='/prescriptions' element={<Prescriptions />} />
      <Route path='/appointment'>
        <Route path='new'>
          <Route path='list' element={<ListAppointments />} />
          <Route path='confirm' element={<NewAppointmentConfirm />} />
        </Route>
        <Route path='video' element={<AppointmentVideoChat />} />
      </Route>
      <Route path='/' element={<Navigate to='/home' />} />
      <Route path='*' element={<NotFound />}></Route>
    </Routes>
  )
}

export default PageRoutes
