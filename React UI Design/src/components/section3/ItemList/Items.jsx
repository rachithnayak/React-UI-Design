import { Heart } from 'lucide-react'

const Items = ({ elem, img, price }) => {
  return (
    <div className='group flex min-w-44 flex-1 cursor-pointer flex-col gap-2'>
      <div className='w-full overflow-hidden rounded-3xl bg-[#eddcd0] transition-shadow duration-300 group-hover:shadow-lg'>
        <img
          src={img}
          alt={elem}
          className='h-full w-full object-contain p-4 transition-transform duration-300 group-hover:scale-110'
        />
      </div>

      <div className='flex items-start justify-between px-1'>
        <div>
          <h3 className='font-medium transition-colors group-hover:text-green-800'>{elem}</h3>
          <p className='text-sm text-gray-600'>{price}</p>
        </div>
        <Heart className='size-5 transition hover:scale-125 hover:fill-red-500 hover:text-red-500' />
      </div>
    </div>
  )
}

export default Items