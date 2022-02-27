import { Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import VideoWindow from '../../components/Twilio/VideoWindow'
import useRoom from '../../hooks/useRoom'
import useTracks from '../../hooks/useTracks'

const VideoChat = ({ isDoctor = false }: { isDoctor?: boolean }) => {
  const { id } = useParams()
  const { connect, room } = useRoom({
    roomName: 'asd',
    isDoctor: isDoctor,
  })
  const [videoTrack] = useTracks({ room: room })
  const [doctorVideoTrack] = useTracks({
    room: room,
    isLocal: false,
  })

  useEffect(() => {
    connect()
  }, [isDoctor])

  return (
    <>
      <Typography variant='h2'>Your id is {id}</Typography>
      <VideoWindow track={videoTrack} />
      <VideoWindow track={doctorVideoTrack} />
    </>
  )
}

export default VideoChat
