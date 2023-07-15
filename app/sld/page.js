import React from 'react';
import NavList from '../components/NavList';
import Footer from '../components/Footer';

function page() {
  return (
    <div className='bg-slate-200 p-2 h-screen w-full'>

      <NavList></NavList>
      <br /><div className='absolute bottom-1 w-[99%]'><Footer></Footer></div>
    </div>
  )
}

export default page
