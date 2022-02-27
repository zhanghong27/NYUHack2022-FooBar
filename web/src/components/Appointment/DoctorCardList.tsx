import React from 'react'
import { Box } from '@mui/system'
import { doctor } from '../../api/schemas'
import DoctorCard from './DoctorCard'

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
      {doctors.map((doctor) => (
        <DoctorCard key={doctor.id} doctor={doctor} onClick={onClick} />
      ))}
    </Box>
  )
}

export default DoctorCardList
