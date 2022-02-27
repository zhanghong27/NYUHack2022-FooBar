import { prescription } from './schemas'

export const prescriptions = [
  {
    name: 'Amoxicilllin 250 mg tablets',
    instruction: '2 each day',
    price: 23,
  },
  {
    name: 'Amoxicilllin 250 mg tablets x2',
    instruction: '2 each day',
    price: 23,
  },
  {
    name: 'Amoxicilllin 250 mg tablets x3',
    instruction: '2 each day',
    price: 23,
  },
]

export const getPrescriptions = async (): Promise<prescription[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(prescriptions)
    }, 200)
  })
}
