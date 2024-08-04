import React from 'react';
import Img1 from '../../image/whatsapp.png'
import Img2 from '../../image/telegram.png'
import Img3 from '../../image/Livechat.png'
import Header from '../HeaderHome/Header';


const Recharge = () => {

  return (
    <div className="flex flex-col items-center  min-h-screen bg-gray-100">
   <div className='w-full'>
   <Header name="Customer Services"/>
   </div>
      <main className="flex flex-row justify-center mt-10">
        <a
          href="https://t.me/consumerservice396"
          className="flex flex-col items-center p-4 m-4"
        >
          <img src={Img2} className="w-20 mb-2" alt="Telegram" />
          <span>Telegram</span>
        </a>
        <button
          id="chat-btn"
          className="flex flex-col items-center p-4 m-4"
        >
          <img src={Img3} className="w-20 mb-2" alt="Live Chat" />
          <span>Live Chat</span>
        </button>
        <a
          href="https://api.whatsapp.com/send?phone=13438226952"
          className="flex flex-col items-center p-4 m-4"
        >
          <img src={Img1} className="w-20 mb-2" alt="WhatsApp" />
          <span>WhatsApp</span>
        </a>
      </main>
      <p className="text-center mt-8">Click To Contact Customer Service</p>
      <div className="mt-5 p-4 bg-white shadow-custom rounded-lg">
        <div className="text-primary font-bold">Notice</div>
        <div className="mt-2">Working time: 11:00 - 23:00</div>
        <div>For advances and withdrawals, please contact our Customer Service</div>
      </div>
    </div>
  );
};

export default Recharge;
