import { cn } from '@/lib/utils'
import { ModeToggle } from './dark-mode-toggle'
import { SearchDialog } from './search'
import { TypographyH3, TypographySmall } from './typography'
import { Button } from './ui/button'
import { AreaChart, Coins } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Header({ className }: React.HTMLAttributes<HTMLDivElement>): JSX.Element {
  return (
    <header
      className={cn('border-b w-full py-2 px-4 flex justify-between items-center', className)}
    >
      <Title />

      <div className="flex gap-3">
        <SearchDialog />
        <Icons />
      </div>
    </header>
  )
}

function Icons(): JSX.Element {
  return (
    <>
      <Button className="flex gap-2">
        <TypographySmall>88</TypographySmall>
        <Coins />
      </Button>
      <ModeToggle />
      <Button variant="ghost" size="icon">
        <AreaChart />
      </Button>
    </>
  )
}

function Title(): JSX.Element {
  return (
    <Link to="/">
      <TypographyH3 className="flex items-center gap-3 relative">
        Music Box
        <TypographySmall className="absolute right-0 top-[-1px] text-primary rounded">
          Pro
        </TypographySmall>
      </TypographyH3>
    </Link>
  )
}
