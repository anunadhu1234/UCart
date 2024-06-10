import React from 'react'
import hand_icon from './Assets/hand_icon.png'
import arrow_icon from './Assets/arrow.png'
import hero_img from './Assets/hero_image.png'
const Hero = () => {
  return (
    <div className="h-screen bg-gradient-to-b from-[#fde1ff] to-[#e1ffea22] flex">
      <div className="hero-left flex flex-1 flex-col justify-center gap-[20px] pl-[180px] lh-[1.1]">
        <h2 className='text-[#090909] text-[26px] font-semibold'>NEW ARRIVALS ONLY</h2>
        <div>
        <div className="hero-hand-icon flex items-center gap-[20px]">
        <p className='text-[#171717] text-[100px] font-bold'>New</p>
        <img className='w-[105px]' src={hand_icon} alt=""/>
      </div>
      <p className='text-[#171717] text-[100px] font-bold m-0'>Collections</p>
      <p className='text-[#171717] text-[100px] font-bold m-0'>for everyone</p>
        </div>
        <div className="hero-latest-btn flex justify-center items-center gap-[15px] w-[310px] h-[70px] rounded-[75px] mt-[30px] bg-[#ff4141] text-[white] font-medium">
            <div>Latest Collection</div>
            <img src={arrow_icon} alt=""/>
        </div>
      </div>
      
      <div className="hero-right flex-1 flex items-center justify-center mt-[80px]">
        <img src={hero_img} alt=""/>
      </div>
    </div>
  )
}

export default Hero
