import React from 'react'
import VideoWindow from '../../components/Twilio/VideoWindow'
import useRoom from '../../hooks/useRoom'

const VideoChat = () => {
  useRoom({
    roomName: 'Test',
  })

  return <VideoWindow roomName='test' />
}

export default VideoChat
