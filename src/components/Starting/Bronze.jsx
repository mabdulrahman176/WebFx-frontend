import React from 'react'
import m1 from './../image/m1.png'
const Bronze = (props) => {
  return (
  <div className='bg-white shadow-custom w-full h-16 rounded-xl flex items-center'>
      <div className='flex items-center m-2 text-xl'>
        <img className='h-11' src={m1} alt="VIP Bronze Icon" />
        <h1 className='text-[#207de9] m-3'>VIP 1 Bronze</h1>
      </div>
      <h1 className='text-[#207de9] ml-auto mr-4 text-xl'>{props.value}%</h1>
    </div>
  )
}

export default Bronze
