import React from 'react'
import ReactDOM from 'react-dom/client'
import '@/assets/index.css'
import App from './App'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './pages/error-page'
import Home from './pages/home'
import Albumes from './pages/albumes'
import Artistas from './pages/Artistas/artistas'

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: '/artistas', element: <Artistas /> },
      { path: '/albumes', element: <Albumes /> }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
