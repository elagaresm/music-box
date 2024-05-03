import { cn } from '@/lib/utils'
import { Button } from './ui/button'
import { Play, SkipBack, SkipForward } from 'lucide-react'
import { Slider } from '@/components/ui/slider'

const MediaPlayer = ({ className }: React.HTMLAttributes<HTMLDivElement>): JSX.Element => {
  return (
    <div className={cn('flex items-center justify-between px-4', className)}>
      <Thumbnail />
      <MediaControls />
    </div>
  )
}

export default MediaPlayer

function Thumbnail(): JSX.Element {
  return (
    <div className="jsutify-center flex items-center ">
      <img
        alt="Album Cover"
        className="mr-4 w-24 rounded-md"
        height={80}
        src="https://www.billboard.com/wp-content/uploads/2022/05/bad-bunny-cover-art-2022-billboard-1240.jpg?w=1024"
      />
      <div>
        <h2 className="text-lg font-semibold">Starlight</h2>
        <p className="text-muted-foreground">Muse</p>
      </div>
    </div>
  )
}

function MediaControls(): JSX.Element {
  return (
    <div className="flex basis-3/5 flex-col items-center gap-4 pb-2 pr-2">
      <div className="flex gap-4">
        <Button size={'icon'} variant={'ghost'}>
          <SkipBack size={20} />
        </Button>
        <Button size={'icon'} variant={'ghost'}>
          <Play size={20} />
        </Button>
        <Button size={'icon'} variant={'ghost'}>
          <SkipForward size={20} />
        </Button>
      </div>
      <div className="relative w-full">
        <Slider defaultValue={[33]} max={100} step={1} disabled className="mb-2" />
        <span className="absolute left-0 text-xs text-muted-foreground">3:45</span>
        <span className="absolute right-0 text-xs text-muted-foreground">3:45</span>
      </div>
    </div>
  )
}
