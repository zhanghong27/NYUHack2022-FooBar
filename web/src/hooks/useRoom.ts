import { useCallback, useState } from 'react'
import { connect as tConnect, Room } from 'twilio-video'

const token = process.env.REACT_APP_TWILIO_TOKEN
const doctorToken = process.env.REACT_APP_TWILIO_TOKEN_2

if (!token || !doctorToken)
  throw new Error('Twilio video token is not configured')

export type RoomHookProps = {
  roomName: string
  isDoctor?: boolean
}

const useRoom = ({
  roomName,
  isDoctor = false,
}: RoomHookProps): {
  room?: Room
  connect: () => Promise<void>
  disconnect: () => void
} => {
  const [room, setRoom] = useState<Room | undefined>(undefined)

  const connect = useCallback(
    () =>
      tConnect(isDoctor ? token : doctorToken, {
        name: roomName,
        audio: true,
        video: { width: 640 },
        automaticSubscription: true,
      }).then((room) => {
        room.setMaxListeners(2)
        console.log('connected')
        console.log(room.participants)
        room.on('participantConnected', (participant: any) => {
          console.log(`A remote Participant connected: ${participant}`)
        })
        setRoom(room)
      }),
    [roomName]
  )

  const disconnect = useCallback(() => {
    if (!room) return
    room?.disconnect()
  }, [roomName])

  return { room, connect, disconnect }
}

export default useRoom
