import { useState } from 'react'
import { Leaf, Menu, X, ShoppingCart, Search } from 'lucide-react'

const links = ['Home', 'Plants', 'Care Guide', 'About']

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <nav className='rounded-4xl border border-green-300 bg-[#e8ddd6] px-5 py-3 md:px-8'>
      <div className="flex items-center justify-between">

        <a href='/' className='flex items-center gap-2 text-xl font-semibold text-green-900'>
          <Leaf className='size-6' />
          Greenery
        </a>

        <ul className='hidden items-center gap-8 md:flex'>
          {links.map((link) => (
            <li key={link}>
              <a
                href='#'
                className='text-green-900 transition-colors hover:text-green-600'
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <div className='flex items-center gap-3 text-green-900'>
          <button type='button' className='cursor-pointer transition hover:text-green-600'>
            <Search className="size-5" />
          </button>
          <button type='button' className='cursor-pointer transition hover:text-green-600'>
            <ShoppingCart className='size-5' />
          </button>

          <button
            type='button'
            onClick={() => setOpen(!open)}
            className='cursor-pointer md:hidden'
          >
            {open ? <X className='size-6' /> : <Menu className='size-6' />}
          </button>
        </div>
      </div>

      {open && (
        <ul className='mt-4 flex flex-col gap-3 border-t border-green-300 pt-4 md:hidden'>
          {links.map((link) => (
            <li key={link}>
              <a href='#' className='text-green-900 hover:text-green-600'>
                {link}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}

export default Navbar