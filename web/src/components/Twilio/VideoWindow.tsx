import { styled, Typography } from '@mui/material'
import React, { useEffect, useRef } from 'react'
import { VideoTrack } from 'twilio-video'

type VideoWindowProps = {
  track?: VideoTrack | null
}

const Video = styled('video')({
  width: '100%',
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

  if (!track)
    return (
      <Typography variant='body2' color='secondary'>
        Not available
      </Typography>
    )

  return <Video ref={ref} />
}

export default VideoWindow
