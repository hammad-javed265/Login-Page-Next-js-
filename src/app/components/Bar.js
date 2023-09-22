"use client"
import { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import axios from "axios";

const EnergyConsumptionComparison = () => {
  // for current date
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Add 1 to month since it's 0-based
  const day = String(currentDate.getDate()).padStart(2, "0");
  const preday = String(currentDate.getDate()-1).padStart(2, "0");
  const todayDate = `${year}-${month}-${day}`;
  const preDate = `${year}-${month}-${preday}`;

  const [startDate, setStartDate] = useState(preDate); // Initialize with default start date
  const [endDate, setEndDate] = useState(todayDate); // Initialize with default end date
  const [chartData, setChartData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
// Function to extract date part from the timestamp (adjusted for the 5-hour difference)
const extractDate = (timestamp) => {
  const dateObj = new Date(timestamp);
  dateObj.setHours(dateObj.getHours() + 5); // Adjust for the 5-hour difference
  return dateObj.toISOString().split("T")[0];
};

// Function to extract hour part from the timestamp (adjusted for the 5-hour difference)
const extractHour = (timestamp) => {
  const dateObj = new Date(timestamp);
  dateObj.setHours(dateObj.getHours()); // Adjust for the 5-hour difference
  return dateObj.getHours();
};

    // Fetch data from the API based on the selected dates
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://energy-monitering.vercel.app/api/meters/zephyr_new`
        );
        const data = response.data;

        // Filter data for the selected start date
        const startDateData = data.filter(
          (item) => extractDate(item.timestamp) === startDate
        );

        // Filter data for the selected end date
        const endDateData = data.filter(
          (item) => extractDate(item.timestamp) === endDate
        );

        if (startDateData.length > 0 && endDateData.length > 0) {
          // Calculate hourly consumption for the selected start date
          const hourlyConsumption1 = Array(24).fill(0);

          startDateData.forEach((item, index) => {
            if (index < startDateData.length - 1) {
              const currentData = item;
              const nextData = startDateData[index + 1];

              const currentHour = extractHour((currentData).timestamp);
              const consumption =
                nextData.U_1_ActiveEnergy_KWH - currentData.U_1_ActiveEnergy_KWH;

              hourlyConsumption1[currentHour] += consumption;
            }
          });

          // Calculate hourly consumption for the selected end date
          const hourlyConsumption2 = Array(24).fill(0);

          endDateData.forEach((item, index) => {
            if (index < endDateData.length - 1) {
              const currentData = item;
              const nextData = endDateData[index + 1];

              const currentHour = extractHour(currentData.timestamp);
              const consumption =
                nextData.U_1_ActiveEnergy_KWH - currentData.U_1_ActiveEnergy_KWH;

              hourlyConsumption2[currentHour] += consumption;
            }
          });

          const chartData = {
            labels: Array.from({ length: 24 }, (_, i) => `${i}:00`),
            datasets: [
              {
                label: `${startDate} kWh`,
                data: hourlyConsumption1,
                backgroundColor: "blue",
              },
              {
                label: `${endDate} kWh`,
                data: hourlyConsumption2,
                backgroundColor: "red",
              },
            ],
          };

          setChartData(chartData);
        } 
      } catch (error) {
        console.error("Error fetching data from the API: ", error);
        setError("Error fetching data from the API");
      }
    };

    if (startDate && endDate) {
      fetchData();
    }
  }, [startDate, endDate]);

  return (
    <div className="h-full w-full">
      <div className="absolute top-2 mt-[6px] right-14">
        <label htmlFor="startDate" className="bg-black pb-[0.7px]">1st Date:</label>
        <input
          type="date"
          className="text-black"
          id="startDate"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />&#160;&#160;&#160;

        <label htmlFor="endDate" className="bg-black pb-[0.7px]">2nd Date:</label>
        <input
          type="date"
          className="text-black"
          id="endDate"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </div>

      {error && <p>{error}</p>}
      {chartData && (
        <div className="h-full w-full"> 
          <Bar
            data={chartData}
            height={null}
            width={null}
            options={{
              maintainAspectRatio: false,
              scales: {
                y: {
                  beginAtZero: true,
                  ticks: {
                    color: "white",
                  },
                  grid: {
                    color: "white",
                  },
                },
                x: {
                  beginAtZero: true,
                  ticks: {
                    color: "white",
                  },
                  grid: {
                    color: "white",
                  },
                },
              },
              plugins: {
                title: {
                  display: true,
                  text: "Hourly Energy Consumption Comparison",
                  color: "white",
                },
                legend: {
                  labels: {
                    color: "white",
                  },
                },
              },
            }}
          />
        </div>
      )}
    </div>
  );
};

export default EnergyConsumptionComparison;