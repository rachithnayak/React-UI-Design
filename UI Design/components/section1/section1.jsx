import Right from './Right/right.jsx'
import Left from './Left/left.jsx'

const Section1 = () => {
  return (
    <div className='min-h-96 border border-green-300 bg-[#e8ddd6] overflow-hidden rounded-4xl flex justify-between'>
        <Left />
        <Right />
    </div>
  )
}

export default Section1
