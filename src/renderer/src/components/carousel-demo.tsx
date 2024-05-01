import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const artists = [
  {
    name: "Drake",
    cover:
      "https://arc-anglerfish-tgam-prod-tgam.s3.amazonaws.com/public/3YV2PTJAVFGCVJK5IC6RJYY6EA",
  },
  {
    name: "Frank",
    cover:
      "https://miro.medium.com/v2/resize:fit:550/1*lfE1NRGhG2uwkAcRNGTq4g@2x.jpeg",
  },
  {
    name: "Drake",
    cover:
      "https://img.buzzfeed.com/buzzfeed-static/complex/images/rrgyzeu7ucbf5styxkuw/drake-21-savage-her-loss-album-cver.jpg?output-format=jpg&output-quality=auto",
  },
  {
    name: "SZA",
    cover:
      "https://thefader-res.cloudinary.com/private_images/w_640,c_limit,f_auto,q_auto:eco/18645798_1468838703172906_5958142906920337408_n_tawr4r/sza-shares-ictrli-album-art.jpg",
  },
  {
    name: "21 Savage",
    cover:
      "https://upload.wikimedia.org/wikipedia/en/1/12/21_Savage_-_Issa_Album.png",
  },
];

export function CardCarousel() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="max-w-[80%] mx-auto mt-5"
    >
      <CarouselContent className="-ml-6">
        {artists.map((artist, index) => (
          <CarouselItem key={index} className="basis-1/2">
            <div className="px-2">
              <Card>
                <CardContent className="overflow-hidden rounded flex aspect-square items-center justify-center p-0">
                  <img src={artist.cover} />
                </CardContent>
                <CardFooter className="border-t flex justify-center align-center py-1">
                  {artist.name}
                </CardFooter>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="" />
      <CarouselNext />
    </Carousel>
  );
}
