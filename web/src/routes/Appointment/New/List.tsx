/**
 * Show a list of available doctors open to appointments.
 */
import React from 'react'
import { useQuery } from 'react-query'
import { getDoctors } from '../../../api/doctor'
import DoctorCardList from '../../../components/Appointment/DoctorCardList'
import TitlePage from '../../../layout/TitlePage'

const ListAppointments = () => {
  const { data, isLoading } = useQuery('doctors', getDoctors)

  return (
    <TitlePage title='Doctors' parentPage='/home'>
      {isLoading || data === undefined ? (
        'loading'
      ) : (
        <DoctorCardList doctors={data} />
      )}
    </TitlePage>
  )
}

export default ListAppointments
