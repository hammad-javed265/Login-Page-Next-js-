"use client"
import { Bar } from "react-chartjs-2";
import Chart from 'chart.js/auto';
const VulnChart = () => {
  return (
    <div className="h-[100%] w-[100%]">
     <Bar
        data={{
          labels: [
            "Sqli",
            "XSS",
            "XXE",
            "Open Redirect",
            "Broken Authentication"
          ],
          datasets: [
            {
              label: "# of vulnerabilities",
              data: [15, 12, 6, 7, 4],
              backgroundColor: ["red", "yellow", "blue", "black", "green"],
              // borderColor: "orange",
              // borderWidth: 5
            },
            {
              label: "Web Apps",
              data: [20, 13, 6, 8, 9],
              backgroundColor: "purple",
              // borderColor: "red",
              // borderWidth: 5
            }
          ]
        }}
        height={null}
        width={null}
        options={{
          maintainAspectRatio: false,
          scales: {
            x: {
              ticks: {
                color: "white"
              },
              grid: {
                color: "white"
              }
            },
            y: {
              ticks: {
                color: "white"
              },
              grid: {
                color: "white"
              }
            }
          },
          plugins: {
            title: {
              display: true,
              text: "Vulnerability Chart",
              color: "white"
            },
            legend: {
              labels: {
                color: "white"
              }
            }
          }
        }}
      />
    </div>
  );
};
export default VulnChart;