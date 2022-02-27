/**
 * Show a list of available doctors open to appointments.
 */
import React from 'react'
import { useQuery } from 'react-query'
import { useNavigate } from 'react-router'
import { useSearchParams } from 'react-router-dom'
import { CircularProgress } from '@mui/material'
import { getDoctors } from '../../../api/doctor'
import { doctor } from '../../../api/schemas'
import DoctorCardList from '../../../components/Appointment/DoctorCardList'
import TitlePage from '../../../layout/TitlePage'

const ListAppointments = () => {
  const navigate = useNavigate()
  const { data, isLoading } = useQuery('doctors', () => getDoctors({}))
  const [searchParams] = useSearchParams()
  const [symptoms, doctorType] = [
    searchParams.get('symptoms'),
    searchParams.get('doctorType'),
  ]

  const handleConfim = (doctor: doctor) => {
    navigate(
      `../confirm?symptoms=${symptoms}&doctorType=${doctorType}&doctorId=${doctor.id}&doctorName=${doctor.name}`
    )
  }

  return (
    <TitlePage
      title='Doctors'
      parentPage={`/appointment/new?symptoms=${symptoms}&doctorType=${doctorType}`}
    >
      {isLoading || data === undefined ? (
        <CircularProgress />
      ) : (
        <DoctorCardList doctors={data} onClick={handleConfim} />
      )}
    </TitlePage>
  )
}

export default ListAppointments
