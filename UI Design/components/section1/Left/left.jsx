import React from 'react'
import Text from './text.jsx'
import Button from './button.jsx'

const Left = () => {
  return (
    <div className=' flex w-full h-full flex-col items-start p-6 md:p-18'>
      <Text />
      <Button />
    </div>
  )
}

export default Left
