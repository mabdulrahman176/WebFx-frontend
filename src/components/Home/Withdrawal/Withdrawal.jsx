import React from "react";
import Header from "../HeaderHome/Header";
const Withdrawal = () => {


  return (
    <div className="min-h-screen bg-[#F3F9FF]">
    <Header name="WithDrawal"/>
      <main className="p-4">
        <div className=" flex justify-center space-x-4">
          <button className="px-4 py-2 text-[#207de9]">Crypto</button>
         
        </div>
        <div className="border-b-2 border-[#207de9]"></div>
        <div className="mt-4  text-xl text-gray-600">
          *You will receive your withdrawal within half an hour
        </div>
        <div className="mt-2 flex justify-end">
          <button
            // onClick={() =>
            //   (window.location.href = "/index/rec_trade/withd_list.html")
            // }
            className=""
          >
            History <i className="el-icon-arrow-right"></i>
          </button>
        </div>
        <div className="mt-4 bg-white p-4 shadow-md ">
          <div>Current Balance</div>
          <div className="text-2xl text-[#207de9]">10 USDT</div>
        </div>
        <form className="mt-4 p-4 shadow-md">
          <div className="flex items-center">
            <input
              type="number"
              placeholder="Eg. 100"
              className="flex-1 p-2 border border-gray-300 rounded"
            />
            <button
              type="button"
              className="ml-2 px-4 py-2 bg-[#207de9] text-white rounded"
            >
              All
            </button>
          </div>
          <div>
          </div>
          <div className="mt-4">
            <input
              type="password"
              placeholder="Withdrawal Password"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mt-6 text-center">
            <button
              type="button"
           
              className="px-4 py-2 w-full bg-[#207de9] text-white rounded"
            >
              Confirm
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default Withdrawal;
