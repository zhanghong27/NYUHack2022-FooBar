import React, { useEffect } from 'react'
import VideoWindow from '../../components/Twilio/VideoWindow'
import useRoom from '../../hooks/useRoom'
import useTracks from '../../hooks/useTracks'

const VideoChat = ({ isDoctor = false }: { isDoctor?: boolean }) => {
  const { connect, room } = useRoom({
    roomName: 'asd',
    isDoctor: isDoctor,
  })
  const [videoTrack, audioTrack] = useTracks({ room: room })
  const [doctorVideoTrack, doctorAudioTrack] = useTracks({
    room: room,
    isLocal: false,
  })

  useEffect(() => {
    connect()
  }, [isDoctor])

  return (
    <>
      <VideoWindow track={videoTrack} />
      <VideoWindow track={doctorVideoTrack} />
    </>
  )
}

export default VideoChat
