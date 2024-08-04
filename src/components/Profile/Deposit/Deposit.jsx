import React, { useState } from 'react';
import { RxCross2 } from 'react-icons/rx';
import { BsFillExclamationCircleFill } from 'react-icons/bs';
import { useNavigate} from 'react-router-dom';

const Deposit = ({ handleCloseDeposit }) => {
  const [showDepositCard, setShowDepositCard] = useState(true);

  const handleCloseCard = () => {
    setShowDepositCard(false);
    handleCloseDeposit(); // Call the parent component's close function
  };
const navigate  = useNavigate();
 const handleConfirm = () =>{
  navigate('/recharge');
 }
  return (
    <>
      {showDepositCard && (
        <div className="absolute top-28 left-[700px] w-60 h-52 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded shadow-xl z-50">
          <div className="flex justify-between w-48 mt-2 mx-auto">
            <h1>Contact Us</h1>
            <RxCross2 size={20} onClick={handleCloseCard} className="hover:text-[blue] pt-1 cursor-pointer" />
          </div>
          <div className="w-48 h-28 mx-auto flex flex-col place-content-center text-[#b0b1b3]">
            <h4 className="text-center">Please Contact</h4>
            <div className="flex space-x-2">
              <BsFillExclamationCircleFill size={20} className="pt-1" />
              <h4>Customer service to</h4>
            </div>
            <h4 className="ml-11">require</h4>
          </div>
          <div className="flex space-x-4 justify-end mr-5">
            <p className="pt-1 cursor-pointer" onClick={handleCloseCard}>Cancel</p>
            <button onClick={handleConfirm} className="bg-[#207de9] p-1 rounded-lg text-white">Confirm</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Deposit;
