import React, { createContext, useState, useEffect } from "react";



export const ShopContext = createContext(null);
const getDefaultCart = ()=>{
    let cart = {};
    for(let i = 0; i<300;++i){
        cart[i] = 0;
    }
    return cart;
}
getDefaultCart();
const ShopContextProvider = (props)=>{
    const [all_product,setAll_product] = useState([])
   const [cartItems,setCartItems] = useState(getDefaultCart());
   useEffect(()=>{
    fetch('http://localhost:4000/allproducts').then((res)=>res.json()).then((data)=>setAll_product(data))
   if(localStorage.getItem('auth-token')){
    fetch('http://localhost:4000/getcart',{
        method:'POST',
            headers:{
                Accept:'application/form-data',
                'auth-token':`${localStorage.getItem('auth-token')}`,
                'Content-Type':'application/json'
            },
            body:"",
    }).then((res)=>res.json()).then((data)=>console.log(setCartItems(data)))
   }

},[])
   
   const addToCart = (itemId)=>{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
    if(localStorage.getItem('auth-token')){
        fetch('http://localhost:4000/addtocart',{
            method:'POST',
            headers:{
                Accept:'application/form-data',
                'auth-token':`${localStorage.getItem('auth-token')}`,
                'Content-Type':'application/json'
            },
            body:JSON.stringify({"itemId":itemId}),
        }).then((res)=>res.json()).then((data)=>console.log(data))
    }
   }
   const removeFromCart = (itemId)=>{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    if(localStorage.getItem('auth-token')){
        fetch('http://localhost:4000/removefromcart',{
            method:'POST',
            headers:{
                Accept:'application/form-data',
                'auth-token':`${localStorage.getItem('auth-token')}`,
                'Content-Type':'application/json'
            },
            body:JSON.stringify({"itemId":itemId}),
        }).then((res)=>res.json()).then((data)=>console.log(data))
    }
   }

   const getTotalCartAmount = ()=>{
    let total = 0;
    for(const item in cartItems){
        if(cartItems[item]>0){
            console.log(item);
            let itemInfo = all_product.find((product)=>product.id===Number(item));
            console.log(itemInfo)
            total+= itemInfo.new_price * cartItems[item];
        }
        
    }
    return total;

   }
   const getTotalCartItems = () => {
    let totalItems = 0;
    for(const item in cartItems){
        totalItems += cartItems[item];
    }
    return totalItems;
}

   const contextValue = {all_product,cartItems,addToCart,removeFromCart,getTotalCartAmount,getTotalCartItems};
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;
