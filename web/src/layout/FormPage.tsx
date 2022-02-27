import React from 'react'
import { Container, Grid, Typography } from '@mui/material'
import { WithChildren } from '../types'
import NavButton from '../components/NavButton'

export type FormPageProps = WithChildren<{
  title: string
  parentPage?: string
}>

const FormPage = ({ title, parentPage, children }: FormPageProps) => {
  return (
    <Container>
      <Typography variant='h1' color='primary' sx={{ margin: '1rem 0 1rem' }}>
        {title}
      </Typography>
      <Grid container>
        <Grid sm={2} item />
        <Grid sm={8} xs={12} item>
          <Container
            sx={{
              display: 'flex',
              alignItem: 'center',
              WebkitAlignItems: 'center',
              flexDirection: 'column',
            }}
          >
            {children}
          </Container>
        </Grid>
      </Grid>
      {parentPage && (
        <NavButton to={parentPage}>Back to Previous Page</NavButton>
      )}
    </Container>
  )
}

export default FormPage
