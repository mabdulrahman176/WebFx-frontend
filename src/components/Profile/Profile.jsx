import React  from 'react'
import Nav from './../Nav/Nav';
import Footer from './../Footer/Footer';
import Pro from './../image/profile1.png'
import m from './../image/m1.png'
import ProfileEvent from './ProfileEvent'
const Profile = () => {
 
 
  return (
     <>
      <Nav/>
      <Footer/>
    <div className="bg-[white]  h-[850px] w-full ">
        <div>
       <h1 className='font-mono text-[#207de9] text-4xl p-5'>Profile</h1>

          <div className='bg-transparent backdrop-blur-sm w-[98%] h-60 mx-auto rounded-2xl shadow-custom'>
              <div className='flex  w-[98%] h-24 items-center  justify-between mx-auto' >
                 <div className='flex gap-x-4' >
                 <img className='w-16 h-20' src={Pro} alt="" />
                   <div className='text-black  font-mono text-xl pt-1'  >
                     <h3>Rey</h3>
                   <h3>invitation Code : <span className='font-bold'>  2Z856F</span></h3>
                   </div>
                 </div>
                  <div className='w-16 h-20'> <img src={m} alt="" /></div>
              </div>
              <div className=' w-[96%]  mx-auto ' >
            <h1 className='text-xl text-white'>Credit Score</h1>
              <div className='flex  space-x-1'> 
               <div className='w-[97%] h-1.5 rounded-xl bg-[#207de9] mt-2' >
               </div>
               <p className='mt-[-2px] text-[#207de9]'>100%</p>
              </div>
            </div>
               <div className='grid grid-cols-2 w-[100%]  h-20 items-center mx-auto' >
                    <div className='w-24 mx-auto' >
                      <h2>Total Amount</h2>
                       <h3 className='text-[#207de9] text-center'> 10 USDT</h3>
                    </div>
                    <div className='w-32 mx-auto'>
                    <h2>Total Commission</h2>
                    <h3 className='text-[#207de9] text-center'> 0 USDT</h3>
                    </div>
               </div>
          </div>
       </div>
       <ProfileEvent/>
       <div className="flex justify-center mx-7 mt-10 mb-5  text-white text-xl">
            <button className=" w-full px-4 py-2  bg-[#207de9] text-white rounded">
           Logout
            </button>
          </div>
    </div>

    </>
  )
}

export default Profile
