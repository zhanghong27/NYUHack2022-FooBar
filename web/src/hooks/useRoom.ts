import { connect } from 'twilio-video';

const token = process.env.REACT_APP_TWILIO_TOKEN ?? ''

export type RoomHookProps = {
    roomName: string
}

const useRoom = ({roomName}: RoomHookProps) => {
    connect(token, {
        name: roomName, 
        audio: true,
        video: { width: 640 },
    }).then((room: any) => {
        console.log('Connected')
        room.on('participantConnected', (participant: any) => {
        console.log(`A remote Participant connected: ${participant}`);
      })
    })
}

export default useRoom
