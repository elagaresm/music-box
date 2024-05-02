import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { AudioLines, Crown, Library, MicVocal, TrendingUp } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useQueueStore } from '@/store/queueStore'
import { Song } from '@/env'
import { usePremiumQueueStore } from '@/store/premium-queue-store'

export function Sidebar({ className }: React.HTMLAttributes<HTMLDivElement>): JSX.Element {
  const queue = useQueueStore<Song[]>((state) => state.queue)
  const premiumQueue = usePremiumQueueStore<Song[]>((state) => state.premiumQueue)

  console.log('queue:', queue)

  return (
    <div className={cn('', className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">Biblioteca</h2>
          <div className="space-y-1">
            <Button asChild variant="ghost" className="w-full justify-start gap-2">
              <Link to="/">
                <TrendingUp size={24} />
                Populares
              </Link>
            </Button>
            <Button asChild variant="ghost" className="w-full justify-start gap-2">
              <Link to="/artists">
                <MicVocal size={24} />
                Artistas
              </Link>
            </Button>
            <Button asChild variant="ghost" className="w-full justify-start gap-2">
              <Link to="/albums">
                <Library size={24} />
                Álbumes
              </Link>
            </Button>
          </div>
        </div>

        <div className="py-2">
          <h2 className="relative px-7 text-lg font-semibold tracking-tight">Cola</h2>

          {/* Cola */}

          <ScrollArea className="h-[300px] px-1">
            <div className="space-y-1 p-2  ">
              {premiumQueue.map((song, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  className="w-full justify-start gap-2 first-of-type:text-primary"
                >
                  <AudioLines size={16} />
                  {song.name}
                  <Crown size={16} />
                </Button>
              ))}

              {queue.map((song, index) => (
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
