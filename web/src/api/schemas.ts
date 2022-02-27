export type prescription = {
  name: string
  instruction: string
  price: number
}

export type doctor = {
  id: number
  name: string
  area: string
}

export type appointment = {
  id: number
  doctor: doctor
  prescriptions: prescription[]
  time: string
  isEnded: boolean
}
