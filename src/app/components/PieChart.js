"use client";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Pie = () => {
  // for current date
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Add 1 to month since it's 0-based
  const day = String(currentDate.getDate()).padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}`;
  //
  const [apiData, setApiData] = useState([]);
  const [selectedStartDate, setSelectedStartDate] = useState(formattedDate);
  const [selectedEndDate, setSelectedEndDate] = useState(formattedDate);
  const [consumptionData, setConsumptionData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (selectedStartDate && selectedEndDate) {
          const response = await axios.get(
            `https://energy-monitering.vercel.app/api/meters/getdata?start=${selectedStartDate}&end=${selectedEndDate}`
          );
          setApiData(response.data);
        }
      } catch (error) {
        console.error("Error fetching data from the API:", error);
      }
    };

    fetchData();

    return () => {
      // Clean up if necessary
    };
  }, [selectedStartDate, selectedEndDate]);

  useEffect(() => {
    const calculateConsumption = () => {
      if (apiData.length === 0) {
        // Wait until data is fetched
        return;
      }

      const consumptionResult = [];

      // Define the categories with shorter names
      const categories = [
        // "U_1_ActiveEnergy_KWH",
        "G_1_ActiveEnergy_KWH",
        "G_2_ActiveEnergy_KWH",
        "S_1_ActiveEnergy_KWH",
        "U_5_ActiveEnergy_KWH",
        "U_6_ActiveEnergy_KWH",
        "U_7_ActiveEnergy_KWH", 
        "U_8_ActiveEnergy_KWH",
        "U_9_ActiveEnergy_KWH",
        "U_10_ActiveEnergy_KWH",
        // "U_11_ActiveEnergy_KWH",
        "U_12_ActiveEnergy_KWH",
        "U_13_ActiveEnergy_KWH",
        "U_14_ActiveEnergy_KWH",
      ];

      categories.forEach((category) => {
        const categoryData = apiData
          .filter((item) => {
            const itemDate = new Date(item.Time);
            return (
              itemDate >= new Date(selectedStartDate) &&
              itemDate <= new Date(`${selectedEndDate}T23:59:59.999`)
            );
          })
          .map((item) => item[category]);
        const firstValue = categoryData[0] || 0;
        const lastValue = categoryData[categoryData.length - 1] || 0;
        const consumption = lastValue - firstValue;

        consumptionResult.push({ category: category.slice(0, 4), consumption });
      });

      setConsumptionData(consumptionResult);
    };

    calculateConsumption();

    return () => {
      // Clean up if necessary
    };
  }, [apiData, selectedStartDate, selectedEndDate]);

  useEffect(() => {
    if (consumptionData.length > 0) {
      let chart = am4core.create("pie", am4charts.PieChart);
      if (chart.logo) {
        chart.logo.disabled = true;
      }
      chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

      var series = chart.series.push(new am4charts.PieSeries());
      series.dataFields.value = "consumption";
      series.dataFields.category = "category";
      series.slices.template.cornerRadius = 6;
      series.colors.step = 3;
      series.hiddenState.properties.endAngle = -90;
      // Set the label colors to white
      series.labels.template.fill = am4core.color("#FFFFFF");
      // Set the tick (line connecting the slice and the label) colors to white
      series.ticks.template.stroke = am4core.color("#FFFFFF");
      chart.data = consumptionData;
      chart.radius = am4core.percent(90);
    }
  }, [consumptionData]);

  const handleStartDateChange = (event) => {
    setSelectedStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setSelectedEndDate(event.target.value);
  };

  return (
    <div className="w-full h-full">
      <div className=" absolute top-2 xl:right-14 max-sm:right-14 mt-[6px] xl:mr-44 max-sm:mr-44 lg:right-4 lg:mr-8 md:right-4 md:mr-8">
        <label className="bg-black pb-[0.7px]">Start Date: </label>
        <input
          type="date"
          className="text-black w-[108px]"
          value={selectedStartDate}
          onChange={handleStartDateChange}
        />
      </div>
      <div className=" absolute top-2 right-4 xl:mt-[6px] max-sm:mt-[6px] mr-8 lg:mt-[30px] md:mt-[30px]">
        <label className="bg-black pb-[0.7px]">End Date: </label>
        <input
          type="date"
          className="text-black w-[108px]"
          value={selectedEndDate}
          onChange={handleEndDateChange}
        />
      </div>
      <div id="pie" className="w-full max-sm:h-[95%] xl:h-[97%] md:h-[90%] lg:h-[90%] max-sm:mt-[30px] xl:mt-[25px] lg:mt-[45px] md:mt-[45px] "/>
    </div>
  );
};

export default Pie;
