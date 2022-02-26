import React from 'react'
import { Container, Typography } from '@mui/material'

const NotFound = () => {
  return (
    <Container sx={{ m: '2rem' }}>
      <Typography color='error' variant='h1'>
        Not Found
      </Typography>
      <Typography color='black' variant='h2'>
        There is nothing here
      </Typography>
    </Container>
  )
}

export default NotFound
