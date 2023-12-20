import React from 'react';
import NavList from '../components/NavList';
import Footer from '../components/Footer';
import Date from '../components/Date';
import H_trend from '../components/H_trend';

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
        <div className="absolute top-2 w-[98%] p-2 left-4 border-b-2 border-white">
          <p className="text-lg font-bold">
            Customized Trends
          </p>
        </div>

        {/* Add the dropdown on the left side */}
        <div className="absolute left-4 top-14">

          <select
            id="trend-type"
            className="block mt-2 rounded border bg-white text-black px-2 py-1"
          >
            <option value="option1">Select Options</option>
            <option value="option2">Option 1</option>
            <option value="option3">Option 2</option>
            <option value="option4">Option 3</option>
            <option value="option5">Option 4</option>
            <option value="option6">Option 5</option>
          </select>
        </div>

        {/* Add the two input date fields on the top right side */}
        <div className="absolute top-16 right-4 flex space-x-4">
          <p
            className='py-2'
          >Start Date:</p>
          <Date title={'Start Date:'} id={'start_date'}></Date>
          <p
            className='py-2'
          >End Date:</p>
          <Date title={'End Date:'} id={'end_date'}></Date>
        </div>

        <H_trend></H_trend>
      </div>
      <Footer></Footer>

    </div>
  )
}

export default page
