import React from 'react'
import { Container, Divider, Typography } from '@mui/material'
import PrescriptionList from '../components/Prescriptions/PrescriptionsCardList'
import NavButton from '../components/NavButton'

const Prescriptions = () => {
  return (
    <Container>
      <Typography color="primary" variant="h1" sx={{ margin: '1rem 0 1rem' }}>
        Prescriptions
      </Typography>
      <Container
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          '& > :not(style)': {
            m: 1,
            width: 150,
          },
        }}
      >
        <PrescriptionList />
      </Container>
      <Divider sx={{ margin: '1rem 0 1rem' }} />
      <NavButton to="/home">Return to Home</NavButton>
    </Container>
  )
}

export default Prescriptions
