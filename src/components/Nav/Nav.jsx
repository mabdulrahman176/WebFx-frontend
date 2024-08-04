import React from 'react'
import logo from './../image/webfx-logo.jpg'
import msg from './../image/msg_ling.png'
import { Link } from 'react-router-dom'
const Nav = () => {
  return (
    <div className='h-20 w-full  z-50 flex justify-between items-center px-4 md:px-6 lg:px-10 shadow-custom sticky top-0' >
      <div className='w-24 md:w-36'>
        <img src={logo} alt="Logo" />
      </div>
      <div className='flex items-center gap-2'>
       <Link to='/notifications'> <img className='w-6 md:w-7' src={msg} alt="Message Icon" /></Link>
        <div>
          <h1 className='h-6 w-6 bg-white rounded-full flex items-center justify-center text-xs md:text-sm'>
            0
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Nav