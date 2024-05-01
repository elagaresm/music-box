import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { AudioLines, Library, MicVocal, TrendingUp } from 'lucide-react'
import { Link } from 'react-router-dom'

const queue = ['Levitating', 'Save Your Tears', 'Positions', "What's Next", 'Blinding Lights']

export function Sidebar({ className }: React.HTMLAttributes<HTMLDivElement>): JSX.Element {
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
            <div className="space-y-1 p-2">
              {queue.map((song, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  className="w-full justify-start gap-2 text-primary"
                >
                  <AudioLines />
                  {song}
                </Button>
              ))}

              {queue.map((song, index) => (
                <Button key={index} variant="ghost" className="w-full justify-start gap-2">
                  <AudioLines />
                  {song}
                </Button>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  )
}
