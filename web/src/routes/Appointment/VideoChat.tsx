import { Button, Grid, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useQuery } from 'react-query'
import { useNavigate, useParams } from 'react-router'
import { endAppointment, getAppointment } from '../../api/appointment'
import AppointmentPrescriptions from '../../components/Appointment/AppointmentPrescriptions'
import VideoWindow from '../../components/Twilio/VideoWindow'
import useRoom from '../../hooks/useRoom'
import useTracks from '../../hooks/useTracks'
import TitlePage from '../../layout/TitlePage'
import MedicationIcon from '@mui/icons-material/Medication'
import { Box } from '@mui/system'

const VideoChat = ({ isDoctor = false }: { isDoctor?: boolean }) => {
  const { id } = useParams()
  const navigate = useNavigate()
  if (id === undefined) {
    navigate('/home')
    return <></>
  }
  const { connect, room, disconnect } = useRoom({
    roomName: `room${id}`,
    isDoctor: isDoctor,
  })
  const [videoTrack] = useTracks({ room: room })
  const [doctorVideoTrack] = useTracks({
    room: room,
    isLocal: false,
  })
  const appointment = useQuery(['appointment', id], () =>
    getAppointment({ id: parseInt(id) })
  )

  useEffect(() => {
    connect()
  }, [isDoctor])

  return (
    <TitlePage
      title={`Appointment with ${appointment.data?.doctor.name ?? 'loading'}`}
    >
      <Grid container>
        <Grid sm={1} />
        <Grid sm={6} item>
          <VideoWindow track={doctorVideoTrack} />
          <Box>
            <Button
              variant='outlined'
              onClick={() => {
                disconnect()
                endAppointment({ id: parseInt(id) })
                setTimeout(() => {
                  navigate(`/appointment/details/${id}`)
                }, 500)
              }}
            >
              End
            </Button>
          </Box>
        </Grid>
        <Grid sm={0.5} />
        <Grid sm={2.5} item>
          <VideoWindow track={videoTrack} />
          <MedicationIcon color='primary' />
          <Typography color='primary' variant='h2'>
            Prescriptions
          </Typography>
          <AppointmentPrescriptions appointment={appointment.data} />
        </Grid>
        <Grid sm={1} />
      </Grid>
    </TitlePage>
  )
}

export default VideoChat
