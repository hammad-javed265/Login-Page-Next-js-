"use client";
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

const Register = () => {    
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [loading, setLoading] = useState(false);

  const registerHandler = async () => {
    try {
      setLoading(true);
      const response =  await axios.post("/api/users/register", user);
      console.log(response);

      if(response.data.success){
        toast.success("User Registered Successfully", { position: toast.POSITION.TOP_RIGHT});    
        console.log(response.data.success);
      }
      else{
        toast.error(response.data.error, { position: toast.POSITION.TOP_RIGHT});        
      }

      setUser({
        username:"",
        email:"",
        password:""
      })      
    } catch (error) {
      console.log("Signup failed");
      toast.error(error.message, { position: toast.POSITION.TOP_RIGHT});
    }finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if(user.username.length > 0 && user.password.length > 0 && user.email.length > 0 ){
      setButtonDisabled(false);
    }
    else{
      setButtonDisabled(true);
    }
  }, [user])
  
  return (
    <div className='bg-slate-400 w-full h-screen bg-[url("https://wallpapercave.com/wp/wp2672844.jpg")] bg-no-repeat bg-center bg-cover'>
        <div className='flex items-center h-full w-full  justify-center'>
        <div className='  w-[95%] bg-[#8B7BA2] p-5  md:w-[80%] lg:w-[30%]'>
            <h2 className='text-white text-center text-2xl font-bold'>Register</h2>
            <div className='mt-5 space-y-3'>
            <input 
                type="text"  
                className='outline-none border-b-4 border-transparent py-2 text-sm w-full px-5 transition duration-150 focus:border-red-500 ' 
                placeholder='Enter Username'
                value={user.username}
                onChange={(e) => setUser({...user, username: e.target.value})}
                />

            <input 
                type="email"  
                className='outline-none border-b-4 border-transparent py-2 text-sm w-full px-5 transition duration-150 focus:border-red-500 ' 
                placeholder='Enter Email'
                value={user.email}
                onChange={(e) => setUser({...user, email: e.target.value})}
                />
            
            <input 
                type="password"  
                className='outline-none border-b-4 border-transparent py-2 text-sm w-full px-5 transition duration-150 focus:border-red-500 ' 
                placeholder='Enter Password'
                value={user.password}
                onChange={(e) => setUser({...user, password:e.target.value})}
                />

            <button
                className='bg-red-700 w-full py-2 font-bold text-white'
                onClick={registerHandler}
                disabled = {buttonDisabled ? true : false}
                >
                  {loading ? <img src="/images/loading.gif" height={40} width={40} alt="loading" /> : "Register"}
                </button>
            </div>
            <p className='text-white mt-5'>Already have an account? <Link href={"/login"} className='text-black underline font-semibold'>Login</Link> </p>
        </div>
        </div>
    </div>
  )
}

export default Register