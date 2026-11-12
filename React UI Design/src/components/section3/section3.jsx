import { ArrowRight } from 'lucide-react'
import ItemList from './ItemList/ItemList'

const Section3 = () => {
  return (
    <div className='flex flex-col gap-4 overflow-hidden p-2'>
      <div className='flex items-center justify-between'>
        <h2 className='text-xl font-semibold text-green-900 md:text-2xl'>
          Best Sellers
        </h2>

        <button
          type='button'
          className='flex cursor-pointer items-center gap-1 text-sm text-green-900 transition hover:gap-2 md:text-base'
        >
          View All
          <ArrowRight className='size-4 md:size-5' />
        </button>
      </div>

      <ItemList />
    </div>
  )
}

export default Section3