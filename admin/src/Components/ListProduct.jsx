import React, { useEffect, useState } from 'react'
import cross from '../assets/cross_icon.png'


const ListProduct = () => {
  const [all_products,setAll_products] = useState([]);
  const fetchInfo = async ()=>{
    await fetch('http://localhost:4000/allproducts')
    .then((res)=>res.json()).then((data)=>{setAll_products(data)})
  }

  useEffect(()=>{
    fetchInfo();
  },[]);

  const remove_product = async (id)=>{
    await fetch('http://localhost:4000/removeproduct',{
      method:'POST',
      headers:{
        Accept:'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify({id:id})
    })
    await fetchInfo();
  }
  return (
    <div className='flex flex-col justify-center w-[100%] h-[740px] py-[10px] px-[50px] m-[30px] rounded-[6px] bg-white max-[800px]:box-border max-[800px]:w-[95%] max-[800px]:h-[100%] max-[800px]:py-[10px] max-[800px]:px-[30px] max-[800px]:my-[20px] max-[800px]:mx-auto'>
      <h1>All Products</h1>
      <div className='grid grid-cols-6 gap-[10px] w-[100%] py-[20px] px-0 text-[#454545] text-[15px] font-semibold max-[800px]:py-[15px] max-[800px]:px-0 max-[800px]:text-[#454545] max-[800px]:text-[12px]'>
        <p>Products</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div className='overflow-y-auto'>
        <hr />
        {all_products.map((product,i)=>{
          return<><div key={i} className='grid grid-cols-6 gap-[10px] w-[100%] py-[20px] px-0 text-[#454545] text-[15px] font-semibold max-[800px]:items-center max-[800px]:font-medium'>
            <img className='h-[80px] max-[800px]:h-[60px]' src={product.image} alt=""/>
            <p>{product.name}</p>
            <p>${product.old_price}</p>
            <p>${product.new_price}</p>
            <p>{product.category}</p>
            <img onClick={()=>{remove_product(product.id)}} className='cursor-pointer' src={cross} alt=""/>
          </div>
          <hr />
          </>
        })}
      </div>
    </div>
  )
}

export default ListProduct
