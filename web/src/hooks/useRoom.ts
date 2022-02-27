import { useCallback, useState } from 'react';
import { connect as tConnect, Room } from 'twilio-video';

const token = process.env.REACT_APP_TWILIO_TOKEN ?? ''

export type RoomHookProps = {
    roomName: string
}

const useRoom = ({roomName}: RoomHookProps): {room?: Room, connect: () => Promise<void>} => {
    const [room, setRoom] = useState<Room | undefined>(undefined);

    const connect = useCallback(() => 
        tConnect(token, {
            name: roomName, 
            audio: true,
            video: { width: 640 },
        }).then((room) => {
            console.log('connected')
            room.on('participantConnected', (participant: any) => {
                console.log(`A remote Participant connected: ${participant}`);
            })
            setRoom(room)
        })
    , [roomName])

    return {room, connect}
}

export default useRoom
