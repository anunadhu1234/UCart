import React, { useState } from 'react'

const LoginSignup = () => {
  const [state,setState] = useState("Login");
  const [formData,setFormData] =useState({
    name:"",
    password:"",
    email:""
  })

  const login = async () =>{
    console.log(formData);
    let responseData;
    await fetch('http://localhost:4000/login',{
      method:'POST',
      headers:{
        Accept:'application/json',
        'Content-Type' :'application/json'
      },
      body: JSON.stringify(formData),
    }).then((res)=>res.json()).then((data)=>responseData=data);
    if(responseData.success){
      localStorage.setItem('auth-token',responseData.token);
      window.location.replace('/')
    }else{
      alert(responseData.errors)
    }
  }

  const signup = async ()=>{
    console.log(formData);
    let responseData;
    await fetch('http://localhost:4000/signup',{
      method:'POST',
      headers:{
        Accept:'application/json',
        'Content-Type' :'application/json'
      },
      body: JSON.stringify(formData),
    }).then((res)=>res.json()).then((data)=>responseData=data);
    if(responseData.success){
      localStorage.setItem('auth-token',responseData.token);
      window.location.replace('/')
    }else{
      alert(responseData.errors)
    }
  }

  const changeHandler = (e) =>{
    setFormData({...formData,[e.target.name]:e.target.value});
  }
  return (
    <div className='w-[100%] h-[80vh] bg-[#fce3fe] pt-[100px]'>
      <div className='w-[680px] h-[680px] bg-white m-auto py-[40px] px-[60px]'>
        <h1 className='my-[20px] mx-0 text-[48px] font-bold'>{state}</h1>
        <div className='flex flex-col gap-[30px] mt-[30px]'>
          {state==="Sign Up"?<input name='name' value={formData.name} onChange={changeHandler} className='h-[72px] w-[100%] pl-[20px] border-[1px] border-solid border-[#c9c9c9] outline-none text-[#5c5c5c] text-[18px]' type="text" placeholder='Your Name'/>:<></>}
          <input name='email' value={formData.email} onChange={changeHandler} className='h-[72px] w-[100%] pl-[20px] border-[1px] border-solid border-[#c9c9c9] outline-none text-[#5c5c5c] text-[18px]' type="email" placeholder='Email Address'/>
          <input name='password' value={formData.password} onChange={changeHandler} className='h-[72px] w-[100%] pl-[20px] border-[1px] border-solid border-[#c9c9c9] outline-none text-[#5c5c5c] text-[18px]' type="password" placeholder='Password'/>
        </div>
        <button onClick={state==='Login'?login:signup} className='w-[100%] h-[72px] text-white bg-[#ff4141] mt-[30px] border-none text-[24px] font-medium cursor-pointer'>Continue</button>
        {state==="Sign Up"?<p className='mt-[20px] text-[#5c5c5c] text-[18px] font-medium'>Already have an account? <span onClick={()=>{setState("Login")}} className='cursor-pointer text-[#ff4141]  font-semibold'>Login</span></p>:<p className='mt-[20px] text-[#5c5c5c] text-[18px] font-medium'>Do not have an account? <span onClick={()=>{setState("Sign Up")}} className='text-[#ff4141] cursor-pointer font-semibold'>Sign Up</span></p>}
        <div className='flex items-center mt-[25px] gap-[20px] text-[#5c5c5c] text-[18px] font-medium'>
        <input type="checkbox" name='' id=''/>
        <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup
