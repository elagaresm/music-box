import { useLoaderData } from 'react-router-dom'
import { Artist as ArtistType, Album as AlbumType } from '@/env'
import { TypographyH2, TypographyH3 } from '@/components/typography'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import { Clock, Ellipsis } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from '@/components/ui/carousel'
import { getCoverBlob } from '@/lib/utils'
import { Separator } from '@/components/ui/separator'

export async function loader({ params }): Promise<ArtistType | null> {
  try {
    const artist = await window.api.getArtistByName(decodeURIComponent(params.artistName))
    return { artist }
  } catch (error) {
    console.error('Could not load artist: ', error)
    throw new Error()
  }
}

const Artist = (): JSX.Element => {
  const { artist } = useLoaderData() as { artist: ArtistType }
  return (
    <div>
      <TypographyH2 className="py-4 text-center">{artist.name}</TypographyH2>
      <div className="flex flex-col p-4">
        <div>
          <Table>
            <TableCaption>Popular</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Título</TableHead>
                <TableHead>Album</TableHead>
                <TableHead>
                  <Clock size={18} className="ml-auto" />
                </TableHead>
                <TableHead className="w-8"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {Array.from({ length: 5 }).map((_, index) => {
                return (
                  <TableRow key={index} className="group">
                    <TableCell className="font-medium">Titulo</TableCell>
                    <TableCell>Album</TableCell>
                    <TableCell className="text-right">3:45</TableCell>
                    <TableCell className="">
                      <Ellipsis className="ml-auto opacity-0 duration-200 group-hover:opacity-100" />
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </div>

        <Separator className="my-4" />

        <TypographyH3 className="text-center">Albumes</TypographyH3>
        <div className="mt-auto">
          <Carousel
            opts={{
              align: 'start'
            }}
            className="mx-auto mt-5 max-w-[80%]"
          >
            <CarouselContent>
              {artist.albums.map((album: AlbumType, index: number) => (
                <div key={index}>
                  <CarouselItem className="basis-1/2">
                    <div className="group px-2">
                      <Card className="overflow-hidden">
                        <CardContent className="flex aspect-square items-center justify-center rounded p-0">
                          <img
                            className="aspect-square w-48 duration-200 group-hover:scale-105"
                            src={getCoverBlob(album.cover)}
                          />
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                  <div className="py-2 text-center text-sm text-muted-foreground">{album.name}</div>
                </div>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div>
  )
}

export default Artist
