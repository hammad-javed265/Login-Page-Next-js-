"use client";
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import useUserStore from '@/hooks/userStore';
import { useRouter } from 'next/navigation';
import SimpleField from '../components/SimpleField';

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
        router.push("/");
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
      <div className='bg-slate-400 w-full h-screen bg-[url("../../public/cloud.jpg")] bg-no-repeat bg-center bg-cover'>
        <div className='flex items-center h-full w-full  justify-center'>
        <div className='w-[95%] bg-[#63B1D8] p-5 rounded-2xl md:w-[80%] lg:w-[30%] mt-[-80px]' style={{boxShadow:'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;'}}>
            <h2 className='text-white text-center text-2xl font-bold'>Sign in</h2>
            <div className='mt-5 space-y-4'>
              
             <SimpleField placeholder={"Enter Name"} class="text-black" type="email" value={user.email} onChange={(e) => setUser({...user, email: e.target.value})}/>
             <SimpleField placeholder={"Enter Password"} class="text-black" type="password" value={user.password} onChange={(e) => setUser({...user, password:e.target.value})} />
  
             <button 
                className='bg-red-700 w-full py-2 font-bold text-white'
                onClick={loginHandler}
                disabled = {buttonDisabled ? true : false}
              > {loading ? (
                <img src="./loding.gif" className='m-auto mt-[-10px] mb-[-10px]' height={30} width={40} alt="loading" />
              ) : (
                "Sign-In"
              )}</button>
            </div>
            <p className='text-white mt-5'>Dont have an account? <Link href={"/register"} className='text-black underline font-semibold'>Register</Link> </p>
          </div>
        </div>
      </div>
    )
  }
  
  export default Login
