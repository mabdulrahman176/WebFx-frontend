import React from 'react'
import Home from './../image/tab_home.png'
import start from './../image/tab_start.png'
// import record from './../image/tab_records.png'
import profile from './../image/tab_profile.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <div className='bg-[#141414] w-full h-20 fixed bottom-0 left-0'>
         <div className=' w-[full] mx-48 '>
        <div className='flex justify-between  mt-2  '>
            <Link to='/home' className='focus'> 
            <div className='w-32'>
               <img className='w-10 h-10' src={Home} alt="" />
                 <h3 className='text-white'>Home</h3>
             </div>
            </Link>
    
            <Link to='/starting'> 
            <div className='w-32 '>
               <img className='w-10 h-10' src={start} alt="" />
                <h3 className='text-white'> Start</h3>
             </div>
            </Link>
            {/* <Link to='/record'> 
            <div className='w-32 '>
               <img className='w-10 h-10' src={record} alt="" />
                <h3 className='text-white'>Record</h3>
             </div>
            </Link> */}
            <Link to='/profile'> 
            <div className='w-32 '>
               <img className='w-10 h-10' src={profile} alt="" />
                <h3 className='text-white'>Profile</h3>
             </div>
            </Link>
        </div>
        </div>
      </div>
    </>
  )
}

export default Footer