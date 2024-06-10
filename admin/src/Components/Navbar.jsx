import React from 'react'
import nav_logo from '../assets/nav-logo.svg'
import navProfile from '../assets/nav-profile.svg'
const Navbar = () => {
  return (
    <div className='flex items-center justify-between py-[15px] px-[60px] shadow-3xl mb-[1px] bg-white max-[800px]:py-[15px] max-[800px]:px-[30px] '>
      <img className='w-[200px] max-[800px]:w-[150px]' src={nav_logo} alt=""/>
      <img className='w-[75px] max-[800px]:w-[60px]' src={navProfile} alt=""/>
    </div>
  )
}

export default Navbar
