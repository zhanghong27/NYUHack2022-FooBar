/**
 * Confirm the creation of the appointment.
 * Show information of the date, doctor, and etc.
 */
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Fade,
  Typography,
} from '@mui/material'
import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import FormPage from '../../../layout/FormPage'
import { Container } from '@mui/material'
import { useNavigate } from 'react-router'
import { addAppointment } from '../../../api/appointment'
import { useQuery } from 'react-query'
import { getDoctor } from '../../../api/doctor'

const ConfirmSelectAppointment = () => {
  const [confirmed, setConfirmed] = useState(false)
  const [searchParams] = useSearchParams()
  const [doctorName, symptoms, doctorType, time] = [
    searchParams.get('doctorName'),
    searchParams.get('symptoms'),
    searchParams.get('doctorType'),
    searchParams.get('time'),
  ]
  const navigate = useNavigate()
  if (!doctorName) {
    navigate('/home')
    return <></>
  }
  const doctor = useQuery(['getDoctor', doctorName], () =>
    getDoctor({ name: doctorName })
  )

  useEffect(() => {
    if (!confirmed) return
    if (doctor.data) addAppointment({ doctor: doctor.data })
    const timeout = setTimeout(() => {
      navigate('/home')
    }, 1500)
    return () => {
      clearTimeout(timeout)
    }
  }, [confirmed])

  return (
    <FormPage title={`Appointment with ${doctorName}`}>
      <Fade in={!confirmed}>
        <Card sx={{ maxWidth: 450, minWidth: 250 }}>
          <CardContent>
            <Typography variant='body1'>Symptoms</Typography>
            <Typography variant='h2' color='primary'>
              {!symptoms ? 'N/A' : symptoms}
            </Typography>
            <Typography variant='body1'>Expertise</Typography>
            <Typography variant='h2' color='primary'>
              {!doctorType ? 'N/A' : doctorType}
            </Typography>
            <Typography variant='body1'>Time</Typography>
            <Typography variant='h2' color='primary'>
              {!time ? 'N/A' : time}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              color='primary'
              variant='contained'
              onClick={() => setConfirmed(true)}
            >
              Confirm
            </Button>
          </CardActions>
        </Card>
      </Fade>
      <Fade in={confirmed}>
        <Container sx={{ textAlign: 'center' }}>
          <CheckCircleIcon color='primary' sx={{ fontSize: 200 }} />
        </Container>
      </Fade>
    </FormPage>
  )
}

export default ConfirmSelectAppointment
