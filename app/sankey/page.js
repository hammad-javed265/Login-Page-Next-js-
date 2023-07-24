import React from 'react';
import NavList from '../components/NavList';
import Footer from '../components/Footer';
import Sankey from '../components/Sankey';

function page() {
  return (
    <div className='p-2'>

      <NavList></NavList>
      <div className='bg-[#0d2c3b] text-white p-4 w-[96%] h-[780px] m-8 relative opacity-90'>
        <Sankey></Sankey>
        </div>
      <Footer></Footer>
    </div>
  )
}

export default page
