const Button = ({ children = 'Show More', onClick }) => {
  return (
    <button
      type='button'
      onClick={onClick}
      className='mt-10 h-14 w-44 cursor-pointer rounded-4xl bg-green-800 text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#346031] hover:shadow-lg active:scale-95'
    >
      {children}
    </button>
  )
}

export default Button