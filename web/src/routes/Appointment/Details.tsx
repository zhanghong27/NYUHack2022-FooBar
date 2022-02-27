import { Button, Card, CardContent, Skeleton, Typography } from '@mui/material'
import React from 'react'
import { useQuery } from 'react-query'
import { useNavigate, useParams } from 'react-router'
import { getAppointment } from '../../api/appointment'
import AppointmentPrescriptions from '../../components/Appointment/AppointmentPrescriptions'
import FormPage from '../../layout/FormPage'

const AppointmentDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  if (id === undefined) {
    navigate('/home')
    return <></>
  }
  const handleStart = () => {
    navigate(`../video/${id}`)
  }

  const appointment = useQuery(['appointment', id], () =>
    getAppointment({ id: parseInt(id) })
  )

  return (
    <FormPage
      title={`Appointment with ${appointment.data?.doctor.name ?? 'Loading'}`}
      parentPage='/appointment/upcoming'
    >
      {appointment.data === undefined ? (
        <Skeleton />
      ) : (
        <Card variant='outlined'>
          <CardContent
            sx={{
              '& > :not(style)': {
                m: 1,
              },
            }}
          >
            <Typography color='priamry'>
              Status: {appointment.data.isEnded ? 'Ended' : 'Upcoming'}
            </Typography>
            <Typography color='primary'>{appointment.data.time}</Typography>
            {appointment.data.prescriptions.length > 0 && (
              <>
                <Typography color='primary' sx={{ m: 2 }}>
                  Prescriptions
                </Typography>
                <AppointmentPrescriptions appointment={appointment.data} />
              </>
            )}
            {!appointment.data.isEnded && (
              <Button variant='contained' onClick={handleStart}>
                Start
              </Button>
            )}
          </CardContent>
        </Card>
      )}
    </FormPage>
  )
}

export default AppointmentDetails
