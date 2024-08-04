import React from 'react'
// import Bronze from './Bronze'
import Price from './Price'
import Nav from './../Nav/Nav';
import Footer from './../Footer/Footer';

const Starting = () => {
  return (
    <>
    <Nav/>
    <Footer/>
    {/* main section start here */}
   <div className='bg-cover bg-center h-auto bg-white'>
    <div className='p-2.5 text-[#207de9] font-italianno text-5xl font-bold'>Boost Mission</div>
    {/* video div start here */}
    <div className='flex justify-center'>
    <video className='h-[240px]' loop autoPlay muted>
        <source src={`${process.env.PUBLIC_URL}/images/bot.mp4`} type="video/mp4" />
      </video>
    </div>
    {/* video div end here */}
    {/* button div start here */}
  <div className='flex justify-center mx-7 mt-10 mb-5  text-white text-xl'>
  <button className='w-full bg-[#207de9]  rounded-lg py-2  '>Start Now(0/40)</button>
  </div>
  {/* button div end here */}
  {/* component div start here */}
  {/* <div className='mx-4'>
  <Bronze  value={0.8 } />
  </div>  */}
 {/* component div end here */}
 <div className=' h-72 mt-3 '>
  <Price/>
 </div>
   </div>
    </>
  )
}

export default Starting
