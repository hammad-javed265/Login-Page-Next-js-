import React from 'react';
import NavList from '../components/NavList';
import Sdiv from '../components/Sdiv';
import Ldiv from '../components/Ldiv';
import Consump from '../components/Consump';
import Footer from '../components/Footer';

function page() {
  return (
    <div className='bg-slate-200 p-2 h-full w-full'>
      {/* navbar starts */}
      <NavList></NavList>
      {/* navbar ends */}
      <div className="flex flex-wrap space-x-6 space-y-6">
        <Sdiv id={"div1"} title={"Guage Chart"}></Sdiv>
        <Ldiv id={"div2"} title={"Live Consumption"}></Ldiv>
        <div className="flex flex-wrap w-full sm:w-full md:w-[46%] lg:w-[30.9%] xl:w-[31.4%] h-[300px] ml-6 mt-6">
          <div className="bg-[#161232] text-white p-4 w-full sm:w-full md:w-full lg:w-full xl:w-[46.9%] xl:mt-0 ml-3 mt-3 relative">
            <Consump id={"today"} title={"Today"}>367 kWh</Consump>
          </div>
          <div className="bg-[#161232] text-white p-4 w-full sm:w-full md:w-full lg:w-full xl:w-[46.9%] xl:mt-0 ml-3 mt-3 relative">
            <Consump id={"week"} title={"Weekly"}>2848 kWh</Consump>
          </div>
          <div className="bg-[#161232] text-white p-4 w-full sm:w-full md:w-full lg:w-full xl:w-[46.9%] mt-3 ml-3 relative">
            <Consump id={"month"} title={"Monthly"}>6288 kWh</Consump>
          </div>
          <div className="bg-[#161232] text-white p-4 w-full sm:w-full md:w-full lg:w-full xl:w-[46.9%] mt-3 ml-3 relative">
            <Consump id={"year"} title={"YTD"}>35137 kwh</Consump>
          </div>
        </div>
        <Ldiv id={"div6"} title={"Period Over Period Chart"}></Ldiv>
        <Sdiv id={"div3"} title={"Pie Chart"}></Sdiv>
        <Sdiv id={"div4"} title={"Bar Chart"}></Sdiv>
        <Sdiv id={"div5"} title={"Donut Chart"}></Sdiv>
      </div>
      <br /><Footer></Footer>
    </div>
  );
}

export default page
