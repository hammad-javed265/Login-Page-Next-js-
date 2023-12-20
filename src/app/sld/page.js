import React from 'react';
import NavList from '../components/NavList';
import Footer from '../components/Footer';

function page() {
  return (
    <div className='p-2'>

      <NavList></NavList>
      <div className='bg-[#0A2357] text-white p-4 w-[96%] h-[780px] m-8 relative opacity-90' style={{ boxShadow: 'inset 0 0 20px 10px rgb(1, 88, 189)' }}>
        <>
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '35px',
              height: '20px',
              boxShadow: 'inset 5px 5px 4px -1px #02F1F5'
            }}
          ></div>
          <div
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: '35px',
              height: '20px',
              boxShadow: 'inset -5px 5px 4px -1px #02F1F5'
            }}
          ></div>
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '35px',
              height: '20px',
              boxShadow: 'inset 5px -5px 4px -1px #02F1F5'
            }}
          ></div>
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              right: 0,
              width: '35px',
              height: '20px',
              boxShadow: 'inset -5px -5px 4px -1px #02F1F5'
            }}
          ></div>
        </>
        <img src='sld2.png'></img>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default page
