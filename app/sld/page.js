import React from 'react';
import NavList from '../components/NavList';
import Footer from '../components/Footer';

function page() {
  return (
    <div className='p-2'>

      <NavList></NavList>
      <div className='bg-[#1E6A8E] text-white p-4 w-[96%] h-[780px] m-8 relative opacity-90'>
        <img src='sld2.png'></img>
        </div>
      <br /><div className='absolute bottom-1 w-[99%]'><Footer></Footer></div>
    </div>
  )
}

export default page
