import React from 'react'
import { Link } from 'react-router-dom'
const Item = (props) => {
  return (
    <div className='item w-[350px] hover:scale-105 duration-700'>
      <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} className='max-h-[408px] max-w-[341px]'src={props.image} alt=""/></Link>
       <p className='m-[6px 0px]'>{props.name}</p>
    <div className="item-prices flex gap-[20px]">
        <div className="items-prices-new text-[#374151] font-semibold text-[18px]">
            ${props.new_price}
        </div>
        <div className="item-prices-old text-[#8c8c8c] font-medium text-[18px] line-through">
            ${props.old_price}
        </div>
    </div>
    </div>
  )
}

export default Item

