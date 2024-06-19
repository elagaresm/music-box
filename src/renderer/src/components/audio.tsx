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

import React, { useRef, useState, useEffect, ChangeEvent } from 'react'
import MediaPlayer from './media-player'
import { getCoverBlob, secondsToMinutes } from '@/lib/utils'

interface AudioPlayerProps {
  song: any
  className: string
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ song, className }) => {
  const [audioBuffer, setAudioBuffer] = useState<string | null>(null)
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)

  console.log('duration:', duration)
  console.log('currentTime:', currentTime)

  useEffect(() => {
    const readSong = async (): Promise<void> => {
      try {
        const response = await window.api.getDataFromFile(song.path)
        const result = getCoverBlob(response)
        setAudioBuffer(result)
      } catch (error) {
        console.error('Error reading song:', song.name)
      }
    }

    if (song) {
      readSong()
    }
  }, [song])

  console.log('AudioBuffer:', audioBuffer)

  const togglePlayPause = (): void => {
    if (isPlaying) {
      audioRef.current?.pause()
    } else {
      audioRef.current?.play()
    }
    setIsPlaying(!isPlaying)
  }

  const handleTimeUpdate = (): void => {
    if (audioRef.current) {
      setCurrentTime(Math.round(audioRef.current.currentTime))
    }
  }

  const handleLoadedMetadata = (): void => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration)
    }
  }

  const handleSeek = (number: number): void => {
    if (audioRef.current) {
      const seekTime = (number / 100) * duration
      audioRef.current.currentTime = seekTime
      setCurrentTime(seekTime)
    }
  }

  if (!song) {
    return <div>Audio not found</div>
  }

  console.log('this is src.song:', song)

  return (
    <>
      <audio
        ref={audioRef}
        src={audioBuffer ? audioBuffer : ''}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
      />
      <MediaPlayer
        className={className}
        togglePlayPause={togglePlayPause}
        duration={secondsToMinutes(duration)}
        currentTime={secondsToMinutes(Math.round(currentTime))}
        handleSeek={handleSeek}
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
