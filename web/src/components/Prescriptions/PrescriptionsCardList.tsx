import React from 'react'
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
  useTheme,
} from '@mui/material'
import { useQuery } from 'react-query'
import { getPrescriptions } from '../../api/prescriptions'

const PrescriptionList = () => {
  const theme = useTheme()
  const { data, isLoading } = useQuery('prescriptions', getPrescriptions)

  if (isLoading || data === undefined) return <>loading</>

  return (
    <>
      {data.map((prescription) => (
        <Card key={prescription.name} variant='outlined' square>
          <CardContent>
            <Typography variant='h4' color={theme.palette.primary.dark}>
              {prescription.name}
            </Typography>
            <Typography variant='body1' color={theme.palette.secondary.main}>
              {prescription.instruction}
            </Typography>
          </CardContent>
          <CardActions>
            <Button>
              <Typography variant='button'>Find Shop</Typography>
            </Button>
          </CardActions>
        </Card>
      ))}
    </>
  )
}

export default PrescriptionList
