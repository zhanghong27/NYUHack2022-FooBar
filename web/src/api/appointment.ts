import { doctors } from './doctor'
import { prescriptions } from './prescriptions'
import { appointment } from './schemas'
import { save, tryRetrieve } from './utils'


const appointments: appointment[] = tryRetrieve("appointments", [
  {
    id: 0,
    doctor: doctors[0],
    time: new Date(2022, 2, 23, 12, 40, 0).toLocaleDateString(),
    prescriptions: prescriptions,
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
