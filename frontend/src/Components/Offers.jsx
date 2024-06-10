import React from 'react'
import exclusive_image from './Assets/exclusive_image.png'
const Offers = () => {
  return (
    <div className='offers w-[65%] h-[60vh] flex m-auto p-[0px 140px] mb-[150px] bg-gradient-to-b from-[#fde1ff] to-[#e1ffea22] '>
      <div className="offers-left flex-[1] flex flex-col justify-center items-center">
        <h1 className='text-[#171717] text-[80px] font-semibold'>Exclusive</h1>
        <h1 className='text-[#171717] text-[80px] font-semibold'>Offers For You</h1>
        <p className='text-[#171717] text-[22px] font-semibold'>ONLY ON BEST SELLERS PRODUCT</p>
        <button className='w-[282px] h-[70px] rounded-[35px] bg-[#ff4141] text-white text-[22px] font-medium mt-[30px] cursor-pointer'>Check Now</button>
      </div>
      <div className="offers-right flex-[1] flex items-center justify-end pt-[50px]">
        <img src={exclusive_image} alt=""></img>
      </div>
    </div>
  )
}

export default Offers
