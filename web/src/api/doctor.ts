import { doctor } from './schemas'

export const getDoctors = async (): Promise<doctor[]> => {
  return [
    {
      id: 1,
      name: 'Leonard Girardi',
    },
    {
      id: 2321,
      name: 'John M Brown',
    },
    {
      id: 123123,
      name: 'David Adams',
    },
  ]
}
