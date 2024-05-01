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

const albumes = [
  { name: 'Taylor Swift', albums: ['Fearless', '1989'] },
  { name: 'Ed Sheeran', albums: ['Divide', 'Multiply'] },
  { name: 'Ariana Grande', albums: ['Thank U, Next', 'Sweetener'] },
  { name: 'The Weeknd', albums: ['After Hours', 'Starboy'] },
  { name: 'BTS', albums: ['Map of the Soul: 7', 'BE'] },
  {
    name: 'Billie Eilish',
    albums: ['When We All Fall Asleep, Where Do We Go?', 'Happier Than Ever']
  },
  { name: 'Justin Bieber', albums: ['Purpose', 'Justice'] },
  { name: 'Dua Lipa', albums: ['Future Nostalgia', 'Dua Lipa'] },
  { name: 'Post Malone', albums: ["Hollywood's Bleeding", 'Beerbongs & Bentleys'] },
  { name: 'Selena Gomez', albums: ['Rare', 'Revival'] },
  { name: 'Shawn Mendes', albums: ['Shawn Mendes', 'Illuminate'] },
  { name: 'Lady Gaga', albums: ['Chromatica', 'The Fame'] },
  { name: 'Cardi B', albums: ['Invasion of Privacy', 'Gangsta Bitch Music, Vol. 2'] },
  { name: 'Harry Styles', albums: ['Fine Line', 'Harry Styles'] },
  { name: 'Camila Cabello', albums: ['Romance', 'Camila'] },
  { name: 'Halsey', albums: ['Manic', 'Hopeless Fountain Kingdom'] },
  { name: 'Lizzo', albums: ['Cuz I Love You', 'Lizzo Bangers'] },
  { name: 'Drake', albums: ['Certified Lover Boy', 'Scorpion'] },
  { name: 'Travis Scott', albums: ['Astroworld', 'Birds in the Trap Sing McKnight'] },
  { name: 'Lil Nas X', albums: ['Montero', '7'] },
  { name: 'Olivia Rodrigo', albums: ['SOUR'] },
  { name: 'Khalid', albums: ['Free Spirit', 'American Teen'] },
  { name: 'SZA', albums: ['Ctrl', 'Z'] },
  { name: 'The Chainsmokers', albums: ['Memories...Do Not Open', 'World War Joy'] },
  { name: 'Kacey Musgraves', albums: ['Golden Hour', 'Pageant Material'] },
  { name: 'Bruno Mars', albums: ['24K Magic', 'Unorthodox Jukebox'] },
  { name: 'J Balvin', albums: ['Colores', 'Vibras'] },
  { name: 'Lana Del Rey', albums: ['Born to Die', 'Norman Fucking Rockwell!'] },
  { name: 'Blackpink', albums: ['The Album', 'Square Up'] },
  { name: 'Katy Perry', albums: ['Teenage Dream', 'One of the Boys'] },
  { name: 'Imagine Dragons', albums: ['Evolve', 'Night Visions'] },
  { name: 'Maroon 5', albums: ['Songs About Jane', "It Won't Be Soon Before Long"] },
  { name: 'Adele', albums: ['25', '21'] },
  { name: 'Kendrick Lamar', albums: ['DAMN.', 'To Pimp a Butterfly'] },
  { name: 'Eminem', albums: ['The Marshall Mathers LP', 'The Eminem Show'] },
  { name: 'Sia', albums: ['1000 Forms of Fear', 'This Is Acting'] },
  { name: 'John Mayer', albums: ['Continuum', 'Room for Squares'] },
  { name: 'Tove Lo', albums: ['Sunshine Kitty', 'Queen of the Clouds'] },
  { name: 'Charlie Puth', albums: ['Voicenotes', 'Nine Track Mind'] },
  { name: 'Miley Cyrus', albums: ['Plastic Hearts', 'Bangerz'] },
  { name: 'Zayn Malik', albums: ['Mind of Mine', 'Nobody Is Listening'] },
  { name: 'J. Cole', albums: ['Forest Hills Drive', '4 Your Eyez Only'] },
  { name: 'Twenty One Pilots', albums: ['Blurryface', 'Trench'] },
  { name: 'Florence and the Machine', albums: ['Lungs', 'Ceremonials'] },
  { name: 'Lorde', albums: ['Melodrama', 'Pure Heroine'] },
  { name: 'Hozier', albums: ['Hozier', 'Wasteland, Baby!'] },
  { name: 'Portugal. The Man', albums: ['Woodstock', 'Evil Friends'] },
  { name: 'Kanye West', albums: ['My Beautiful Dark Twisted Fantasy', 'Yeezus'] },
  { name: 'Lil Uzi Vert', albums: ['Eternal Atake', 'Luv Is Rage 2'] },
  { name: 'Tame Impala', albums: ['The Slow Rush', 'Currents'] },
  { name: 'Sabrina Carpenter', albums: ['Singular: Act I', 'Evolution'] },
  { name: 'Sam Smith', albums: ['In the Lonely Hour', 'The Thrill of It All'] }
]

type AlbumesType = {
  name: string
  albums: string[]
}

const Albumes = (): JSX.Element => {
  const [query, setQuery] = useState('A')

  function handleLetterClick(letter: string): void {
    setQuery(letter)
  }

  const albumesFiltrados = albumes
    .map((artista) => {
      const filteredAlbums = artista.albums.filter((album) => album.indexOf(query) === 0)

      if (filteredAlbums.length > 0) {
        return { name: artista.name, albums: filteredAlbums }
      }

      return undefined
    })
    .filter(Boolean) as AlbumesType[]

  return (
    <div className="p-5 flex flex-col">
      <TypographyH3 className="mb-4">Artistas</TypographyH3>
      <div>
        <Table>
          <TableCaption>Albumes con la letra `{query}`</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Album</TableHead>
              <TableHead>Artista</TableHead>
              <TableHead className="text-right"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {albumesFiltrados.map((artist) =>
              artist.albums.map((album) => (
                <TableRow key={album}>
                  <TableCell className="font-medium">{album}</TableCell>
                  <TableCell>{artist.name}</TableCell>
                  <TableCell className="text-right flex justify-end">
                    <ChevronRight size={18} />
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
      <AlphabetCarousel onClick={handleLetterClick} />
    </div>
  )
}

export default Albumes

function AlphabetCarousel({ onClick }: { onClick: (letter: string) => void }): JSX.Element {
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
