// import { AudioProviderState, useAudio } from '@/store/audioContext'

// export default function Audio(): JSX.Element {
//   const { audioRef, currentSong } = useAudio<AudioProviderState>()

//   console.log(currentSong)

//   return (
//     <>
//       <audio ref={audioRef} autoPlay />
//     </>
//   )
// }

import React, { useRef, useState, ChangeEvent } from 'react'
import MediaPlayer from './media-player'

interface AudioPlayerProps {
  song: any
  className: string
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ song, className }) => {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)

  console.log('duration:', duration)
  console.log('currentTime:', currentTime)

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current?.pause()
    } else {
      audioRef.current?.play()
    }
    setIsPlaying(!isPlaying)
  }

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime)
    }
  }

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration)
    }
  }

  // const handleSeek = (event: ChangeEvent<HTMLInputElement>) => {
  //   if (audioRef.current) {
  //     const seekTime = (parseFloat(event.target.value) / 100) * duration
  //     audioRef.current.currentTime = seekTime
  //     setCurrentTime(seekTime)
  //   }
  // }

  if (!song) {
    return <div>Audio not found</div>
  }

  console.log('this is src.song:', song)

  return (
    <>
      <audio
        ref={audioRef}
        src={song.song}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
      />
      <MediaPlayer
        className={className}
        togglePlayPause={togglePlayPause}
        duration={duration}
        currentTime={currentTime}
        song={song}
      />
      {/* <button onClick={togglePlayPause}>{isPlaying ? 'Pause' : 'Play'}</button> */}
      {/* <input
        type="range"
        min="0"
        max="100"
        value={(currentTime / duration) * 100 || 0}
        onChange={handleSeek}
      /> */}
      {/* <div>
        {Math.floor(currentTime / 60)}:
        {Math.floor(currentTime % 60)
          .toString()
          .padStart(2, '0')}{' '}
        /{Math.floor(duration / 60)}:
        {Math.floor(duration % 60)
          .toString()
          .padStart(2, '0')}
      </div> */}
    </>
  )
}

export default AudioPlayer
