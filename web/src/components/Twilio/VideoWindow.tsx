import React from 'react'

type VideoWindow = {
  roomName: string
}

const VideoWindow = ({ roomName }: VideoWindow) => {
  return <>{roomName}</>
}

export default VideoWindow
