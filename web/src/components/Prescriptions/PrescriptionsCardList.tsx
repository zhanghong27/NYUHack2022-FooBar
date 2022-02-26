import React from 'react'
import { Card, CardContent, Typography } from '@mui/material'
import { useQuery } from 'react-query'
import { getPrescriptions } from '../../api/prescriptions'

const PrescriptionList = () => {
  const { data, isLoading } = useQuery('prescriptions', getPrescriptions)

  if (isLoading || data === undefined) return <>loading</>

  return (
    <>
      {data.map((prescription) => (
        <Card
          key={prescription.name}
          sx={{
            width: '20vw',
          }}
        >
          <CardContent>
            <Typography variant="h4" color="primary">
              {prescription.name}
            </Typography>
            <Typography variant="body1" color="secondary">
              {prescription.instruction}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </>
  )
}

export default PrescriptionList
