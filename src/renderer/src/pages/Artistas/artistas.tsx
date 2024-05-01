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
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import { ChevronRight } from 'lucide-react'
import { useState } from 'react'

const uppercaseAlphabet = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
]

const artistas = [
  { name: 'Taylor Swift', path: '/artists/taylor-swift' },
  { name: 'Ed Sheeran', path: '/artists/ed-sheeran' },
  { name: 'Ariana Grande', path: '/artists/ariana-grande' },
  { name: 'The Weeknd', path: '/artists/the-weeknd' },
  { name: 'BTS', path: '/artists/bts' },
  { name: 'Billie Eilish', path: '/artists/billie-eilish' },
  { name: 'Justin Bieber', path: '/artists/justin-bieber' },
  { name: 'Dua Lipa', path: '/artists/dua-lipa' },
  { name: 'Post Malone', path: '/artists/post-malone' },
  { name: 'Selena Gomez', path: '/artists/selena-gomez' },
  { name: 'Shawn Mendes', path: '/artists/shawn-mendes' },
  { name: 'Lady Gaga', path: '/artists/lady-gaga' },
  { name: 'Cardi B', path: '/artists/cardi-b' },
  { name: 'Harry Styles', path: '/artists/harry-styles' },
  { name: 'Camila Cabello', path: '/artists/camila-cabello' },
  { name: 'Halsey', path: '/artists/halsey' },
  { name: 'Lizzo', path: '/artists/lizzo' },
  { name: 'Drake', path: '/artists/drake' },
  { name: 'Travis Scott', path: '/artists/travis-scott' },
  { name: 'Lil Nas X', path: '/artists/lil-nas-x' },
  { name: 'Olivia Rodrigo', path: '/artists/olivia-rodrigo' },
  { name: 'Khalid', path: '/artists/khalid' },
  { name: 'SZA', path: '/artists/sza' },
  { name: 'The Chainsmokers', path: '/artists/the-chainsmokers' },
  { name: 'Kacey Musgraves', path: '/artists/kacey-musgraves' },
  { name: 'Bruno Mars', path: '/artists/bruno-mars' },
  { name: 'J Balvin', path: '/artists/j-balvin' },
  { name: 'Lana Del Rey', path: '/artists/lana-del-rey' },
  { name: 'Blackpink', path: '/artists/blackpink' },
  { name: 'Katy Perry', path: '/artists/katy-perry' },
  { name: 'Imagine Dragons', path: '/artists/imagine-dragons' },
  { name: 'Maroon 5', path: '/artists/maroon-5' },
  { name: 'Adele', path: '/artists/adele' },
  { name: 'Kendrick Lamar', path: '/artists/kendrick-lamar' },
  { name: 'Eminem', path: '/artists/eminem' },
  { name: 'Sia', path: '/artists/sia' },
  { name: 'John Mayer', path: '/artists/john-mayer' },
  { name: 'Tove Lo', path: '/artists/tove-lo' },
  { name: 'Charlie Puth', path: '/artists/charlie-puth' },
  { name: 'Miley Cyrus', path: '/artists/miley-cyrus' },
  { name: 'Zayn Malik', path: '/artists/zayn-malik' },
  { name: 'J. Cole', path: '/artists/j-cole' },
  { name: 'Twenty One Pilots', path: '/artists/twenty-one-pilots' },
  { name: 'Florence and the Machine', path: '/artists/florence-and-the-machine' },
  { name: 'Lorde', path: '/artists/lorde' },
  { name: 'Hozier', path: '/artists/hozier' },
  { name: 'Portugal. The Man', path: '/artists/portugal-the-man' },
  { name: 'Kanye West', path: '/artists/kanye-west' },
  { name: 'Lil Uzi Vert', path: '/artists/lil-uzi-vert' },
  { name: 'Tame Impala', path: '/artists/tame-impala' },
  { name: 'Sabrina Carpenter', path: '/artists/sabrina-carpenter' },
  { name: 'Sam Smith', path: '/artists/sam-smith' }
]

const Artistas = (): JSX.Element => {
  const [query, setQuery] = useState('A')

  function handleLetterClick(letter: string): void {
    setQuery(letter)
  }

  const artistasFiltered = artistas.filter((artista) => artista.name[0] === query)

  return (
    <div className="p-5 flex flex-col">
      <TypographyH3 className="mb-4">Artistas</TypographyH3>
      <div>
        <Table>
          <TableCaption>Artistas con `{query}`</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Artista</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {artistasFiltered.length ? (
              artistasFiltered.map((artista) => (
                <TableRow key={artista.name}>
                  <TableCell className="font-medium">{artista.name}</TableCell>
                  <TableCell className="text-right flex justify-end">
                    <ChevronRight size={18} className="cursor-pointer" />
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow className="flex justify-between">
                <TableCell className="text-muted-foreground">No hay artistas</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <ArtistasCarousel onClick={handleLetterClick} />
    </div>
  )
}

export default Artistas

function ArtistasCarousel({ onClick }: { onClick: (letter: string) => void }): JSX.Element {
  return (
    <Carousel className="w-96 mt-auto mx-auto">
      <CarouselContent>
        {uppercaseAlphabet.map((letter) => (
          <CarouselItem
            onClick={() => onClick(letter)}
            className="basis-1/5 cursor-pointer hover:text-primary text-center"
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
