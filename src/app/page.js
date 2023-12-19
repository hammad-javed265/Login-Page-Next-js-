import React from 'react';
import NavList from './components/NavList';
import Div from './components/Div';
import Consump from './components/Consump';
import Footer from './components/Footer';
import VulnChart from './components/Bar';
import GaugeChart from './components/GaugeChart';
import PieChart from './components/PieChart';
import Realtime from './components/Realtime';
import Radiuspie from './components/Radiuspie';
import Donut from './components/Donut';

function page() {
  return (
    <div className='p-2'>
      {/* navbar starts */}
      <NavList></NavList>
      {/* navbar ends */}
      <div className="flex flex-wrap space-x-6 space-y-6 h-[95vh]">
        <div className="flex flex-wrap flex-col w-full h-full">
          <Div id={"div1"} title={"Live Energy Consumption"} length={"lg:w-[26%] xl:w-[26%] mr-6"} heig = "h-[380px]"><GaugeChart></GaugeChart></Div>
          <Div id={"div7"} title={"Radius Pie Chart"} length={"lg:w-[26%] xl:w-[26%] mr-6"} heig = "h-[380px]"><Radiuspie></Radiuspie></Div>
 
          <div className="flex flex-wrap w-full xl:h-[120px] sm:h-[120px] md:h-[200px] lg:h-[200px] sm:w-full md:w-[44%] lg:w-[44%] xl:w-[44%] mt-6">
            <Consump id={"today"} title={"Today"} xltop={"xl:mt-0"}>337 kWh</Consump>
            <Consump id={"week"} title={"Weekly"} xltop={"xl:mt-0 ml-3"}>2848 kWh</Consump>
            <Consump id={"month"} title={"Monthly"} xltop={"xl:mt-0 ml-3"}>6288 kWh</Consump>
            <Consump id={"year"} title={"YTD"} xltop={"xl:mt-0 ml-3"}>35137 kwh</Consump>
          </div>
          <Div id={"div4"} title={"Period Over Period Chart"} length={"w-full sm:w-full md:w-[44%] lg:w-[44%] xl:w-[44%] ml-[0px]"} heig = "sm:h-[290px] md:h-[290px] lg:h-[290px] xl:h-[307px]"><VulnChart></VulnChart></Div>
          <Div id={"div2"} title={"Live Power Factor"} length={"w-full sm:w-full md:w-[44%] lg:w-[44%] xl:w-[44%] ml-[0px]"} heig = "sm:h-[250px] md:h-[250px] lg:h-[250px] xl:h-[307px]"><Realtime></Realtime></Div>
     
          <Div id={"div5"} title={"Pie Chart"} length={"lg:w-[26%] xl:w-[26%]  mt-6"} heig = "h-[380px]"><PieChart></PieChart></Div>
          <Div id={"div6"} title={"Donut Chart"} length={"lg:w-[26%] xl:w-[26%] "} heig = "h-[380px]"><Donut></Donut></Div>
          
        </div>


        <Footer></Footer>
      </div>
      
    </div>
  );
}

export default page
