import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { BsFillExclamationCircleFill } from 'react-icons/bs';
import { RxCross2 } from 'react-icons/rx';

const WaletCard = () => {
  const [showWaletCard, setShowWaletCard] = useState(true);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [submittedWithoutPassword, setSubmittedWithoutPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
const [allow,setAllow] = useState(true);
const alertClose = () =>{
  setAllow(false)
}
  const handleCloseWalet = () =>{
    setShowWaletCard(false);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleConfirmClick = () => {
    if (password.trim() === '') {
      setSubmittedWithoutPassword(true);
      setErrorMessage('Please input withdrawal Password.');
    } else {
      // Here you can implement your password validation logic
      if (password === 'yourCorrectPassword') { // Replace 'yourCorrectPassword' with your actual validation logic
        console.log('Password entered:', password);
        setSubmittedWithoutPassword(false);
        setErrorMessage(''); // Clear error message if password is correct
        // Proceed with further logic (e.g., submit form, etc.)
      } else {
        setSubmittedWithoutPassword(true);
        setErrorMessage('Incorrect password. Please try again.');
      }
    }
  };

  return (
    <>
      {showWaletCard && (
        <div className="absolute bottom-0  left-[700px] w-80 h-52 transform -translate-x-1/2 -translate-y-1/2 bg-[white] rounded shadow-3xl z-50">
          <div className="flex w-72 space-x-5 mt-2 mx-auto">
            <h1 className="text-2xl text-[#207de9]">Withdrawal Password</h1>
            <span onClick={handleCloseWalet} className="cursor-pointer">
              <RxCross2 size={25} className="text-[#207de9] pt-2" />
            </span>
          </div>
          <div className="w-72 mx-auto h-28 flex items-center">
            <input
              id="password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={handlePasswordChange}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline hover:border-[#207de9]"
              placeholder="Please input withdrawal Password"
            />
            <span
              className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              <FontAwesomeIcon
                icon={showPassword ? faEyeSlash : faEye}
                className="text-gray-500 hover:text-gray-700 mb-3 mr-2"
              />
            </span>
          </div>
          {submittedWithoutPassword && errorMessage && allow && (
            <div className="absolute top-[-80px] bg-[blue] w-96 h-14 flex items-center justify-around rounded shadow-3xl z-50">
              <div className="w-80 flex items-center justify-around">
                <BsFillExclamationCircleFill size={20}  className='text-red-700]'/>
                <p className="text-red-500 text-[15px] text-center font-bold">{errorMessage}</p>
                <span onClick={alertClose} className="cursor-pointer">
              <RxCross2 size={25} className="text-red-500 " />
            </span>
              </div>
            </div>
          )}

          <div className="w-72 h-4 flex items-center mx-auto">
            <button
              className="text-center p-2 w-full bg-[#207de9] rounded-lg text-black"
              onClick={handleConfirmClick}
            >
              Confirm
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default WaletCard;