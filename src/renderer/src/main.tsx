import React from 'react'
import ReactDOM from 'react-dom/client'
import '@/assets/index.css'
import App from './App'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './pages/error-page'
import Home from './pages/home'
import Albums from './pages/album/albums'
import Artists, { loader as artistsLoader } from './pages/artist/artists'
import Artist, { loader as artistLoader } from './pages/artist/artist'
import Album, { loader as albumLoader } from './pages/album/album'

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: '/artists', element: <Artists />, loader: artistsLoader },
      { path: '/artist/:artistName', element: <Artist />, loader: artistLoader },
      { path: '/albums', element: <Albums />, loader: artistsLoader },
      { path: '/artist/:artistName/album/:albumName', element: <Album />, loader: albumLoader }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
