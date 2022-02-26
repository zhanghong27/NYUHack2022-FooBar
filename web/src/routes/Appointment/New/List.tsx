/**
 * Show a list of available doctors open to appointments.
 */
import React from 'react'
import { Container, Typography } from '@mui/material'
import { useQuery } from 'react-query'
import { getDoctors } from '../../../api/doctor'
import DoctorCardList from '../../../components/Appointment/DoctorCardList'

const ListAppointments = () => {
  const { data, isLoading } = useQuery('doctors', getDoctors)

  return (
    <Container>
      <Typography color="primary" variant="h1" sx={{ margin: '1rem 0 1rem' }}>
        Doctors
      </Typography>
      {isLoading || data === undefined ? (
        'loading'
      ) : (
        <DoctorCardList doctors={data} />
      )}
    </Container>
  )
}

export default ListAppointments
