import { useEffect, useState } from 'react'
import { AudioTrack, Room, Track, VideoTrack } from 'twilio-video'

export type TracksHookProps = {
  room?: Room
  isLocal?: boolean
}

const first = function <T>(m: Map<string, T>): T | undefined {
  return m.values().next().value
}

const useTracks = ({
  room,
  isLocal = true,
}: TracksHookProps): [VideoTrack | null, AudioTrack | null] => {
  const [videoTrack, setVideoTrack] = useState<VideoTrack | null>(null)
  const [audioTrack, setAudioTrack] = useState<AudioTrack | null>(null)

  const handleTrackSubscribed = (track: Track) => {
    if (track.kind == 'video') setVideoTrack(track as VideoTrack)
    if (track.kind == 'audio') setAudioTrack(track as AudioTrack)
  }

  useEffect(() => {
    if (!room) return

    if (isLocal) {
      setVideoTrack(first(room.localParticipant.videoTracks)?.track ?? null)
      setAudioTrack(first(room.localParticipant.audioTracks)?.track ?? null)
    } else {
      room.on('trackSubscribed', handleTrackSubscribed)
      return () => {
        room.off('trackSubscribed', handleTrackSubscribed)
      }
    }
  }, [room])

  return [videoTrack, audioTrack]
}

export default useTracks
