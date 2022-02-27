import React from 'react'
import BookIcon from '@mui/icons-material/Book'
import MedicationIcon from '@mui/icons-material/Medication'
import EventNoteIcon from '@mui/icons-material/EventNote'
import { Grid, Typography } from '@mui/material'
// https://pixabay.com/photos/doctor-gray-hair-experience-2337835/
import doctor from '../static/doctor.jpg'
// https://pixabay.com/photos/pills-drugs-medicines-tablets-dose-6826554/
import pills from '../static/pills.jpg'
// https://pixabay.com/photos/doctor-nurse-prescription-health-5591782/
import appointments from '../static/doctor2.jpg'
import ImgCard from '../components/ImgCard'
import TitlePage from '../layout/TitlePage'

const Home = () => {
  const fontSize = {
    sm: '0.6rem',
    md: '0.8rem',
  }

  return (
    <TitlePage
      title='Anywhere, Any Healthcare'
      subTitle='Your First Appointment Starts Here'
    >
      <Grid container spacing={4}>
        <Grid item sm={1}></Grid>
        <Grid item sm={3} xs={12}>
          <ImgCard img={doctor} to='/appointment/new'>
            <BookIcon color='primary' sx={{ m: 1 }} />
            <Typography variant='button' fontSize={fontSize}>
              Make an Appointment
            </Typography>
          </ImgCard>
        </Grid>
        <Grid item sm={3} xs={12}>
          <ImgCard img={pills} to='/prescriptions/list'>
            <MedicationIcon color='primary' sx={{ m: 1 }} />
            <Typography variant='button' fontSize={fontSize}>
              Prescriptions
            </Typography>
          </ImgCard>
        </Grid>
        <Grid item sm={3} xs={12}>
          <ImgCard img={appointments} to='/appointment/upcoming'>
            <EventNoteIcon color='primary' sx={{ m: 1 }} />
            <Typography variant='button' fontSize={fontSize}>
              Appointments
            </Typography>
          </ImgCard>
        </Grid>
        <Grid item sm={2}></Grid>
      </Grid>
    </TitlePage>
  )
}

export default Home
