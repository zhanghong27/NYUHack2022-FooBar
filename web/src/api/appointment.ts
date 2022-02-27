import { doctors } from './doctor'
import { prescriptions } from './prescriptions'
import { appointment, doctor } from './schemas'
import { save, tryRetrieve } from './utils'

const appointments: appointment[] = tryRetrieve('appointments', [
  {
    id: 0,
    doctor: doctors[0],
    time: new Date(2022, 2, 23, 12, 40, 0).toLocaleDateString(),
    prescriptions: prescriptions,
    isEnded: false,
  },
  {
    id: 1,
    doctor: doctors[1],
    time: new Date(2022, 2, 28, 12, 40, 0).toLocaleDateString(),
    prescriptions: [],
    isEnded: false,
  },
])

export const getAppointment = async ({
  id,
}: {
  id: number
}): Promise<appointment | undefined> => {
  return appointments.filter((appointment) => appointment.id === id).at(0)
}

export const getAppointments = async ({
  id,
}: {
  id?: number
}): Promise<appointment[]> => {
  return appointments.filter((appointment) => !id || appointment.id === id)
}

export const endAppointment = async ({
  id,
}: {
  id?: number
}): Promise<void> => {
  const targetIndex = appointments.findIndex(
    (appointment) => appointment.id === id
  )
  if (targetIndex >= 0) {
    appointments[targetIndex].isEnded = true
  }
  save('appointments', appointments)
}

export const addAppointment = async ({ doctor }: { doctor: doctor }) => {
  const id =
    appointments.length > 0 ? appointments[appointments.length - 1].id : 0
  appointments.push({
    id: id,
    isEnded: false,
    time: new Date().toLocaleDateString(),
    doctor: doctor,
    prescriptions: [],
  })
  save('appointments', appointments)
}

export const upcomingAppointments = async (): Promise<appointment[]> => {
  return appointments
}
