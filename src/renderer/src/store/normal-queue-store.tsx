import { create } from 'zustand'
import { Song } from '@/env'

type NormalQueueStore = {
  normalQueue: Song[]
  addToNormalQueue: (newSong: Song) => void
  removeFromNormalQueue: () => void
}

export const useNormalQueueStore = create<NormalQueueStore>((set) => ({
  normalQueue: [],

  addToNormalQueue: (newSong): void =>
    set((state) => ({
      normalQueue: [...state.normalQueue, newSong]
    })),

  removeFromNormalQueue: (): void =>
    set((state) => ({
      normalQueue: [state.normalQueue.slice(1)]
    }))
}))
