import React, { useContext } from 'react'
import star_icon from './Assets/star_icon.png'
import star_dull_icon from './Assets/star_dull_icon.png'
import { ShopContext } from './Context/ShopContext';
const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);

  return (
    <div className='flex my-0 mx-[170px]'>
      <div className='flex gap-[17px]'>
        <div className='flex flex-col gap-[16px]'>
            <img className='h-[163px]' src={product.image} alt=''/>
            <img className='h-[163px]' src={product.image} alt=''/>
            <img className='h-[163px]' src={product.image} alt=''/>
            <img className='h-[163px]' src={product.image} alt=''/>
        </div>
        <div >
            <img className='w-[586px] h-[700px]' src={product.image} alt=''/>
        </div>
      </div>
      <div className='my-0 mx-[70px] flex flex-col'>
        <h1 className='text-[#3d3d3d] text-[40px] font-bold'>{product.name}</h1>
        <div className='flex items-center mt-[13px] gap-[5px] text-[#1c1c1c] text-[20px]'>
        <img src={star_icon} alt=''/>
        <img src={star_icon} alt=''/>
        <img src={star_icon} alt=''/>
        <img src={star_icon} alt=''/>
        <img src={star_dull_icon} alt=''/>
        <p>(122)</p>
        </div>
        <div className='flex my-[40px] mx-0 gap-[30px] text-[24px] font-bold'>
            <div className='text-[#818181] line-through'>
                ${product.old_price}
            </div>
            <div className='text-[#ff4141]'>
                ${product.new_price}
            </div>
        </div>
        <div>
            Description will be here
        </div>
        <div>
            <h1 className='mt-[55px] text-[#656565] text-[20px] font-semibold'>
                Select Size
            </h1>
            <div className='flex my-[30px] mx-0 gap-[20px]'>
                <div className='py-[18px] px-[24px] bg-[#fbfbfb] border-[1px] border-solid border-[#ebebeb] rounded-[3px] cursor-pointer'>
                    S
                </div>
                <div className='py-[18px] px-[24px] bg-[#fbfbfb] border-[1px] border-solid border-[#ebebeb] rounded-[3px] cursor-pointer'>
                    M
                </div>
                <div className='py-[18px] px-[24px] bg-[#fbfbfb] border-[1px] border-solid border-[#ebebeb] rounded-[3px] cursor-pointer'>
                    L
                </div>
                <div className='py-[18px] px-[24px] bg-[#fbfbfb] border-[1px] border-solid border-[#ebebeb] rounded-[3px] cursor-pointer'>
                    XL
                </div>
                <div className='py-[18px] px-[24px] bg-[#fbfbfb] border-[1px] border-solid border-[#ebebeb] rounded-[3px] cursor-pointer'>
                    XXL
                </div>
            </div>
        </div>
        <button onClick={()=>{addToCart(product.id)}} className='py-[20px] px-[40px] w-[200px] text-[16px] font-semibold text-white bg-[#ff4141] mb-[40px] border-none outline-none cursor-pointer'>ADD TO CART</button>
        <p className='mt-[10px]'><span className='font-semibold'>Category :</span> Women, T-Shirt, Crop-Top</p>
        <p className='mt-[10px]'><span className='font-semibold'>Tags :</span> Modern, Latest</p>
      </div>
    </div>
  )
}

export default ProductDisplay
