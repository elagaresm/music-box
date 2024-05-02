import { Crown, Ellipsis } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

type SongDropDownMenuType = {
  addToQueue: () => void
  addToPremiumQueue: () => void
}

export function SongDropDownMenu({
  addToQueue,
  addToPremiumQueue
}: SongDropDownMenuType): JSX.Element {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Ellipsis className="ml-auto opacity-0 duration-200 group-hover:opacity-100" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Añadir a cola</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-primary hover:!text-primary">
          <Crown className="mr-2 h-4 w-4" />
          <span onClick={addToPremiumQueue}>Premium</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={addToQueue}>Normal</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
