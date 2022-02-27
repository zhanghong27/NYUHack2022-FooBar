import React from 'react'
import Home from './Home'
import { Navigate, Route, Routes } from 'react-router'
import Login from '../Auth/Login'
import Signup from '../Auth/Signup'
import AppointmentsList from './Appointment/New/List'
import PastAppointmentsList from './Appointment'
import NewAppointmentConfirm from './Appointment/New/Confirm'
import AppointmentVideoChat from './Appointment/VideoChat'
import UpcomingAppointments from './Appointment/Upcoming'
import AppointmentDetails from './Appointment/Details'
import PrescriptionsList from './Prescriptions/List'
import PrescriptionsDetails from './Prescriptions/Details'
import NotFound from './NotFound'
import Questionnaire from './Appointment/New/Questionaire'

const PageRoutes = () => {
  return (
    <Routes>
      <Route path='/home' element={<Home />} />
      <Route path='/prescriptions'>
        <Route path='list' element={<PrescriptionsList />} />
        <Route path='details/:id' element={<PrescriptionsDetails />} />
      </Route>
      <Route path='/appointment'>
        <Route path='new'>
          <Route path='list' element={<AppointmentsList />} />
          <Route path='confirm' element={<NewAppointmentConfirm />} />
          <Route path='' element={<Questionnaire />} />
        </Route>
        <Route path='upcoming' element={<UpcomingAppointments />} />
        <Route path='details/:id' element={<AppointmentDetails />} />
        <Route path='video/:id' element={<AppointmentVideoChat />} />
        <Route
          path='video-doc/:id'
          element={<AppointmentVideoChat isDoctor />}
        />
        <Route path='' element={<PastAppointmentsList />} />
      </Route>
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/' element={<Navigate to='/home' />} />
      <Route path='*' element={<NotFound />}></Route>
    </Routes>
  )
}

export default PageRoutes
