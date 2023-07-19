"use client"
import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';


function PieChart() {
    const canvas = useRef();

    useEffect(() => {
        const ctx = canvas.current;
    
        let chartStatus = Chart.getChart('myChart');
        if (chartStatus !== undefined) {
          chartStatus.destroy();
        }
    
        const chart = new Chart(ctx, {
          type: 'pie',
          data: {
            labels: ['Lions', 'Monkeys', 'Zebras', 'Eagles', 'Horses'],
            datasets: [
              {
                label: 'Dataset 1',
                data: [12, 19, 3, 2, 3],
                backgroundColor: [
                  '#FF6384', // Bright red
                  '#36A2EB', // Bright blue
                  '#FFCE56', // Bright yellow
                  '#4BC0C0', // Bright cyan
                  '#9966FF', // Bright purple
                ],
                borderColor: '#ffffff', // White border color
                borderWidth: 1,
              },
            ],
          },
          options: {
            responsive: true,
            plugins: {
              legend: {
                position: 'right',
                labels: {
                  color: '#ffffff', // White legend labels
                },
              },
            //   title: {
            //     display: true,
            //     text: 'Number of animals in the zoo',
            //     color: '#ffffff', // White title text
            //   },
            },
          },
        });
      }, []);
    return (
        <div className='w-[100%] h-[100%] flex justify-center'>
          <canvas id='myChart' ref={canvas}></canvas>
        </div>
      );
}

export default PieChart
