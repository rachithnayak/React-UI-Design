import React from 'react'
import Section1 from './components/section1/section1'
import Section2 from './components/section2/section2'
import Section3 from './components/section3/section3'
import Navbar from './components/NavBar'

const App = () => {
  return (
    <div className='bg-[#abc2b0] p-5 gap-5 flex flex-col'>
      <Navbar />
      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  )
}

export default App
