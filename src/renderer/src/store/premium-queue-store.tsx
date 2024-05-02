import { create } from 'zustand'
import { Song } from '@/env'

type PremiumQueueStore = {
  premiumQueue: Song[]
  addToPremiumQueue: (newSong: Song) => void
}

export const usePremiumQueueStore = create<PremiumQueueStore>((set) => ({
  premiumQueue: [],
  addToPremiumQueue: (newSong): void =>
    set((state) => ({
      premiumQueue: [...state.premiumQueue, newSong]
    }))
}))
