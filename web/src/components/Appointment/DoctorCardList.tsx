import React from 'react'
import { Box } from '@mui/system'
import { doctor } from '../../api/schemas'
import DoctorCard from './DoctorCard'
import GrowBox from '../GrowBox'

type DoctorCardListProps = {
  doctors: doctor[]
  onClick?: (doctor: doctor) => void
}

const DoctorCardList = ({ doctors, onClick }: DoctorCardListProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        '& > :not(style)': {
          m: 1,
        },
      }}
    >
      {doctors.map((doctor, index) => (
        <GrowBox key={doctor.id} duration={index * 500} maxDuration={2000}>
          <DoctorCard doctor={doctor} onClick={onClick} />
        </GrowBox>
      ))}
    </Box>
  )
}

export default DoctorCardList
