"use client";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Donut = () => {
  // for current date
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Add 1 to month since it's 0-based
  const day = String(currentDate.getDate()).padStart(2, '0');
  const formattedDate = `${year}-${month}-${day}`;
  //
  const [apiData, setApiData] = useState([]);
  const [selectedDate, setSelectedDate] = useState(formattedDate);
  const [consumptionData, setConsumptionData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (selectedDate) {
          const response = await axios.get(
            `https://energy-monitering.vercel.app/api/meters/getdata?date=${selectedDate}`
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
  }, [selectedDate]);

  useEffect(() => {
    const calculateConsumption = () => {
      if (apiData.length === 0) {
        // Wait until data is fetched
        return;
      }

      const consumptionResult = [];

      // Define the categories with shorter names
      const categories = [
        "U_1_ActiveEnergy_KWH",
        "G_1_ActiveEnergy_KWH",
        "G_2_ActiveEnergy_KWH",
        "S_1_ActiveEnergy_KWH",
        "U_5_ActiveEnergy_KWH",
        "U_6_ActiveEnergy_KWH",
        "U_7_ActiveEnergy_KWH",
        "U_8_ActiveEnergy_KWH",
        "U_9_ActiveEnergy_KWH",
        "U_10_ActiveEnergy_KWH",
        "U_11_ActiveEnergy_KWH",
        "U_12_ActiveEnergy_KWH",
        "U_13_ActiveEnergy_KWH",
        "U_14_ActiveEnergy_KWH",
      ];

      categories.forEach((category) => {
        const categoryData = apiData
          .filter((item) => item.Time.startsWith(selectedDate))
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
  }, [apiData, selectedDate]);

  useEffect(() => {
    if (consumptionData.length > 0) {
      let chart = am4core.create('donut', am4charts.PieChart);
      if (chart.logo) {
        chart.logo.disabled = true;
      }

      // Add and configure Series
      var pieSeries = chart.series.push(new am4charts.PieSeries());
      pieSeries.dataFields.value = "consumption";
      pieSeries.dataFields.category = "category";
      pieSeries.innerRadius = am4core.percent(50);
      pieSeries.ticks.template.disabled = true;
      pieSeries.labels.template.disabled = true;
      pieSeries.colors.list = [
        am4core.color("#8975a8"), 
        am4core.color("#63ab30"), 
        am4core.color("#FF9671"), 
        am4core.color("#FFC75F"), 
        am4core.color("#FF6F91"), 
        am4core.color("#028cc7"), 
        am4core.color("#0245f6"),
        am4core.color("#3d019f"), 
        am4core.color("#8301ab"), 
        am4core.color("#a31749"), 
        am4core.color("#f62611"), 
        am4core.color("#670110"), 
        am4core.color("#f39402"),
        am4core.color("#313131"), 
        am4core.color("#949494") 
      ];
      var rgm = new am4core.RadialGradientModifier();
      rgm.brightnesses.push(-0.8, -0.8, -0.5, 0, - 0.5);
      pieSeries.slices.template.fillModifier = rgm;
      pieSeries.slices.template.strokeModifier = rgm;
      pieSeries.slices.template.strokeOpacity = 0.4;
      pieSeries.slices.template.strokeWidth = 0;
      chart.radius = am4core.percent(90);
      chart.legend = new am4charts.Legend();
      chart.legend.position = "right";
      chart.legend.labels.template.fill = am4core.color('#ffffff');
      chart.legend.valueLabels.template.fill = am4core.color('#ffffff');
      chart.legend.scrollable = true;

      chart.data = consumptionData;
    }
  }, [consumptionData]);

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  return (
    <div className="w-full h-full">
      <div className=" absolute top-2 right-4 mt-[6px] mr-10">
        {/* <label>Select Date: </label> */}
        <input
          type="date"
          className="text-black"
          value={selectedDate}
          onChange={handleDateChange}
        />
      </div>
      <div id="donut" style={{ width: "100%", height: "97%", marginTop: "20px" }} />
    </div>
  );
};


export default Donut;
