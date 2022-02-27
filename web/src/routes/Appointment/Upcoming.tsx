import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Skeleton,
  Typography,
} from '@mui/material'
import React from 'react'
import { useQuery } from 'react-query'
import { useNavigate } from 'react-router'
import { upcomingAppointments } from '../../api/appointment'
import GrowBox from '../../components/GrowBox'
import TitlePage from '../../layout/TitlePage'

const UpcomingAppointments = () => {
  const appointments = useQuery('appointments-upcoming', upcomingAppointments)
  const navigate = useNavigate()

  const handleDetails = (id: string) => {
    navigate(`../details/${id}`)
  }

  return (
    <TitlePage title='Appointments' parentPage='/home'>
      <Box
        sx={{
          '& > :not(style)': {
            m: 2,
            width: '60vw',
          },
        }}
      >
        {appointments.data ? (
          appointments.data.map((appointment, index) => (
            <GrowBox
              key={appointment.id}
              duration={index * 300}
              maxDuration={2500}
            >
              <Card variant='outlined'>
                <CardContent>
                  <Typography color='primary'>
                    Appointment with {appointment.doctor.name} (
                    {appointment.isEnded ? 'Ended' : 'Upcoming'})
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    onClick={() => handleDetails(appointment.id.toString())}
                    variant='contained'
                  >
                    Details
                  </Button>
                </CardActions>
              </Card>
            </GrowBox>
          ))
        ) : (
          <Skeleton />
        )}
      </Box>
    </TitlePage>
  )
}

export default UpcomingAppointments
