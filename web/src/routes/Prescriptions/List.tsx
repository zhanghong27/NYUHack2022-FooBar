import React from 'react'
import { Container, Divider } from '@mui/material'
import PrescriptionList from '../../components/Prescriptions/PrescriptionsCardList'
import TitlePage from '../../layout/TitlePage'

const PrescriptionsList = () => {
  return (
    <TitlePage title='Prescriptions' parentPage='/home'>
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
    </TitlePage>
  )
}

export default PrescriptionsList
