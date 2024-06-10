import React, { useState,useEffect } from 'react'
import Item from './Item'
const NewCollections = () => {
  const [new_collection,setNew_collection] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:4000/newcollections').then((res)=>res.json()).then((data)=>(setNew_collection(data)));
  },[]);
  return (
    <div className=' flex flex-col items-center gap-[10px] mb-[100px]'>
      <h1 className='text-[#171717] text-[50px] font-semibold'>NEW COLLECTIONS</h1>
      <hr className='w-[200px] h-[6px] rounded-[10px] bg-[#252525]'/>
      <div className="grid grid-cols-4  mt-[50px] gap-[30px]">
        {new_collection.map((item,i)=>{
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price = {item.new_price} old_price={item.old_price}/>
        })}
      </div>
    </div>
  )
}

export default NewCollections
