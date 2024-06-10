import React, { useContext } from 'react'
import { ShopContext } from './Context/ShopContext';
import remove_icon from './Assets/cart_cross_icon.png'
const CartItems = () => {
  const {all_product,cartItems,removeFromCart,getTotalCartAmount} = useContext(ShopContext);
  return (
    <div className='my-[100px] mx-[170px] '>
      <div className='grid grid-cols-6 items-center gap-[75px] py-[20px] px-0 text-[#454545] text-[18px] font-semibold'>
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr className='h-[3px] bg-[#e2e2e2] border-0'/>
       {all_product.map((e)=>{
        if(cartItems[e.id]>0){
          return <div>
          <div className='grid grid-cols-6 items-center gap-[75px] text-[17px] font-medium py-[20px] px-0 text-[#454545] '>
            <img className='h-[62px]' src={e.image} alt=""/>
            <p>{e.name}</p>
            <p>${e.new_price}</p>
            <button className='w-[64px] h-[50px] border-[2px] border-solid border-[#ebebeb] bg-[#fff]'>{cartItems[e.id]}</button>
            <p>${e.new_price*cartItems[e.id]}</p>
            <img className='w-[15px] my-0 mx-[40px] cursor-pointer ' src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt=""/>
          </div>
         </div>
        }
        return null;
       })}
       <div className='flex my-[100px] mx-0'>
        <div className='flex-1 flex flex-col mr-[200px]'>
          <h1>Cart Totals</h1>
          <div>
            <div className='flex justify-between py-[15px] px-0'>
              <p>SubTotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className='flex justify-between py-[15px] px-0'>
              <p>Shipping Fee</p>
              <p>$10</p>
            </div>
            <hr />
            <div className='flex justify-between py-[15px] px-0'>
              <h3>Total</h3>
              <h3>${getTotalCartAmount()+10}</h3>
            </div>
          </div>
          <button className='w-[262px] h-[58px] outine-none border-none bg-[#ff5a5a] text-[16px] font-semibold cursor-pointer'>PROCEED TO CHECKOUT</button>
        </div>
        <div className='flex-1 text-[16px] font-medium'>
          <p className='text-[#555]'>If you have promo code, Enter it here</p>
          <div className='w-[504px] mt-[15px] pl-[20px] h-[58px] bg-[#eaeaea]'>
            <input className='border-none outline-none bg-transparent text-[16px] w-[330px] h-[50px]' placeholder='Promocode'></input>
            <button className='w-[170px] h-[58px] absolute text-[16px] bg-black text-white cursor-pointer'>Submit</button>
          </div>
        </div>
       </div>
    </div>
  )
}

export default CartItems
