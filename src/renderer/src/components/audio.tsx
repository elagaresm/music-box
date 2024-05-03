import { AudioProviderState, useAudio } from '@/store/audioContext'

export default function Audio(): JSX.Element {
  const { audioRef, currentSong } = useAudio<AudioProviderState>()

  console.log(currentSong)

  return (
    <>
      <audio ref={audioRef} autoPlay />
    </>
  )
}
