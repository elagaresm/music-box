import { TypographyH2, TypographyMuted } from '@/components/typography'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'

const artists = [
  {
    name: 'Drake',
    cover:
      'https://arc-anglerfish-tgam-prod-tgam.s3.amazonaws.com/public/3YV2PTJAVFGCVJK5IC6RJYY6EA'
  },
  {
    name: 'Frank Ocean',
    cover: 'https://miro.medium.com/v2/resize:fit:550/1*lfE1NRGhG2uwkAcRNGTq4g@2x.jpeg'
  },
  {
    name: 'Drake',
    cover:
      'https://img.buzzfeed.com/buzzfeed-static/complex/images/rrgyzeu7ucbf5styxkuw/drake-21-savage-her-loss-album-cver.jpg?output-format=jpg&output-quality=auto'
  },
  {
    name: 'SZA',
    cover:
      'https://thefader-res.cloudinary.com/private_images/w_640,c_limit,f_auto,q_auto:eco/18645798_1468838703172906_5958142906920337408_n_tawr4r/sza-shares-ictrli-album-art.jpg'
  },
  {
    name: '21 Savage',
    cover: 'https://upload.wikimedia.org/wikipedia/en/1/12/21_Savage_-_Issa_Album.png'
  }
]

const songs = [
  {
    name: 'Hotline Bling',
    artist: 'Drake',
    cover:
      'https://arc-anglerfish-tgam-prod-tgam.s3.amazonaws.com/public/3YV2PTJAVFGCVJK5IC6RJYY6EA'
  },
  {
    name: "Thinking 'bout you",
    artist: 'Frank Ocean',
    cover: 'https://miro.medium.com/v2/resize:fit:550/1*lfE1NRGhG2uwkAcRNGTq4g@2x.jpeg'
  },
  {
    name: "God's plan",
    artist: 'Drake',
    cover:
      'https://img.buzzfeed.com/buzzfeed-static/complex/images/rrgyzeu7ucbf5styxkuw/drake-21-savage-her-loss-album-cver.jpg?output-format=jpg&output-quality=auto'
  },
  {
    name: 'Shirt',
    artist: 'SZA',
    cover:
      'https://thefader-res.cloudinary.com/private_images/w_640,c_limit,f_auto,q_auto:eco/18645798_1468838703172906_5958142906920337408_n_tawr4r/sza-shares-ictrli-album-art.jpg'
  },
  {
    name: 'A lot',
    artist: '21 Savage',
    cover: 'https://upload.wikimedia.org/wikipedia/en/1/12/21_Savage_-_Issa_Album.png'
  }
]

export default function Home(): JSX.Element {
  return (
    <div className="h-full w-full px-4 py-6 overflow-hidden">
      <div>
        <TypographyH2>
          Populares
          <TypographyMuted className="font-normal my-1">Artistas del momento</TypographyMuted>
        </TypographyH2>
      </div>

      <Carousel
        opts={{
          align: 'start'
        }}
        className="max-w-[80%] mx-auto mt-5"
      >
        <CarouselContent className="-ml-6">
          {artists.map((artist, index) => (
            <CarouselItem key={index} className="basis-1/2">
              <div className="px-2 group">
                <Card className="relative overflow-hidden rounded-full">
                  <CardContent className="overflow-hidden flex-col aspect-square items-center justify-center p-0 z-10">
                    <img
                      src={artist.cover}
                      className="object-cover group-hover:scale-105 transition-all duration-500"
                    />
                    {/* <div className="z-100 dark:bg-black bg-white absolute bottom-0 left-0 right-0 h-[20%] text-center py-2">
                      {artist.name}
                    </div> */}
                  </CardContent>
                </Card>
              </div>
              <div className="flex justify-center mt-2">{artist.name}</div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="" />
        <CarouselNext />
      </Carousel>

      <div className="mt-12">
        <TypographyH2>
          Canciones
          <TypographyMuted className="font-normal my-1">
            Canciones escuchadas recientemente
          </TypographyMuted>
        </TypographyH2>
      </div>

      <Carousel
        opts={{
          align: 'start'
        }}
        className="max-w-[80%] mx-auto mt-5"
      >
        <CarouselContent className="-ml-6">
          {songs.map((song, index) => (
            <CarouselItem key={index} className="basis-1/3">
              <div className="px-2 group">
                <Card>
                  <CardContent className="overflow-hidden rounded flex aspect-square items-center justify-center p-0">
                    <img className="group-hover:scale-105 duration-500" src={song.cover} />
                  </CardContent>
                  <CardFooter className="border-t py-1 px-2">
                    <div
                      className={
                        'w-full whitespace-nowrap mx-auto overflow-hidden text-center flex-col justify-center align-center'
                      }
                    >
                      <p className={`w-full ${song.name.length > 13 && 'moving-text'}`}>
                        {song.name}
                      </p>
                      <p
                        className={`text-sm text-muted-foreground ${song.artist.length > 15 && 'moving-text'}`}
                      >
                        {song.artist}
                      </p>
                    </div>
                  </CardFooter>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}
