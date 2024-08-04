import React, { useState } from 'react';
import deposit from './../image/my_deposit.png';
import withdraw from './../image/my_withdraw.png';
import team from './../image/my_team.png';
import bind from './../image/my_bind.png';
import security from './../image/my_security.png';
import transaction from './../image/my_transaction.png';
import contact from './../image/my_contact.png';
import notify from './../image/my_notify.png';
import invite from './../image/home_invite.png';
import { Link , } from 'react-router-dom';
import Deposit from './Deposit/Deposit';
import WaletCard from './Walet/WaletCard';

const ProfileEvent = () => {
  const [showDepositCard, setShowDepositCard] = useState(false);
  const [showWaletCard, setShowWaletCard] = useState(false);

  const handleDepositClick = () => {
    setShowDepositCard(true);

  };

  const handleCloseDeposit = () => {
    setShowDepositCard(false);
  };

  const handleWaletClick = () => {
    setShowWaletCard(true);
  }
  const items = [
    { src: deposit, text: 'Deposit', action: handleDepositClick },
    { src: withdraw, text: 'Withdrawal', link: '/withdrawal' },
    { src: team, text: 'My Team', link: '/team' },
    { src: bind, text: 'Blind Wallet', link: '/bind' ,action: handleWaletClick  },
    { src: security, text: 'Change Password', link: '/password' },
    { src: transaction, text: 'Transaction', link: '/transaction' },
    { src: contact, text: 'Customer Service', link: '/recharge' },
    { src: notify, text: 'Notifications', link: '/notifications' },
    { src: invite, text: 'Invitations', link: '/invitation' },
  ];

  return (
    <div className=''>
      <div className='grid grid-cols-3 mx-auto mt-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-3 justify-center md:ml-14 lg:ml-36 cursor-pointer'>
        {items.map((item, index) => (
          <div key={index} onClick={item.action || null}>
            <Link to={item.link || '#'} onClick={item.action ? (e) => e.preventDefault() : null}>
              <div className=''>
                <div className="flex flex-col items-center w-[75px] h-16 bg-[#CFD2DA] mt-4 rounded-md">
                  <img className="w-12 h-12 mt-2" src={item.src} alt={item.text} />
                </div>
                <h1 className="text-[black] mt-2 text-[15px] hover:underline">{item.text}</h1>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {showDepositCard && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50'>
          <div className=''>
            <Deposit handleCloseDeposit={handleCloseDeposit} />
          </div>
        </div>
      )}
         {showWaletCard &&(
           <WaletCard/>
            )}
    </div>
  );
};

export default ProfileEvent;
