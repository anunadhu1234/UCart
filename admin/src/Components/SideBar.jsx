import React from 'react'
import {Link} from 'react-router-dom'
import add_product from '../assets/Product_Cart.svg'
import list_product from '../assets/Product_list_icon.svg'

const SideBar = () => {
  return (
    <div className='flex flex-col pt-[30px] gap-[20px] w-[100%] max-w-[250px] h-[100vh] bg-white max-[800px]:py-[30px] max-[800px]:px-0 max-[800px]:flex-row max-[800px]:w-[100%] max-[800px]:max-w-none max-[800px]:h-auto max-[800px]:justify-center'>
      <Link to={'/addproduct'} style={{textDecoration:"none"}}>
        <div className='flex items-center justify-center my-[0px] mx-[20px] py-[5px] px-[10px] rounded-[6px] bg-[#f6f6f6] gap-[20px] cursor-pointer max-[800px]:m-0'>
            <img src={add_product} alt=''/>
            <p>Add Product</p>
        </div>
      </Link>
      <Link to={'/listproduct'} style={{textDecoration:"none"}}>
        <div className='flex items-center justify-center my-[0px] mx-[20px] py-[5px] px-[10px] rounded-[6px] bg-[#f6f6f6] gap-[20px] cursor-pointer max-[800px]:m-0'>
            <img src={list_product} alt=''/>
            <p>Product List</p>
        </div>
      </Link>
    </div>
  )
}

export default SideBar
