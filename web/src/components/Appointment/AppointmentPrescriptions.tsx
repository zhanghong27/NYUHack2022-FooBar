import { Card, CardContent, Divider, Skeleton, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { appointment } from '../../api/schemas'

const AppointmentPrescriptions = ({
  appointment,
}: {
  appointment?: appointment
}) => {
  return (
    <Card variant='outlined'>
      <CardContent>
        {appointment ? (
          appointment.prescriptions.map((prescription, index) => (
            <Box key={index} sx={{ m: '1rem' }}>
              <Typography>{prescription.name}</Typography>
              <Typography color='secondary' variant='caption'>
                {prescription.instruction}
              </Typography>
              {index < appointment.prescriptions.length - 1 && <Divider />}
            </Box>
          ))
        ) : (
          <Skeleton variant='rectangular' />
        )}
      </CardContent>
    </Card>
  )
}

export default AppointmentPrescriptions
