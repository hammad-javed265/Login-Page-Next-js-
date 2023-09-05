"use client";
import React, { useEffect, useState } from 'react'
import NavList from '../components/NavList';
import Footer from '../components/Footer';
import useUserStore from '@/hooks/userStore';

const Profile = () => {

  const userStore = useUserStore((state) => state.user);
  const [user, setUser] = useState({});
  const [image, setImage] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('profileImage') || null;
    }
    return null;
  });

  useEffect(() => {
    setUser(userStore);
  }, [userStore]);

  // Function to open the file selection dialog and trigger the file input's change event
  const openFileSelector = () => {
    const fileInput = document.getElementById('file');
    if (fileInput) {
      fileInput.click();
    }
  };

  // Upload Image handler
  const uploadFile = async (e) => {
    console.log("Uploading....");
    const files = e.target.files;
    const data = new FormData();
    data.append('file', files[0]);
    data.append('upload_preset', 'ProfilePic'); // Fixed typo in 'upload_present'

    const res = await fetch('https://api.cloudinary.com/v1_1/dy6ncsfte/image/upload', {
      method: 'POST',
      body: data,
    });
    const file = await res.json();

    // Save the image URL to local storage
    localStorage.setItem('profileImage', file.secure_url);

    setImage(file.secure_url); // Use setImage to set the state
  };




  return (
    <div className='p-2'>

      <NavList></NavList>
      <div className='bg-[#1E6A8E] text-white p-4 w-[96%] h-[780px] max-md:w-[90%] m-7 relative opacity-90 '>
        <div className='flex flex-col items-center justify-center gap-3 h-[60%]'>

          <div className="profile-picture w-[100%] items-center justify-center flex flex-col">
            {image ? (
              <div className="circular-image float-right">
                <img className="rounded-image" src={image} alt="Profile" />
              </div>
            ) : (
              <div className="circular-image empty-profile pl-[73px] pt-4" onClick={openFileSelector}>
                Upload Image:&#160;&#160;&#160;&#160;
                <input type="file" id="file" name="file" style={{display: 'none' }} onChange={uploadFile} />
              </div>
            )}
            {image && (
              <div className="circular-image pl-[73px] pt-4" onClick={openFileSelector}>
                Update Image:&#160;&#160;&#160;&#160;
                <input type="file" id="file" name="file" onChange={uploadFile} />
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  )
}

export default Profile