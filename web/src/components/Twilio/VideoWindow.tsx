import { styled } from '@mui/material'
import React, { useEffect, useRef } from 'react'
import { VideoTrack } from 'twilio-video'

type VideoWindowProps = {
  track?: VideoTrack
}

const Video = styled('video')({
  width: '100%',
  height: '100%',
})

const VideoWindow = ({ track }: VideoWindowProps) => {
  const ref = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (!track || !ref.current) return

    track.attach(ref.current)
    
    return () => {
      if (!track || !ref.current) return

      track.detach(ref.current)
    }
  }, [track])

  if (!track) return <>loading</>

  return <Video ref={ref} />
}

export default VideoWindow
