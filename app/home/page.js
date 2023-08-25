import React from 'react';
import NavList from '../components/NavList';
import Div from '../components/Div';
import Consump from '../components/Consump';
import Footer from '../components/Footer';
import VulnChart from '../components/Bar';
import GaugeChart from '../components/GaugeChart';
import PieChart from '../components/PieChart';
import Realtime from '../components/Realtime';
import Radiuspie from '../components/Radiuspie';
import Donut from '../components/Donut';

function page() {
  return (
    <div className='p-2'>
      {/* navbar starts */}
      <NavList></NavList>
      {/* navbar ends */}
      <div className="flex flex-wrap space-x-6 space-y-6">
        <Div id={"div1"} title={"Guage Chart"} length={"lg:w-[30.9%] xl:w-[31.4%]"}><GaugeChart></GaugeChart></Div>
        <Div id={"div2"} title={"Live Consumption"} length={"lg:w-[64.1%] xl:w-[64.2%]"}><Realtime></Realtime></Div>
        <div className="flex flex-wrap w-full sm:w-full md:w-[46%] lg:w-[30.9%] xl:w-[31.4%] h-[300px] ml-6 mt-6">
          <Consump id={"today"} title={"Today"} xltop={"xl:mt-0"}>337 kWh</Consump>
          <Consump id={"week"} title={"Weekly"} xltop={"xl:mt-0"}>2848 kWh</Consump>
          <Consump id={"month"} title={"Monthly"}>6288 kWh</Consump>
          <Consump id={"year"} title={"YTD"}>35137 kwh</Consump>
        </div>
        <Div id={"div4"} title={"Period Over Period Chart"} length={"lg:w-[64.1%] xl:w-[64.2%]"}><VulnChart></VulnChart></Div>
        <Div id={"div5"} title={"Pie Chart"} length={"lg:w-[30.9%] xl:w-[31.4%]"}><PieChart></PieChart></Div>
        <Div id={"div6"} title={"Donut Chart"} length={"lg:w-[30.9%] xl:w-[31.4%]"}><Donut></Donut></Div>
        <Div id={"div7"} title={"Radius Pie Chart"} length={"lg:w-[30.9%] xl:w-[31.4%]"}><Radiuspie></Radiuspie></Div>
      </div>
      <br /><Footer></Footer>
    </div>
  );
}

export default page
