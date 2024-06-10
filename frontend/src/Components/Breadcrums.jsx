import React from 'react'
import arrow_icon from './Assets/breadcrum_arrow.png'
const Breadcrums = (props) => {
    const {product} = props;
  return (
    <div className='flex items-center gap-[8px] text-[#5e5e5e] text-[16px] font-semibold my-[60px] mx-[170px] capitalize'>
      Home <img src={arrow_icon} alt="" /> Shop <img src={arrow_icon} alt=""/> {product.category} <img src={arrow_icon} alt=''/> {product.name}
    </div>
  )
}

export default Breadcrums
