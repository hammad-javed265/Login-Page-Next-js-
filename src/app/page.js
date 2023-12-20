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
      <div className="flex flex-wrap space-x-6 space-y-6 sm:h-full md:h-[130vh] lg:h-[100vh] xl:h-[90vh]">
        <div className="flex flex-wrap flex-col w-full h-full">
          <Div id={"div1"} title={"Live Energy Consumption"} length={"lg:w-[26%] xl:w-[26%] mr-6"} heig = "h-[380px] max-xl:h-[404px]"><GaugeChart></GaugeChart></Div>
          <Div id={"div7"} title={"Radius Pie Chart"} length={"lg:w-[26%] xl:w-[26%] mr-6"} heig = "h-[380px] max-xl:h-[404px]"><Radiuspie></Radiuspie></Div>
 
          <div className="flex flex-wrap w-full xl:h-[120px] h-[300px] sm:h-[300px] md:h-[170px] lg:h-[170px] sm:w-full md:w-[44%] lg:w-[44%] xl:w-[44%] mt-6">
            <Consump id={"today"} title={"Today"} xltop={"xl:mt-0"}>337 kWh</Consump>
            <Consump id={"week"} title={"Weekly"} xltop={"xl:mt-0 ml-3 max-md:ml-0 lg:mr-3"}>2848 kWh</Consump>
            <Consump id={"month"} title={"Monthly"} xltop={"xl:mt-0 ml-3 max-md:ml-0 lg:ml-0"}>6288 kWh</Consump>
            <Consump id={"year"} title={"YTD"} xltop={"xl:mt-0 ml-3 max-md:ml-0"}>35137 kwh</Consump>
          </div>
          <Div id={"div4"} title={"Period Over Period Chart"} length={"w-full sm:w-full md:w-[44%] lg:w-[44%] xl:w-[44%] ml-[0px]"} heig = "h-[330px]"><VulnChart></VulnChart></Div>
          <Div id={"div2"} title={"Live Power Factor"} length={"w-full sm:w-full md:w-[44%] lg:w-[44%] xl:w-[44%] ml-[0px]"} heig = "h-[284px]"><Realtime></Realtime></Div>
     
          <Div id={"div5"} title={"Pie Chart"} length={"lg:w-[26%] xl:w-[26%]  mt-6"} heig = "h-[380px] max-xl:h-[404px]"><PieChart></PieChart></Div>
          <Div id={"div6"} title={"Donut Chart"} length={"lg:w-[26%] xl:w-[26%] "} heig = "h-[380px] max-xl:h-[404px]"><Donut></Donut></Div>
          
        </div>


        <Footer></Footer>
      </div>
      
    </div>
  );
}

export default page
