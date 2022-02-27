import React, { useEffect, useState } from 'react'
import { VideoTrack } from 'twilio-video'
import VideoWindow from '../../components/Twilio/VideoWindow'
import useRoom from '../../hooks/useRoom'

const VideoChat = () => {
  const {connect, room} = useRoom({
    roomName: 'asd',
  })
  const [track, setTrack] = useState<VideoTrack>();

  useEffect(()=> {
    connect()
  }, []);
  
  useEffect(() => {
    if (!room) return

    room.localParticipant.videoTracks.forEach(publication => {
      console.log(publication.track)
      setTrack(publication.track)
    })
  }, [room])

  if (!track) return <>loading</>

  return <VideoWindow track={track} />
}

export default VideoChat
