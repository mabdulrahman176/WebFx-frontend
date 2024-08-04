import React from 'react'
import { GoArrowLeft } from 'react-icons/go';

const Team = () => {
    const goBack = () => {
        console.log('go back');
        window.history.back();
      };
  return (
    <div className="min-h-screen bg-[#F3F9FF]">
      <header className="flex bg-[#207de9] p-4 shadow-md">
        <button onClick={goBack} className="text-xl font-bold">
          <GoArrowLeft className='text-white'/>
        </button>
       <div className='border-r-[1px] ml-5'> </div>
        <span className="text-xl text-white font-bold ml-5">Team</span>
      </header>
    </div>
  )
}

export default Team
