import { Outlet, useLocation } from 'react-router-dom'
import Header from './components/header'
import { Sidebar } from './components/sidebar'
import { ThemeProvider } from './store/theme-provider'
import MediaPlayer from './components/media-player'

export default function App(): JSX.Element {
  const location = useLocation()

  console.log(location.pathname)

  return (
    <ThemeProvider>
      <div className="relative grid h-full grid-cols-[0.3fr_1.7fr] grid-rows-[0.2fr_2.4fr_0.4fr]">
        <Header className="[grid-area:1_/_1_/_2_/_3]" />
        <Sidebar className="h-full border-r" />
        <Outlet />
        <MediaPlayer className="border-t [grid-area:3_/_1_/_4_/_3]" />
      </div>
    </ThemeProvider>
  )
}
