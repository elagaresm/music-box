import { TypographyH3 } from '@/components/typography'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import { ChevronRight } from 'lucide-react'
import { useState } from 'react'
import { Artist as ArtistType } from '@/env'
import { Link, useLoaderData } from 'react-router-dom'
import { uppercaseAlphabet } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'

export async function loader(): Promise<ArtistType[] | null> {
  try {
    const artists = await window.api.getArtistAll()
    if (artists === null) {
      throw new Error('Error loading artists')
    }
    return artists
  } catch (error) {
    throw new Error()
  }
}

const Artists = (): JSX.Element => {
  const [query, setQuery] = useState('A')
  const artists = useLoaderData() as ArtistType[]

  function handleLetterClick(letter: string): void {
    setQuery(letter)
  }

  const artistsFiltered = artists.filter((artista) => {
    if (query === '#') {
      const firstLetter = artista.name[0]
      return typeof +firstLetter === 'number' && !isNaN(+firstLetter)
    }
    return artista.name[0] === query
  })

  return (
    <div className="flex flex-col p-5">
      <TypographyH3 className="mb-4">Artistas</TypographyH3>
      <ScrollArea className="h-[600px]">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Artista</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {artistsFiltered.length ? (
              artistsFiltered.map((artist) => (
                <TableRow key={artist.name}>
                  <TableCell className="font-medium">{artist.name}</TableCell>
                  <TableCell className="flex justify-end text-right">
                    <Button asChild variant="ghost" size="sm">
                      <Link to={`/artist/${artist.name}`}>
                        <ChevronRight size={18} className="cursor-pointer" />
                      </Link>
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell className="font-mono">No hay artistas</TableCell>
                <TableCell> </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </ScrollArea>
      <p className="mt-4 text-center text-sm text-muted-foreground">
        {query === '#' ? 'Artistas con numero(s)' : `Artistas que inicien con "${query}"`}
      </p>
      <AlphabetCarousel onClick={handleLetterClick} />
    </div>
  )
}

export default Artists

function AlphabetCarousel({ onClick }: { onClick: (letter: string) => void }): JSX.Element {
  return (
    <Carousel className="mx-auto mt-auto w-96">
      <CarouselContent>
        {uppercaseAlphabet.map((letter) => (
          <CarouselItem
            onClick={() => onClick(letter)}
            className="basis-1/5 cursor-pointer text-center hover:text-primary"
            key={letter}
          >
            {letter}
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
