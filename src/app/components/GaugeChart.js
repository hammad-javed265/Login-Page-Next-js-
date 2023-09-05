"use client"
import React, { useEffect, useState } from 'react';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_dark from '@amcharts/amcharts4/themes/dark';

const GaugeChart = () => {
    const [value, setCurrentValue] = useState(0);
    useEffect(() => {
        am4core.useTheme(am4themes_dark);

        let chart = am4core.create('GaugeChart', am4charts.GaugeChart);
        if (chart.logo) {
            chart.logo.disabled = true;
        }

        chart.innerRadius = -15;

        var axis = chart.xAxes.push(new am4charts.ValueAxis());
        axis.min = 0;
        axis.max = 20000;
        axis.strictMinMax = true;
        axis.numberFormatter.numberFormat = "#a";

        let ds = new am4core.DropShadowFilter();
        ds.blur = 10;
        ds.opacity = 0.5;
        axis.filters.push(ds)

        var gradient = new am4core.LinearGradient();
        gradient.stops.push({ color: am4core.color("green") })
        gradient.stops.push({ color: am4core.color("yellow") })
        gradient.stops.push({ color: am4core.color("red") })

        axis.renderer.line.stroke = gradient;
        axis.renderer.line.strokeWidth = 15;
        axis.renderer.line.strokeLinecap = "round";
        axis.renderer.line.strokeOpacity = 1;

        axis.renderer.grid.template.disabled = true;

        var hand = chart.hands.push(new am4charts.ClockHand());
        hand.radius = am4core.percent(102);
        hand.startWidth = 16;
        hand.pin.radius = 8;
        hand.parent.zIndex = 100;

        const updateHandValue = (value) => {
            hand.showValue(value, 1000, am4core.ease.cubicOut);
            setCurrentValue(value); // Update the current value state
        };

        const fetchData = () => {
            console.log("Fetching data...");
            fetch("http://15.185.73.254:1880/live_consumption")
              .then(response => {
                if (!response.ok) {
                  throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
              })
              .then(dataFromAPI => {
                const value = dataFromAPI;
                updateHandValue(value);
              })
              .catch(error => {
                console.error("Error fetching data:", error);
              });
          };
          
          fetchData(); // Initial fetch
          const interval = setInterval(fetchData, 5000);
          
          return () => {
            clearInterval(interval);
            chart.dispose();
          };
    }, []);

    return (
        <div className='w-full h-full pt-5'>
            <div id="GaugeChart" className='w-full h-full' />
            <div className='text-center text-xl mt-[-20px]'>{parseFloat(value.toFixed(0))} <small> kWh</small></div>
        </div>
    );
};

export default GaugeChart;