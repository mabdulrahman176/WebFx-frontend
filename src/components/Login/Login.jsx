import React, { useState } from "react";
import logo from "../image/webfx-logo.png";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import ads from "./../image/ads.jpg";
import google from "./../image/google.jpg";
import Shopfiy from "./../image/Shopify.jpg";
import Meta from "./../image/Meta.jpg";
import { Link,  } from "react-router-dom";
const Login = () => {
  useState(false);
  const [loginPhoneNumber, setLoginPhoneNumber] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const toLanguage = () => {
    window.location.href = "/index/rec_customer/country";
  };

  const doLogin = () => {
    console.log("do_login...");
    if (checkLoginInput()) {
      console.log("Login Axios request here");
    }
  };

  const checkLoginInput = () => {
    if (loginPhoneNumber.trim() === "") {
      alert("Please input your username/Phone NO.");
      return false;
    } else if (loginPassword.trim() === "") {
      alert("Please enter the login password");
      return false;
    }
    return true;
  };

  return (
    <>
      <div className="index-page ">
        <div className="page-index-bg flex flex-col items-center justify-center min-h-screen">
          <div className="flex justify-end items-center w-full mt-8 mr-5">
            <button
              onClick={toLanguage}
              className="ml-5 text-blue-500 hover:underline"
            >
              Language
            </button>
          </div>
          <div className="my-text-center  w-full mb-3 pt-24">
            <img className="big-logo mx-auto " src={logo} alt="Logo" />
          </div>
          <div className="my-text-center mb-4">
            <button className="flex text-[#207DE9] hover:underline">
              <MdOutlinePhoneInTalk className="mt-1 mr-2 " />
              Contact Us
            </button>
          </div>
          <div className="text-center w-full lg:w-1/2 md:w-1/2 sm:w-2/3 p-8">
            <div className="bg-white rounded text-black mx-auto p-8 shadow-lg">
              <div className="text-4xl text-center font-bold mb-4 text-[#207DE9]">
                Login
              </div>

              <div className="pb-4">
                <label
                  htmlFor="login_phone_number"
                  className="block md:mr-[100px] lg:mr-[340px]  mb-2"
                >
                  UserName/Phone No
                </label>
                <input
                  type="text"
                  id="login_phone_number"
                  name="login_phone_number"
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Phone Number/User Name"
                  value={loginPhoneNumber}
                  onChange={(e) => setLoginPhoneNumber(e.target.value)}
                  autoComplete="new-password"
                />
              </div>

              <div className="pb-4">
                <label
                  htmlFor="login_phone_number"
                  className="block  md:mr-[200px] lg:mr-[425px]  mb-2"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="login_password"
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Password"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  autoComplete="new-password"
                />
              </div>
              <div className="flex justify-between pb-4">
                <button className="text-[#207DE9]">Forgot Password ?</button>
              </div>
              <Link to='/home'
                className="w-full bg-[#207DE9] text-white px-[143px] py-[10px] rounded mb-"
                onClick={doLogin}
              >
                Sign in
              </Link>
              <button className="text-[#207DE9] my-2">
                <span  className="text-black"> Not registered yet?</span>{" "}
                <Link to='/register'>Register Now</Link>
              </button>
            </div>
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
          <img
            className=" ml-5 shadow-lg h-28 cursor-pointer"src={google}alt="/"/>
          <img className="  h-44 cursor-pointer" src={ads} alt="/" />
          <img className="cursor-pointer h-44" src={Shopfiy} alt="/" />
          <img className="cursor-pointer h-44" src={Meta} alt="/" />
        </div>
      </div>
    </>
  );
};

export default Login;
