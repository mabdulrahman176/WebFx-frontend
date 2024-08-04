import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { MdOutlinePhoneInTalk } from 'react-icons/md';
import logo from "./../image/webfx-logo.jpg";
import ads from "./../image/ads.jpg";
import google from "./../image/google.jpg";
import Shopfiy from "./../image/Shopify.jpg";
import Meta from "./../image/Meta.jpg";
import { Link } from 'react-router-dom';
// import { } from 'react-router-dom';

const Register = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [withdrawalPasswordVisible, setWithdrawalPasswordVisible] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false); // State to toggle between user and admin

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleWithdrawalPasswordVisibility = () => {
    setWithdrawalPasswordVisible(!withdrawalPasswordVisible);
  };

  return (
    <>
      <div className="page-index-bg flex flex-col items-center justify-center min-h-screen">
        <div className="flex justify-end items-center w-full mt-8 mr-5">
          <button className="ml-5 text-blue-500">
            Language
          </button>
        </div>
        <div className="my-text-center w-full mb-3 pt-24">
          <img className="big-logo mx-auto" src={logo} alt="Logo" />
        </div>
        <div className="my-text-center mb-4">
          <button className="flex text-[#207DE9] hover:underline">
            <MdOutlinePhoneInTalk className="mt-1 mr-2" />
            Contact Us
          </button>
        </div>

        <div className="w-full max-w-md mx-auto bg-white shadow-lg rounded p-8">
          <div className="text-center">
            <button 
              onClick={() => setIsAdmin(false)}
              className={`px-4 py-2 ${!isAdmin ? 'bg-blue-500 text-white' : 'bg-gray-200 text-blue-500'} rounded`}
            >
              User Register
            </button>
            <button 
              onClick={() => setIsAdmin(true)}
              className={`px-4 py-2 ${isAdmin ? 'bg-blue-500 text-white' : 'bg-gray-200 text-blue-500'} rounded`}
            >
              Admin Register
            </button>
          </div>

          {isAdmin ? (
            <div>
              <div className="text-4xl text-center font-bold mb-4 text-[#207DE9]">Admin Register</div>
              {/* Admin Registration Form */}
              <div className="pb-4">
                <label htmlFor="AdminName" className="block mb-2">Admin Name</label>
                <input
                  type="text"
                  name="admin_name"
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Admin Name"
                />
              </div>
              <div className="pb-4">
                <label htmlFor="AdminEmail" className="block mb-2">Admin Email</label>
                <input
                  type="email"
                  name="admin_email"
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Admin Email"
                />
              </div>
              {/* Add more admin-specific fields as necessary */}
            </div>
          ) : (
            <div>
              <div className="text-4xl text-center font-bold mb-4 text-[#207DE9]">User Register</div>
              {/* User Registration Form */}
              <div className="pb-4">
                <label htmlFor="UserName" className="block mb-2">UserName</label>
                <input
                  type="text"
                  name="reg_nickname"
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Username"
                />
              </div>
              <div className="pb-4">
                <label htmlFor="Phone Number" className="block mb-2">Phone Number</label>
                <input
                  type="text"
                  name="reg_phone_number"
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Phone number"
                />
              </div>
              <div className="pb-4 relative">
                <label htmlFor="Password" className="block mb-2">Password</label>
                <input
                  type={passwordVisible ? 'text' : 'password'}
                  name="reg_password"
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Password"
                />
                <div
                  className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {passwordVisible ? (
                    <AiOutlineEye className='mt-4' />
                  ) : (
                    <AiOutlineEyeInvisible className='mt-4' />
                  )}
                </div>
              </div>
              <div className="pb-4 relative">
                <label htmlFor="Withdrawal Password" className="block mb-2">Withdrawal Password</label>
                <input
                  type={withdrawalPasswordVisible ? 'text' : 'password'}
                  name="reg_withdrawl_password"
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Withdrawal Password"
                />
                <div
                  className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                  onClick={toggleWithdrawalPasswordVisibility}
                >
                  {withdrawalPasswordVisible ? (
                    <AiOutlineEye className='mt-4' />
                  ) : (
                    <AiOutlineEyeInvisible className='mt-4' />
                  )}
                </div>
              </div>
              <div className="pb-4">
                <label htmlFor="Invitation Code" className="block mb-2">Invitation Code</label>
                <input
                  type="text"
                  name="reg_invite_code"
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Invitation Code"
                />
              </div>
              <div className="pb-4">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <a href="/" className="">Register Agreement</a>
                </label>
              </div>
            </div>
          )}
          <button className="w-full bg-[#207DE9] text-white p-2 rounded mb-5">
            {isAdmin ? 'Register Admin' : 'Register User'}
          </button>
          <div>
          <Link to='/login'className='w-full text-white text-center bg-[#207DE9] px-[143px] py-[10px] rounded'   >
            Back To Login
          </Link>
          </div>
        </div>

        <div className="mt-5 ml-11">
          <a
            href="/index/rec_customer/signup_notice"
            className="text-blue-500 hover:underline"
          >
            Register Agreement
          </a>
        </div>
        <div className="flex items-center justify-center gap-16 mt-8">
          <img className="ml-5 shadow-lg h-28 cursor-pointer" src={google} alt="/" />
          <img className="h-44 cursor-pointer" src={ads} alt="/" />
          <img className="cursor-pointer h-44" src={Shopfiy} alt="/" />
          <img className="cursor-pointer h-44" src={Meta} alt="/" />
        </div>
      </div>
    </>
  );
}

export default Register;
