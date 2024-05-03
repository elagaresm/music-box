import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { AudioLines, Crown, Library, MicVocal, TrendingUp } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { useNormalQueueStore } from '@/store/normal-queue-store'
import { Song } from '@/env'
import { usePremiumQueueStore } from '@/store/premium-queue-store'

export function Sidebar({ className }: React.HTMLAttributes<HTMLDivElement>): JSX.Element {
  const normalQueue = useNormalQueueStore<Song[]>((state) => state.normalQueue)
  const premiumQueue = usePremiumQueueStore<Song[]>((state) => state.premiumQueue)

  console.log('queue:', normalQueue)

  return (
    <div className={cn('', className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">Biblioteca</h2>
          <div className="space-y-1">
            <NavLink to="/">
              <Button variant="ghost" className="w-full justify-start gap-2">
                <TrendingUp size={24} />
                Populares
              </Button>
            </NavLink>
            <NavLink to="/artists">
              <Button variant="ghost" className="w-full justify-start gap-2">
                <MicVocal size={24} />
                Artistas
              </Button>
            </NavLink>
            <NavLink to="/albums">
              <Button variant="ghost" className="w-full justify-start gap-2">
                <Library size={24} />
                Álbumes
              </Button>
            </NavLink>
          </div>
        </div>

        <div className="py-2">
          <h2 className="relative px-7 text-lg font-semibold tracking-tight">Cola</h2>

          {/* Cola */}

          <ScrollArea className="h-[300px] w-full px-1">
            <div className="">
              {premiumQueue.map((song, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  className="flex w-full justify-start gap-2 overflow-hidden first-of-type:text-primary"
                >
                  <div>
                    <AudioLines size={16} />
                  </div>
                  <div className="overflow-hidden">{song.name}</div>
                  <div>
                    <Crown size={16} />
                  </div>
                </Button>
              ))}

              {normalQueue.map((song, index) => (
                <Button key={index} variant="ghost" className="w-full justify-start gap-2">
                  <AudioLines size={16} />
                  {song.name}
                </Button>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  )
}
