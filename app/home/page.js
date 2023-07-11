import React from 'react';
import NavList from '../components/NavList';
import Sdiv from '../components/Sdiv';
import Ldiv from '../components/Ldiv';

function page() {
  return (
    <div className='bg-slate-200 p-2 h-full w-full'>
      {/* navbar starts */}
      <NavList></NavList>
      {/* navbar ends */}
      <div className="flex flex-wrap space-x-6 space-y-6">
        <Sdiv id={"div1"}></Sdiv>
        <Ldiv id={"div2"}></Ldiv>
        <div className="flex flex-wrap w-full sm:w-full md:w-[46%] lg:w-[30.9%] xl:w-[31.4%] h-[300px] ml-6 mt-6">
          <div className="bg-[#161232] text-white p-4 w-full sm:w-full md:w-full lg:w-full xl:w-[46.9%] xl:mt-0 ml-3 mt-3 relative">
            <div className="flex items-center justify-between xl:border-b-[1px] border-b-[0px] pb-2">
              <h2 className="mr-auto">Consumption</h2>
              <p>Today</p>
            </div>
            <div className="absolute inset-0 flex items-center xl:justify-center justify-end">
              <div className="text-center text-2xl mt-8">1202 kWh</div>
            </div>
          </div>
          <div className="bg-[#161232] text-white p-4 w-full sm:w-full md:w-full lg:w-full xl:w-[46.9%] xl:mt-0 ml-3 mt-3 relative">
            <div className="flex items-center justify-between xl:border-b-[1px] border-b-[0px] pb-2">
              <h2 className="mr-auto">Consumption</h2>
              <p>Weekly</p>
            </div>
            <div className="absolute inset-0 flex items-center xl:justify-center justify-end">
              <div className="text-center text-2xl mt-8">9202 kWh</div>
            </div>
          </div>
          <div className="bg-[#161232] text-white p-4 w-full sm:w-full md:w-full lg:w-full xl:w-[46.9%] mt-3 ml-3 relative">
          <div className="flex items-center justify-between xl:border-b-[1px] border-b-[0px] pb-2">
              <h2 className="mr-auto">Consumption</h2>
              <p>Monthly</p>
            </div>
            <div className="absolute inset-0 flex items-center xl:justify-center justify-end">
              <div className="text-center text-2xl mt-8">31232 kWh</div>
            </div>
          </div>
          <div className="bg-[#161232] text-white p-4 w-full sm:w-full md:w-full lg:w-full xl:w-[46.9%] mt-3 ml-3 relative">
          <div className="flex items-center justify-between xl:border-b-[1px] border-b-[0px] pb-2">
              <h2 className="mr-auto">Consumption</h2>
              <p>YTD</p>
            </div>
            <div className="absolute inset-0 flex items-center xl:justify-center justify-end">
              <div className="text-center text-2xl mt-8">38292 kWh</div>
            </div>
          </div>
        </div>
        <Ldiv id={"div6"}></Ldiv>
        <Sdiv id={"div3"}></Sdiv>
        <Sdiv id={"div4"}></Sdiv>
        <Sdiv id={"div5"}></Sdiv>
      </div>
    </div>
  );
}

export default page
