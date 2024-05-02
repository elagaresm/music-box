import { create } from 'zustand'
import { Song } from '@/env'

type QueueStore = {
  queue: Song[]
  addToQueue: (newSong: Song) => void
}

export const useQueueStore = create<QueueStore>((set) => ({
  queue: [],
  addToQueue: (newSong): void =>
    set((state) => ({
      queue: [...state.queue, newSong]
    }))
}))
