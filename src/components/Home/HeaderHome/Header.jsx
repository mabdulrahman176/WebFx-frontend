import React from 'react'
import { GoArrowLeft } from "react-icons/go";
const Header = (props) => {
    const goBack = () => {
        console.log('go back');
        window.history.back();
      };
  return (
    <div>
            <header className="flex  sticky top-0 bg-blue-500 p-7 shadow-md">
        <button onClick={goBack} className="text-2xl font-bold text-white">
          <GoArrowLeft />
        </button>
        <div className="border-r h-6 mx-4"></div>
        <span className="text-xl text-white font-bold">{props.name}</span>
      </header>
    </div>
  )
}

export default Header
