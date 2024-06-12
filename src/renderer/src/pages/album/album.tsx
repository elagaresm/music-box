import { TypographyH3, TypographyMuted } from '@/components/typography'
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell
} from '@/components/ui/table'
import { Album as AlbumType, Song as SongType } from '@/env'
import { getCoverBlob, secondsToMinutes } from '@/lib/utils'
import { Clock } from 'lucide-react'
import { useLoaderData } from 'react-router-dom'
import { SongDropDownMenu } from './song-dropdown-menu'
import { useNormalQueueStore } from '@/store/normal-queue-store'
import { usePremiumQueueStore } from '@/store/premium-queue-store'

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

  console.log('Current album:', album)

  // console.log('song test:', addSongToQueueWithAlbumInfo(album.songs[0]))

  // function addSongToQueueWithAlbumInfo(song) {
  //   const obj = { ...album }
  //   delete obj.songs
  //   obj['song'] = song
  //   return obj
  // }

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
  ) //
}

export default Album

function Songs({ songs }: { songs: SongType[] }): JSX.Element {
  const addToNormalQueue = useNormalQueueStore((state) => state.addToNormalQueue)
  const addToPremiumQueue = usePremiumQueueStore((state) => state.addToPremiumQueue)

  return (
    <>
      {songs.map((song, index) => {
        return (
          <TableRow key={index} className="group">
            <TableCell className="font-medium">{song.name}</TableCell>
            <TableCell>{song.artistName}</TableCell>
            <TableCell onClick={() => console.log(song)} className="text-right">
              {secondsToMinutes(song.duration)}
            </TableCell>
            <TableCell>
              <SongDropDownMenu
                addToQueue={() => addToNormalQueue(song)}
                addToPremiumQueue={() => addToPremiumQueue(song)}
              />
            </TableCell>
          </TableRow>
        )
      })}
    </>
  )
}
