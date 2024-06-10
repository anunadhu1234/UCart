import React, { useState } from 'react'
import upload_area from '../assets/upload_area.svg'

const AddProduct = () => {
    const [image,setImage] = useState(false);
    const [productDetails,setProductDetails] = useState({
        name:"",
        image:"",
        category:"women",
        new_price:"",
        old_price:""
    })

    const imageHandler = (e)=>{
        setImage(e.target.files[0]);
    }

    const changeHandler = (e)=>{
        setProductDetails({...productDetails,[e.target.name]:e.target.value})
    }

    const addProduct = async ()=>{
        console.log(productDetails);
        let responseData;
        let product = productDetails;

        let formData = new FormData();
        formData.append('product',image);
        await fetch('http://localhost:4000/upload',{
            method:'POST',
            headers:{
                Accept:"application/json"
            },
            body:formData,
        }).then((res)=>res.json()).then((data)=>{responseData=data
        })

        if(responseData.success){
            product.image = responseData.image_url; 
            console.log(product);
            await fetch('http://localhost:4000/addproduct',{
                method:'POST',
                headers:{
                    Accept:'application/json',
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(product)
            }).then((res)=>res.json()).then((data)=>{
                if(data.success){
                    alert("Product Added");
                }else{
                    alert("Failed");
                }
            })
        }
    }
  return (
    <div className="box-border w-[100%] max-w-[800px] py-[30px] px-[50px] my-[20px] mx-[30px] rounded-[6px] bg-white max-[800px]:w-auto max-[800px]:p-[30px] max-[800px]:m-[20px]">
      <div className='w-[100%]  py-[15px]  text-[#7b7b7b] text-[20px]'>
        <p>Product Title</p>
        <input value={productDetails.name} onChange={changeHandler} className='box-border w-[100%] h-[50px] rounded-[4px] pl-[15px] border-[1px] border-solid border-[#c3c3c3] outline-none text-[#7b7b7b] text-[14px]' type="text" name='name' placeholder='Enter product title'/>        
      </div>
      <div className=' py-[15px] flex gap-[40px]'>
        <div className='w-[100%] text-[#7b7b7b] text-[20px]'>
            <p>Price</p>
            <input value={productDetails.old_price} onChange={changeHandler} className='box-border w-[100%] h-[50px] rounded-[4px] pl-[15px] border-[1px] border-solid border-[#c3c3c3] outline-none text-[#7b7b7b] text-[14px]' type="text" name='old_price' placeholder='Type here'/>
        </div>
        <div className='w-[100%] text-[#7b7b7b] text-[20px]'>
            <p>Offer Price</p>
            <input value={productDetails.new_price} onChange={changeHandler} className='box-border w-[100%] h-[50px] rounded-[4px] pl-[15px] border-[1px] border-solid border-[#c3c3c3] outline-none text-[#7b7b7b] text-[14px]' type="text" name='new_price' placeholder='Type here'/>
        </div>
      </div>
      <div className='py-[15px] w-[100%] text-[#7b7b7b] text-[20px]'>
        <p>Product Category</p>
        <select value={productDetails.category} onChange={changeHandler} className='p-[10px] w-[100px] h-[50px] text-[18px] text-[#7b7b7b] border-[1px] border-solid border-[#7b7b8d] rounded-[4px]' name="category">
            <option value="women">Women</option>
            <option value="men">Men</option>
            <option value="kid">Kid</option>
        </select>
      </div>
      <div className='py-[15px]'>
        <label htmlFor="file-input">
            <img className='h-[120px] w-[120px] rounded-[10px] object-contain my-[10px] mx-0' src={image?URL.createObjectURL(image):upload_area} alt=""/>
        </label>
        <input onChange={imageHandler} type="file" name="image" id="file-input" hidden/>
      </div>
      <button onClick={addProduct} className='mt-[20px] w-[160px] h-[50px] rounded-[6px] bg-[#6079ff] border-none cursor-pointer text-white text-[16px] font-medium'>ADD</button>
    </div>
  )
}

export default AddProduct
