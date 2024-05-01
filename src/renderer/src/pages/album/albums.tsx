import { TypographyH3 } from '@/components/typography'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'
import { ScrollArea } from '@/components/ui/scroll-area'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import { cn, uppercaseAlphabet } from '@/lib/utils'
import { ChevronRight } from 'lucide-react'
import { useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import { Artist as ArtistType } from '@/env'

const Albums = (): JSX.Element => {
  const [query, setQuery] = useState('A')
  const artists = useLoaderData() as ArtistType

  function handleLetterClick(letter: string): void {
    setQuery(letter)
  }

  const albumsFiltered = artists
    .map((artist) => {
      const filteredAlbums = artist.albums.filter((album) => {
        const firstLetter = album.name[0]
        if (query === '#') {
          return typeof +firstLetter === 'number' && !isNaN(+firstLetter)
        }
        return album.name.indexOf(query) === 0
      })

      if (filteredAlbums.length > 0) {
        return { name: artist.name, albums: filteredAlbums }
      }

      return undefined
    })
    .filter(Boolean)

  return (
    <div className="flex flex-col overflow-hidden p-5">
      <TypographyH3 className="mb-4">Albumes</TypographyH3>
      <ScrollArea className="h-[600px]">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Album</TableHead>
              <TableHead>Artista</TableHead>
              <TableHead className="text-right"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {albumsFiltered.length ? (
              albumsFiltered.map((artist) =>
                artist.albums.map((album) => (
                  <TableRow key={album.name}>
                    <TableCell className="font-medium">{album.name}</TableCell>
                    <TableCell>{artist.name}</TableCell>
                    <TableCell className="flex justify-end text-right">
                      <Link to={`/artist/${artist.name}/album/${album.name}`}>
                        <ChevronRight size={18} />
                      </Link>
                    </TableCell>
                  </TableRow>
                ))
              )
            ) : (
              <TableRow>
                <TableCell className="font-mono">No hay albumes</TableCell>
                <TableCell> </TableCell>
                <TableCell> </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </ScrollArea>
      <p className="mt-4 text-center text-sm text-muted-foreground">
        {query === '#' ? 'Albumes con numero(s)' : `Albumes que inicien con "${query}"`}
      </p>
      <AlphabetCarousel className="block" onClick={handleLetterClick} />
    </div>
  )
}

export default Albums

function AlphabetCarousel({
  onClick,
  className
}: {
  onClick: (letter: string) => void
  className?: string
}): JSX.Element {
  return (
    <Carousel className={cn('mx-auto mt-auto w-96', className)}>
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
