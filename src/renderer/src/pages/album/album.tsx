import { TypographyH3, TypographyMuted } from '@/components/typography'
import {
  Table,
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell
} from '@/components/ui/table'
import { Album as AlbumType, Song as SongType } from '@/env'
import { getCoverBlob, secondsToMinutes } from '@/lib/utils'
import { Clock, Ellipsis } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

export async function loader({ params }): Promise<AlbumType | null> {
  try {
    const album = await window.api.getAlbumByName(
      decodeURIComponent(params.albumName),
      decodeURIComponent(params.artistName),
      { songs: true }
    )
    return album
  } catch (error) {
    console.error('Could not load artist: ', error)
    throw new Error()
  }
}

const Album = (): JSX.Element => {
  const album = useLoaderData() as AlbumType

  console.log(album)

  return (
    <div className="p-4">
      <div className="mb-4 flex justify-center">
        <img className="w-60 rounded" src={getCoverBlob(album.cover)} />
      </div>
      <div className="mb-2">
        <TypographyH3>{album.name}</TypographyH3>
        <TypographyMuted>{album.artistName}</TypographyMuted>
      </div>

      <div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Título</TableHead>
              <TableHead>Artista</TableHead>
              <TableHead>
                <Clock size={18} className="ml-auto" />
              </TableHead>
              <TableHead className="w-8"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <Songs songs={album.songs} />
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default Album

type SongWithDuration = SongType & {
  duration: number
}

function Songs({ songs }: { songs: SongType[] }): JSX.Element {
  const [results, setResults] = useState<SongWithDuration | []>([])
  const songsCopy = [...songs]

  async function asyncGetDuration(song: SongType): Promise<SongWithDuration> {
    const result = await window.api.getSongDuration(song.path)
    song.duration = result
    return song
  }

  useEffect(() => {
    ;(async (): Promise<void> => {
      const promises = songsCopy.map(asyncGetDuration)

      const allResults = await Promise.all(promises)

      setResults(allResults as SongWithDuration)
    })()
  }, [songs])

  console.log(results)

  return (
    <>
      {results.map((song, index) => {
        return (
          <TableRow key={index} className="group">
            <TableCell className="font-medium">{song.name}</TableCell>
            <TableCell>{song.artistName}</TableCell>
            <TableCell className="text-right">{secondsToMinutes(song.duration)}</TableCell>
            <TableCell className="">
              <Ellipsis className="ml-auto opacity-0 duration-200 group-hover:opacity-100" />
            </TableCell>
          </TableRow>
        )
      })}
    </>
  )
}

function SongDropDownMenu(): JSX.Element {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Ellipsis className="ml-auto opacity-0 duration-200 group-hover:opacity-100" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuItem>Subscription</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
