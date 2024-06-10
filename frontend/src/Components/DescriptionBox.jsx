import React from 'react'

const DescriptionBox = () => {
  return (
    <div className='my-[120px] mx-[170px]'>
      <div className='flex'>
        <div className='flex items-center justify-center text-[16px] font-semibold w-[171px] h-[70px] border-[1px] border-solid border-[#d0d0d0]'>
            Description
        </div>
        <div className='flex items-center justify-center text-[16px] font-semibold w-[171px] h-[70px] border-[1px] border-solid border-[#d0d0d0] bg-[#fbfbfb] text-[#555]'>
            Reviews (122)
        </div>
      </div>
      <div className='flex flex-col gap-[25px] p-[48px] pb-[70px] border-[1px] border-solid border-[#d0d0d0]'>
        <p>An eCommerce website is an online platform that allows businesses and individuals to buy and sell goods and services over the internet. These websites facilitate transactions by providing a digital storefront where products and services are displayed, and customers can browse, select, and purchase items.</p>
        <p>eCommerce websites typically showcase a variety of elements to provide a comprehensive online shopping experience. </p>
      </div>
    </div>
  )
}

export default DescriptionBox
