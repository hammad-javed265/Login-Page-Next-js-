import React from 'react';
import NavList from '../components/NavList';
import Footer from '../components/Footer';
import Date from '../components/Date';
import H_trend from '../components/H_trend';

function page() {
  return (
    <div className='p-2'>

      <NavList></NavList>
      <div className='bg-[#1E6A8E] text-white p-4 w-[96%] h-[780px] m-8 relative opacity-90'>
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
          <Date title={'Start Date:'} id={'start_date'}></Date>
          <Date title={'End Date:'} id={'end_date'}></Date>
        </div>

        <H_trend></H_trend>
      </div>
      <br />
      <div className='absolute bottom-1 w-[99%]'>
        <Footer></Footer>
      </div>

    </div>
  )
}

export default page
