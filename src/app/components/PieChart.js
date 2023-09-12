"use client";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import React, { useEffect, useState } from "react";
import axios from "axios";

const PieChart = () => {
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
      let chart = am4core.create("PieChart", am4charts.PieChart);
      if (chart.logo) {
        chart.logo.disabled = true;
      }

      // Add and configure Series
      var pieSeries = chart.series.push(new am4charts.PieSeries());
      pieSeries.dataFields.value = "consumption";
      pieSeries.dataFields.category = "category";
      pieSeries.slices.template.stroke = am4core.color("#fff");
      pieSeries.slices.template.strokeOpacity = 1;

      pieSeries.hiddenState.properties.opacity = 1;
      pieSeries.hiddenState.properties.endAngle = -90;
      pieSeries.hiddenState.properties.startAngle = -90;

      pieSeries.labels.template.fill = am4core.color("#FFFFFF");
      pieSeries.ticks.template.stroke = am4core.color("#FFFFFF");
      chart.hiddenState.properties.radius = am4core.percent(0);

      chart.data = consumptionData;
    }
  }, [consumptionData]);

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <div className=" absolute top-2 right-4 mt-[6px] mr-10">
        <label>Select Date: </label>
        <input
          type="date"
          className="text-black"
          value={selectedDate}
          onChange={handleDateChange}
        />
      </div>
      <div id="PieChart" style={{ width: "100%", height: "100%", marginTop: "20px" }} />
    </div>
  );
};

export default PieChart;