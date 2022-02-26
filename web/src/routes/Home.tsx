import React from 'react'
import BookIcon from '@mui/icons-material/Book'
import MedicationIcon from '@mui/icons-material/Medication'
import EventNoteIcon from '@mui/icons-material/EventNote'
import { Container, Grid, Typography } from '@mui/material'
import ShadowBox from '../components/ShadowBox'
// https://pixabay.com/photos/doctor-gray-hair-experience-2337835/
import doctor from '../static/doctor.jpg'
// https://pixabay.com/photos/pills-drugs-medicines-tablets-dose-6826554/
import pills from '../static/pills.jpg'
// https://pixabay.com/photos/doctor-nurse-prescription-health-5591782/
import appointments from '../static/doctor2.jpg'
import ImgCard from '../components/ImgCard'

const Home = () => {
  return (
    <Container>
      <Container
        sx={{
          marginTop: '1rem',
          marginBottom: '1rem',
        }}
      >
        <Grid item xs={12}>
          <Typography color="primary" variant="h1">
            Anywhere, Any Healthcare
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography color="secondary" variant="caption">
            Your Appointment Starts Here
          </Typography>
        </Grid>
      </Container>

      <Grid container spacing={4}>
        <Grid item xs={1}></Grid>
        <Grid item xs={3}>
          <ShadowBox>
            <ImgCard img={doctor} to="/home">
              <BookIcon color="primary" />
              <Typography variant="button">Make an Appointment</Typography>
            </ImgCard>
          </ShadowBox>
        </Grid>
        <Grid item xs={3}>
          <ShadowBox>
            <ImgCard img={pills} to="/prescriptions">
              <MedicationIcon color="primary" />
              <Typography variant="button">Prescriptions</Typography>
            </ImgCard>
          </ShadowBox>
        </Grid>
        <Grid item xs={3}>
          <ShadowBox>
            <ImgCard img={appointments} to="/home">
              <EventNoteIcon color="primary" />
              <Typography variant="button">Upcoming Appointments</Typography>
            </ImgCard>
          </ShadowBox>
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
    </Container>
  )
}

export default Home
