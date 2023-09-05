"use client";
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [image, setImage] = useState(""); // State for the image URL
  const [imagePreview, setImagePreview] = useState(""); // State for the image preview URL
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  // Function to handle image upload
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'ProfilePic'); // Replace with your Cloudinary upload preset

    try {
      setLoading(true);
      const response = await axios.post(
        'https://api.cloudinary.com/v1_1/dy6ncsfte/image/upload',
        formData
      );

      if (response.data.secure_url) {
        setImage(response.data.secure_url); // Set the image URL in state
        setImagePreview(URL.createObjectURL(file)); // Set the image preview URL
        toast.success("Image uploaded successfully", { position: toast.POSITION.TOP_RIGHT });
      } else {
        toast.error("Image upload failed", { position: toast.POSITION.TOP_RIGHT });
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      toast.error("Error uploading image", { position: toast.POSITION.TOP_RIGHT });
    } finally {
      setLoading(false);
    }
  };

  const registerHandler = async () => {
    try {
      setLoading(true);

      // Include the image URL in the user data
      const userData = { ...user, image };

      const response = await axios.post("/api/users/register", userData);
      console.log(response);

      if (response.data.success) {
        toast.success("User Registered Successfully", { position: toast.POSITION.TOP_RIGHT });
        console.log(response.data.success);
        router.push("/login");
      } else {
        toast.error(response.data.error, { position: toast.POSITION.TOP_RIGHT });
      }

      setUser({
        username: "",
        email: "",
        password: "",
      });
      setImage(""); // Clear the image URL state after registration
    } catch (error) {
      console.error("Signup failed", error);
      toast.error(error.message, { position: toast.POSITION.TOP_RIGHT });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user.username.length > 0 && user.password.length > 0 && user.email.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className='bg-slate-400 w-full h-screen bg-[url("https://wallpapercave.com/wp/wp2672844.jpg")] bg-no-repeat bg-center bg-cover'>
      <div className='flex items-center h-full w-full  justify-center'>
        <div className='  w-[95%] bg-[#8B7BA2] p-5  md:w-[80%] lg:w-[30%]'>
          <h2 className='text-white text-center text-2xl font-bold'>Register</h2>
          <div className='mt-5 space-y-3 text-white'>
            <input
              type="file"
              className='outline-none border-b-4 border-transparent py-2 text-sm w-full px-5 transition duration-150 focus:border-red-500'
              onChange={handleImageUpload}
            />
            <img src={imagePreview} alt="" className='h-[50%] w-[50%] m-auto' style={{ maxWidth: "100%" }} />
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
              disabled={buttonDisabled || loading}
            >
              {loading ? (
                <img src="./loding.gif" className='m-auto mt-[-10px] mb-[-10px]' height={30} width={40} alt="loading" />
              ) : (
                "Register"
              )}
            </button>
          </div>
          <p className='text-white mt-5'>
            Already have an account?{' '}
            <Link href={"/login"} className='text-black underline font-semibold'>
              Login
            </Link>{' '}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
