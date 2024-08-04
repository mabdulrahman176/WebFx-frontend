import React from 'react'
// import Home1 from "../image/home_cert.png";
import Home2 from "../image/home_company.png";
import Home3 from "../image/home_event.png";
import Home4 from "../image/home_faq.png";
import Home5 from "../image/home_invite.png";
import Home6 from "../image/home_recharge.png";
import Home7 from "../image/home_tandc.png";
import Home8 from "../image/home_withdraw.png";
import { Link } from 'react-router-dom';
const HeroPage = () => {
  const event =[
    {id: 1,title: 'Event',src:Home3 ,link:'/event'},
    {id: 2,title: 'Recharge',src:Home6,link:'/recharge'},
    {id: 3,title: 'Withdrawal',src:Home8,link:'/withdrawal'},
    {id: 4,title: 'Invitation',src:Home5,link:'/invitation'},
    {id: 5,title: 'Company',src:Home2,link:'/company'},
    {id: 6,title: 'T&C',src:Home7,link:'/t&c',},
    {id: 7,title: 'FAQs',src:Home4,link:'/faqs'},
  ]
  return (
    <div>
      <div className="grid  grid-cols-4 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-28  justify-center md:ml-14 lg:ml-36">
        {event.map((key)=>(
          <Link to={key.link} key={key.id} className='flex flex-col items-center cursor-pointer w-[75px] h-16 bg-[#CFD2DA] mt-4 rounded-md'>
            <img className="w-12 h-12 mt-2" src={key.src} alt={key.src}></img>
            <h1 className="text-[#207de9] mt-2 text-2xl pt-2  hover:underline ">{key.title}</h1>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default HeroPage
