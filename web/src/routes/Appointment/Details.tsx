import { Card, CardContent, Skeleton, Typography } from '@mui/material'
import React from 'react'
import { useQuery } from 'react-query'
import { useNavigate, useParams } from 'react-router'
import { getAppointment } from '../../api/appointment'
import FormPage from '../../layout/FormPage'

const AppointmentDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  if (id === undefined) {
    navigate('/home')
    return <></>
  }

  const appointment = useQuery(['appointment', id], () => getAppointment({id: parseInt(id)}))
    
  return <FormPage title={`Appointment with ${appointment.data?.doctor.name ?? 'Loading'}`}>
     {appointment.data === undefined ? <Skeleton /> :
     <Card variant='outlined'>
         <CardContent>
             <Typography>
                 {appointment.data.isEnded ? 'Ended' : 'Upcoming'}
             </Typography>
         </CardContent>
     </Card>
     } 
  </FormPage>
}

export default AppointmentDetails
