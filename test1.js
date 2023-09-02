 "use client";
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import useUserStore from '@/hooks/userStore';

const Login = () => {    
  const addUser = useUserStore((state) => state.setUser);
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [loading, setLoading] = useState(false);

  const loginHandler = async () => {
    try {
      setLoading(true);
      const response =  await axios.post("/api/users/login", user);   
      
      
      // zustand start
      
      setUser(response.data.user);
      // zustand end

      console.log(response);
      if(response.data.success){
        toast.success("Login Successful", { position: toast.POSITION.TOP_RIGHT});
        router.push("/home");
      }
      else{
        toast.error(response.data.message, { position: toast.POSITION.TOP_RIGHT});
      }
      
      setUser({
        username:"",
        email:"",
        password:""
      })      
    } catch (error) {
      // console.log("Signup failed");
      toast.error(error.message, { position: toast.POSITION.TOP_RIGHT});
    }finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if(user.password.length > 0 && user.email.length > 0 ){
      setButtonDisabled(false);
    }
    else{
      setButtonDisabled(true);
    }
  }, [user])
  
  return (
    <div className="min-h-screen flex items-center justify-center">
        <div className='w-[40%] p-20 rounded-md bg-red-800 flex flex-col text-black'>
            <h2 className='text-center text-3xl font-bold text-white'>Login</h2>
           
            <input 
                type="email"  
                className='py-2 px-5 rounded-md mt-5 outline-none'
                placeholder='Enter Email'
                value={user.email}
                onChange={(e) => setUser({...user, email: e.target.value})}
                />
            
            <input 
                type="password"  
                className='py-2 px-5 rounded-md mt-5 outline-none'
                placeholder='Enter Password'
                value={user.password}
                onChange={(e) => setUser({...user, password:e.target.value})}
                />

            <button
                className='mt-5 bg-black text-white rounded-md py-2 hover:bg-opacity-60'
                onClick={loginHandler}
                disabled = {buttonDisabled ? true : false}
                >
                  {loading ? <img src="/images/loading.gif" height={40} width={40} alt="loading" /> : "Login"}
                </button>
            
            <p className='text-white mt-5'>Dont have an account? <Link href={"/register"} className='text-black underline font-semibold'>Register</Link> </p>
        </div>
    </div>
  )
}

export default Login