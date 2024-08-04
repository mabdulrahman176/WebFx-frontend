
import React from 'react';
import webfxlogo from '../../image/webfx-logo.png' 
import Header from '../HeaderHome/Header';
const Invitation = () => {
  const referralCode = '2Z856F';


  const copyToClipboard = () => {
    const element = document.getElementById('my_code');
    element.select();
    element.setSelectionRange(0, element.value.length);
    // document.execCommand('copy');
    alert('Copied');
  };

  return (
    <div className="min-h-screen bg-gray-100">
    <Header name="Invitation"/>
      <main className="flex flex-col items-center p-4">
        <div className=" mt-8 w-[95%] rounded-xl  bg-[#FDFEFF] h-40">
          <img src={webfxlogo} alt="Logo" className="big-logo w-56 mx-auto mt-12" />
        </div>
        <div className="text-center mt-8 p-7">
          <div className="share-title text-xl ">My Referral Code</div>
          <div className="share-value text-primary mt-4">{referralCode}</div>
        </div>
        <input
          id="my_code"
          readOnly
          style={{ position: 'absolute', left: '-100000px' }}
          value={referralCode}
        />
        <div className="flex justify-center mt-10 w-full">
          <button
            onClick={copyToClipboard}
            className="px-4 py-2 bg-[#207de9] text-white rounded w-full"
          >
            Copy Referral Code
          </button>
        </div>
      </main>
    </div>
  );
};

export default Invitation;
