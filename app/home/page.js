import React from 'react';
import NavList from '../components/NavList';
import Sdiv from '../components/Sdiv';
import Ldiv from '../components/Ldiv';
import Consump from '../components/Consump';
import Footer from '../components/Footer';
import VulnChart from '../components/Bar';
import GaugeChart from '../components/GaugeChart';
import PieChart from '../components/PieChart';
import AmChart from '../components/Amchart';
import Radiuspie from '../components/Radiuspie';
import Donut from '../components/Donut';

function page() {
  return (
    <div className=' bg-[url("https://img.freepik.com/premium-vector/interface-structure-data-calculation-systems_49459-481.jpg")] p-2 h-full w-full'>
      {/* navbar starts */}
      <NavList></NavList>
      {/* navbar ends */}
      <div className="flex flex-wrap space-x-6 space-y-6">
        <Sdiv id={"div1"} title={"Guage Chart"} ><GaugeChart></GaugeChart></Sdiv>
        <Ldiv id={"div2"} title={"Live Consumption"}><AmChart></AmChart></Ldiv>
        <div className="flex flex-wrap w-full sm:w-full md:w-[46%] lg:w-[30.9%] xl:w-[31.4%] h-[300px] ml-6 mt-6">
          <div className="bg-[#161232] text-white opacity-80 hover:bg-white hover:text-[#161232] p-4 w-full sm:w-full md:w-full lg:w-full xl:w-[46.9%] xl:mt-0 ml-3 mt-3 relative">
            <Consump id={"today"} title={"Today"}>367 kWh</Consump>
          </div>
          <div className="bg-[#161232] text-white opacity-80 hover:bg-white hover:text-[#161232] p-4 w-full sm:w-full md:w-full lg:w-full xl:w-[46.9%] xl:mt-0 ml-3 mt-3 relative">
            <Consump id={"week"} title={"Weekly"}>2848 kWh</Consump>
          </div>
          <div className="bg-[#161232] text-white opacity-80 hover:bg-white hover:text-[#161232] p-4 w-full sm:w-full md:w-full lg:w-full xl:w-[46.9%] mt-3 ml-3 relative">
            <Consump id={"month"} title={"Monthly"}>6288 kWh</Consump>
          </div>
          <div className="bg-[#161232] text-white opacity-80 hover:bg-white hover:text-[#161232] p-4 w-full sm:w-full md:w-full lg:w-full xl:w-[46.9%] mt-3 ml-3 relative">
            <Consump id={"year"} title={"YTD"}>35137 kwh</Consump>
          </div>
        </div>
        <Ldiv id={"div6"} title={"Period Over Period Chart"}><VulnChart></VulnChart></Ldiv>
        <Sdiv id={"div3"} title={"Pie Chart"}><PieChart></PieChart></Sdiv>
        <Sdiv id={"div4"} title={"Donut Chart"}><Donut></Donut></Sdiv>
        <Sdiv id={"div5"} title={"Radius Pie Chart"}><Radiuspie></Radiuspie></Sdiv>
      </div>
      <br /><Footer></Footer>
    </div>
  );
}

export default page
