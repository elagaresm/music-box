import { cn, uppercaseAlphabet } from '@/lib/utils'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from './ui/carousel'
import { Button } from './ui/button'

export default function AlphabetCarousel({
  onClick,
  className,
  query
}: {
  onClick: (letter: string) => void
  className?: string
  query: string
}): JSX.Element {
  return (
    <Carousel className={cn('mx-auto mt-auto w-96', className)}>
      <CarouselContent className="flex">
        {uppercaseAlphabet.map((letter) => (
          <CarouselItem className="basis-1/5 text-center" key={letter}>
            <Button
              onClick={() => onClick(letter)}
              variant={query === letter ? 'default' : 'ghost'}
              className="w-full cursor-pointer"
            >
              {letter}
            </Button>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
