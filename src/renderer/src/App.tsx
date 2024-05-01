import { Outlet } from 'react-router-dom'
import Header from './components/header'
import { Sidebar } from './components/sidebar'
import { ThemeProvider } from './store/theme-provider'
import MediaPlayer from './components/media-player'

export default function App(): JSX.Element {
  return (
    <ThemeProvider>
      <div className="h-full grid grid-cols-[0.3fr_1.7fr] grid-rows-[0.2fr_2.4fr_0.4fr] relative">
        <Header className="[grid-area:1_/_1_/_2_/_3]" />
        <Sidebar className="border-r h-full" />
        <Outlet />
        <MediaPlayer className="[grid-area:3_/_1_/_4_/_3] border-t" />
      </div>
    </ThemeProvider>
  )
}
