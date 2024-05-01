import { useLoaderData } from 'react-router-dom'

export async function loader({ params }): Promise<{ artista: string } | void> {
  try {
    const artista = decodeURIComponent(params.artista)
    console.log(artista)
    return { artista }
  } catch (error) {
    console.log('Error cargando el artista: ', error)
  }
}

const Artista = (): JSX.Element => {
  const { artista } = useLoaderData() as { artista: string }
  return <div>{artista}</div>
}

export default Artista
