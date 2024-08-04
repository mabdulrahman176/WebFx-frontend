import React, { useState } from 'react'
import { GoArrowLeft } from 'react-icons/go'

const Transactions = () => {
    const [activeTab, setActiveTab] = useState("login");

    const handleTabClick = (tab) => {
      setActiveTab(tab);
    };
    const goBack = () => {
        console.log('go back');
        window.history.back();
      };
  return (
    <div  className="min-h-screen">
      <header className="flex bg-blue-500 p-4 shadow-md">
        <button onClick={goBack} className="text-xl font-bold text-white">
          <GoArrowLeft />
        </button>
        <div className="border-r h-6 mx-4"></div>
        <span className="text-xl text-white font-bold">Account Details</span>
      </header>
      <div className="mb-4 mx-auto flex space-x-4 border-gray-200 p-4">
        <button
          onClick={() => handleTabClick("login")}
          className={`py-2 px-4 w-1/2  rounded-md ${
            activeTab === "login"
              ? "border-b-2 border-blue-500 text-blue-500"
              : "text-gray-700"
          }`}
        >
          Profile
        </button>
        <button
          onClick={() => handleTabClick("withdrawal")}
          className={`py-2 px-4 w-1/2 rounded-md ${
            activeTab === "withdrawal"
              ? "border-b-2 border-blue-500 text-blue-500"
              : "text-gray-700"
          }`}
        >
          Deposit
        </button>
      </div>
    </div>
  )
}

export default Transactions
