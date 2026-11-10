const Icons = ({ label, icon: Icon }) => {
  return (
    <div className='group flex min-w-20 flex-1 cursor-pointer flex-col items-center gap-1'>
  <div className='flex h-25 w-full items-center justify-center rounded-3xl border-2 bg-[#eddcd0] transition duration-300 group-hover:-translate-y-1 group-hover:bg-[#dbc1ae] md:h-30'>
    <Icon className='size-6 transition-colors duration-300 group-hover:text-white md:size-10' />
  </div>
  <h3 className='whitespace-nowrap text-sm md:text-base'>{label}</h3>
</div>
  )
}

export default Icons