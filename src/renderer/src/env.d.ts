/// <reference types="vite/client" />

declare global {
  interface Window {
    api: {
      getArtistAll: () => Promise<Artist[] | null>
      getArtistByName: (artistName: string) => Promise<Artist | null>
      getAlbumByName: (
        artistName: string,
        albumName: string,
        opts = { songs: boolean }
      ) => Promise<Album | null>
      getSongDuration: (songPath: string) => Promise<number | null>
      getParentPath: (filePath: string) => string
      getDataFromFile: (filePath: string) => Promise<Buffer>
    }
  }
}

export { Album, Artist, Song }
