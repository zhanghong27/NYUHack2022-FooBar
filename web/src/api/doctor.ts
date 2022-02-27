import { doctor } from './schemas'

export const doctors = [
  {
    id: 1,
    name: 'Leonard Girardi',
    area: 'USA',
  },
  {
    id: 2321,
    name: 'John M Brown',
    area: 'Japan',
  },
  {
    id: 123123,
    name: 'David Adams',
    area: 'India',
  },
]

export const getDoctors = async ({
  id,
  name,
}: Partial<doctor>): Promise<doctor[]> => {
  return doctors.filter(
    (doctor) => (!id || doctor.id === id) && (!name || doctor.name === name)
  )
}

export const getDoctor = async ({
  name,
}: {
  name: string
}): Promise<doctor | undefined> => {
  return doctors.filter((doctor) => doctor.name === name).at(0)
}
