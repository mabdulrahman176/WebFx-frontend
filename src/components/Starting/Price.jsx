import React from 'react'

const Price = () => {
    const today = [
        {id:1,title:"Today's Commision",amount:'0.00USDT'},
        {id:2,title:"Total Amount",amount:'10.00USDT'},
        {id:3,title:"Account Balance",amount:'10.00USDT'},
    ]
  return (
    <div className=' bg-transparent'>
      {today.map((key)=>(
      <div key={key.id} className='flex justify-between border-t-[2px]  p-3 text-xl'>
        <h1 className=''>{key.title}</h1>
        <h1>{key.amount}</h1>
      </div>
      ))}
     <div className='border-t-[2px]'></div>
     <div className='p-3 text-xl h-56'>
      <h1 className='text-[#207de9] p-2 text-2xl'>Notice</h1>
      <p >Working time: 11:00 - 23:00</p>
      <h2>For advances and withdrawals, please contact our Customer Service</h2>
     </div>
    </div>
  )
}

export default Price
