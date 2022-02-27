import React from 'react'
import { doctor } from '../../api/schemas'
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
  useTheme,
} from '@mui/material'

export type DoctorCardProps = {
  doctor: doctor
  onClick?: (doctor: doctor) => void
}

const DoctorCard = ({ doctor, onClick }: DoctorCardProps) => {
  const theme = useTheme()

  return (
    <Card variant='outlined' square>
      <CardHeader
        title={doctor.name}
        avatar={
          <Avatar
            sx={{ bgcolor: theme.palette.primary.light }}
            aria-label='recipe'
          >
            {doctor.name[0]}
          </Avatar>
        }
      />
      <CardContent>
        <Typography variant='body1'>
          First available appointment at{' '}
          <Typography color='primary'>2022/02/26 4:23</Typography>
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => onClick && onClick(doctor)}>Appointment</Button>
      </CardActions>
    </Card>
  )
}

export default DoctorCard
