import React from 'react'
import { Box } from '@mui/system'
import { doctor } from '../../api/schemas'
import DoctorCard from './DoctorCard'

type DoctorCardListProps = {
  doctors: doctor[]
}

const DoctorCardList = ({ doctors }: DoctorCardListProps) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
      {doctors.map((doctor) => (
        <DoctorCard key={doctor.id} doctor={doctor} />
      ))}
    </Box>
  )
}

export default DoctorCardList
