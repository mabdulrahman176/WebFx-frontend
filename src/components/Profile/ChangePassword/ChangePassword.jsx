import React, { useState } from 'react';
import { GoArrowLeft } from 'react-icons/go';

const ChangePassword = () => {
  const [activeTab, setActiveTab] = useState('login');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const goBack = () => {
    console.log('go back');
    window.history.back();
  };

  return (
    <div className="min-h-screen">
      <header className="flex bg-blue-500 p-4 shadow-md">
        <button onClick={goBack} className="text-xl font-bold text-white">
          <GoArrowLeft />
        </button>
        <div className="border-r h-6 mx-4"></div>
        <span className="text-xl text-white font-bold">Company</span>
      </header>

      <div className="mb-4 mx-auto flex space-x-4 border-gray-200 p-4">
        <button
          onClick={() => handleTabClick('login')}
          className={`py-2 px-4 w-1/2  rounded-md ${activeTab === 'login' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-700'}`}
        >
          Login Password
        </button>
        <button
          onClick={() => handleTabClick('withdrawal')}
          className={`py-2 px-4 w-1/2 rounded-md ${activeTab === 'withdrawal' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-700'}`}
        >
          Withdrawal Password
        </button>
      </div>

      {activeTab === 'login' && (
        <div className="space-y-4 p-4">
          <input
            type="password"
            placeholder="Old password"
            className="w-full p-2 border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="New password"
            className="w-full p-2 border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Confirm password"
            className="w-full p-2 border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            className='w-full p-2 text-white bg-blue-500 rounded-md hover:bg-blue-600'
          >
            Confirm
          </button>
        </div>
      )}

      {activeTab === 'withdrawal' && (
        <div className="space-y-4 p-4">
          <input
            type="password"
            placeholder="Old withdrawal password"
            className="w-full p-2 border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="New withdrawal password"
            className="w-full p-2 border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Confirm withdrawal password"
            className="w-full p-2 border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            className='w-full p-2 text-white bg-blue-500 rounded-md hover:bg-blue-600'
          >
            Confirm
          </button>
        </div>
      )}
    </div>
  );
};

export default ChangePassword;
