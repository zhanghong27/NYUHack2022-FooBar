import { doctor } from './schemas'

export const getDoctors = async (): Promise<doctor[]> => {
  return [
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
}
