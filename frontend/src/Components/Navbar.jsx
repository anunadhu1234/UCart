import React, { useContext, useState } from 'react';
import logo from './Assets/logo.png';
import cart_icon from './Assets/cart_icon.png';
import {Link} from 'react-router-dom';
import { ShopContext } from './Context/ShopContext';

const Navbar = () => {
  const [menu,setMenu] = useState("shop");
  const {getTotalCartItems} = useContext(ShopContext);
  return (
    <div className="navbar flex justify-around p-4 shadow"> 
      <div className="nav-logo flex items-center gap-2.5">
        <img src={logo} alt="" />
        <p className='font-semibold text-3xl'>Shopper</p>
      </div>
      <ul className="nav-menu flex items-center gap-12 text-m font-medium ">
        <li onClick={()=>{setMenu("shop")}} className='flex flex-col items-center justify-center gap-1 cursor-pointer'><Link to='/'>Shop</Link>  {menu==='shop'?<hr className='border-none w-4/5 h-1 rounded-2.5 bg-[#ff4141]'/>:<></>}</li>
        <li onClick={()=>{setMenu("men")}} className='flex flex-col items-center justify-center gap-1 cursor-pointer'><Link to='/men'>Men</Link> {menu==='men'?<hr className='border-none w-4/5 h-1 rounded-2.5 bg-[#ff4141]'/>:<></>}</li>
        <li  onClick={()=>{setMenu("women")}} className='flex flex-col items-center justify-center gap-1 cursor-pointer'><Link to='/women'>Women</Link> {menu==='women'?<hr className='border-none w-4/5 h-1 rounded-2.5 bg-[#ff4141]'/>:<></>}</li>
        <li onClick={()=>{setMenu("kids")}} className='flex flex-col items-center justify-center gap-1 cursor-pointer'><Link to='/kids'>Kids</Link>{menu==='kids'?<hr className='border-none w-4/5 h-1 rounded-2.5 bg-[#ff4141]'/>:<></>}</li>
      </ul>
      <div className="nav-login-cart flex items-center gap-11">
        {localStorage.getItem('auth-token')?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}} className='w-40 h-14 outline-none border border-2 border-solid border-[#7a7a7a] rounded-[75px] text-[#515151] text-[18px] font-medium cursor-pointer bg-white'>Log Out</button>:<button className='w-40 h-14 outline-none border border-2 border-solid border-[#7a7a7a] rounded-[75px] text-[#515151] text-[18px] font-medium cursor-pointer bg-white cursor-pointer'><Link to='/login'>Login </Link></button>}
        <Link to="/cart"><img src={cart_icon} alt="" /></Link>
        <div className="nav-cart-count w-6 h-6 flex justify-center items-center mt-[-35px] ml-[-55px] rounded-[11px] text-[14px] bg-red-600 text-white">{getTotalCartItems()}</div>
      </div>
    </div>
  )
}

export default Navbar
