import React, { useState } from 'react';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';

const Navbar = () => {
  const [menu,setMenu] = useState("shop");
  return (
    <div className="navbar flex justify-around p-4 shadow"> 
      <div className="nav-logo flex items-center gap-2.5">
        <img src={logo} alt="" />
        <p className='font-semibold text-3xl'>Shopper</p>
      </div>
      <ul className="nav-menu flex items-center gap-12 text-m font-medium ">
        <li onClick={()=>{setMenu("shop")}} className='flex flex-col items-center justify-center gap-1 cursor-pointer'>Shop {menu==='shop'?<hr className='border-none w-4/5 h-1 rounded-2.5 bg-[#ff4141]'/>:<></>}</li>
        <li onClick={()=>{setMenu("men")}} className='flex flex-col items-center justify-center gap-1 cursor-pointer'>Men {menu==='men'?<hr className='border-none w-4/5 h-1 rounded-2.5 bg-[#ff4141]'/>:<></>}</li>
        <li  onClick={()=>{setMenu("women")}} className='flex flex-col items-center justify-center gap-1 cursor-pointer'>Women {menu==='women'?<hr className='border-none w-4/5 h-1 rounded-2.5 bg-[#ff4141]'/>:<></>}</li>
        <li onClick={()=>{setMenu("kids")}} className='flex flex-col items-center justify-center gap-1 cursor-pointer'>Kids {menu==='kids'?<hr className='border-none w-4/5 h-1 rounded-2.5 bg-[#ff4141]'/>:<></>}</li>
      </ul>
      <div className="nav-login-cart flex items-center gap-11">
        <button className='w-40 h-14 outline-none border border-2 border-solid border-[#7a7a7a] rounded-[75px] text-[#515151] text-[18px] font-medium cursor-pointer bg-white cursor-pointer'>Login</button>
        <img src={cart_icon} alt="" />
        <div className="nav-cart-count w-6 h-6 flex justify-center items-center mt-[-35px] ml-[-55px] rounded-[11px] text-[14px] bg-red-600 text-white">2</div>
      </div>
    </div>
  )
}

export default Navbar
