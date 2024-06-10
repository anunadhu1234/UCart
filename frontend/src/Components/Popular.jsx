import React, { useEffect, useState } from 'react'
import Item from './Item'
const Popular = () => {
  const [popular,setPopular] = useState([])
  useEffect(()=>{
    fetch('http://localhost:4000/popularinwomen').then((res)=>res.json()).then((data)=>setPopular(data));
  },[]);
  return (
    <div className='popular flex flex-col items-center gap-[10px] h-[90vh]'>
      <h1 className='text-[#171717] text-[50px] font-semibold'>POPULAR IN WOMEN</h1>
      <hr className='w-[200px] h-[6px] rounded-[10px] bg-[#252525]'/>
      <div className="popular-item mt-[50px] flex gap-[30px]">
        {popular.map((item,i)=>{
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price = {item.new_price} old_price={item.old_price}/>
        })}
      </div>
    </div>
  )
}

export default Popular
