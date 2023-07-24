"use client"
import React, { useState } from 'react';
import NavList from '../components/NavList';
import Footer from '../components/Footer';
import Date from '../components/Date';

function Page() {
  const [selectedSources, setSelectedSources] = useState([]);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSourceChange = (e) => {
    const selectedSource = e.target.value;
    setSelectedSources((prevSelected) => [...prevSelected, selectedSource]);
  };

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to generate the report based on the selected sources, start date, and end date.
    console.log('Report generated:', selectedSources, startDate, endDate);
  };

  return (
    <div>
      <NavList />
      <div className='bg-[#1E6A8E] text-white p-4 w-[96%] h-[780px] m-8 relative opacity-90 overflow-auto'>
        <div className='flex flex-col items-center justify-center'>
          <h2 className='text-4xl font-semibold mb-14 mt-4'>Generate Report</h2>
          <form className='space-y-8 w-[50%]' onSubmit={handleSubmit}>
            <div className='flex items-center'>
              <div className='w-1/3 text-left'>
                <label className='text-white mr-2'>Title:</label>
              </div>
              <div className='w-2/3'>
                <input
                  type='text'
                  className='border rounded px-2 py-1 w-full text-black'
                  placeholder='Enter title'
                />
              </div>
            </div>
            <div className='flex items-center'>
              <div className='w-1/3 text-left'>
                <label className='text-white mr-2'>Select Source:</label>
              </div>
              <div className='w-2/3'>
                <button
                  type='button'
                  className='border rounded px-2 py-1 bg-white text-black w-full'
                  onClick={() => {
                    // Add logic to open a source selection modal or dropdown here.
                    // For simplicity, we'll just display a sample source.
                    handleSourceChange({ target: { value: 'Sample Source' } });
                  }}
                >
                  Select Source
                </button>
              </div>
            </div>
            <div className='flex items-center'>
              <div className='w-1/3 text-left'>
                <p className='text-white'>Selected Sources:</p>
              </div>
              <div className='w-2/3'>
                <div className='flex flex-wrap'>
                  {selectedSources.map((source, index) => (
                    <div key={index} className=' p-2 m-1 rounded'>
                      &#10687; {source}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className='flex items-center'>
              <div className='w-1/3 text-left'>
                <label className='text-white mr-2'>Start Date:</label>
              </div>
              <div className='w-2/3'>
                <Date value={'startDate'} onChange={handleStartDateChange} type='date' />
              </div>
            </div>
            <div className='flex items-center'>
              <div className='w-1/3 text-left'>
                <label className='text-white mr-2'>End Date:</label>
              </div>
              <div className='w-2/3'>
                <Date value={'endDate'} onChange={handleEndDateChange} type='date' />
              </div>
            </div>
            <center>
              <button
                type='submit'
                className='bg-white text-black py-2 px-4 rounded mt-6'
              >
                Generate Report
              </button>
            </center>
          </form>
        </div>
      </div >
      <Footer />
    </div >
  );
}

export default Page;

