import React from 'react'
import { createContext, useContext, useEffect, useRef, useState } from 'react'
import { useNormalQueueStore } from './normal-queue-store'
import { usePremiumQueueStore } from './premium-queue-store'
import { Song } from '@/env'

export type AudioProviderState = {
  audioRef: React.MutableRefObject<HTMLAudioElement | null>
  currentSong: Song
  currentTime: number
  setCurrentTime: React.Dispatch<React.SetStateAction<number>>
} | null

const AudioContext = createContext<AudioProviderState>(null)

export function AudioProvider({ children }: { children: JSX.Element }): JSX.Element {
  const audioRef = useRef(null)

  const [currentSong, setCurrentSong] = useState(null)
  const [currentTime, setCurrentTime] = useState(0)
  const [normalQueue, removeFromNormalQueue] = useNormalQueueStore((state) => [
    state.normalQueue,
    state.removeFromNormalQueue
  ])
  const [premiumQueue, removeFromPremiumQueue] = usePremiumQueueStore((state) => [
    state.premiumQueue,
    state.removeFromPremiumQueue
  ])

  useEffect(() => {
    if (normalQueue.length > 0 || (premiumQueue.length > 0 && !currentSong)) {
      if (premiumQueue.length > 0) {
        setCurrentSong(premiumQueue[0])
      } else {
        setCurrentSong(normalQueue[0])
      }
    }
  }, [normalQueue, premiumQueue])

  return (
    <AudioContext.Provider value={{ audioRef, currentSong, currentTime, setCurrentTime }}>
      {children}
    </AudioContext.Provider>
  )
}

export const useAudio = (): AudioProviderState => {
  return useContext(AudioContext)
}
