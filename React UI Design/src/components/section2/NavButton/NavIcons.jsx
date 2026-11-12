import { Leaf, PlantPot, TreePalm, Sun, PawPrint  } from 'lucide-react'
import Icons from './Icons'

const items = [
    { label: 'All Plants', icon: Leaf },
  { label: 'Indoor', icon: PlantPot },
  { label: 'Outdoor', icon: TreePalm },
  { label: 'Low Light', icon: Sun },
  { label: 'Pet ', icon: PawPrint },
]

const NavIcons = () => {
  return (
    <div className='flex w-full min-w-0 gap-4 overflow-x-auto pt-2 [scrollbar-width: none] [&::-webkit-scrollbar]:hidden'>
      {items.map(({ label, icon }) => (
        <Icons key={label} label={label} icon={icon} />
      ))}
    </div>
  )
}

export default NavIcons

