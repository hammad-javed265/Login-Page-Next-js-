"use client"
import React, { useEffect } from 'react';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
// import am4themes_animated from '@amcharts/amcharts4/themes/animated';

// am4core.useTheme(am4themes_animated);

const Realtime = () => {
    useEffect(() => {
        let chart = am4core.create('chartdiv', am4charts.XYChart);
        if (chart.logo) {
            chart.logo.disabled = true;
        }
        chart.paddingRight = 20;

        // Create axes
        var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
        dateAxis.renderer.minGridDistance = 100;
        dateAxis.renderer.labels.template.fill = am4core.color('#ffffff'); // Set x-axis labels color to white

        var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis.min = 0; // Set minimum value to 5°C
        valueAxis.max = 1000;
        valueAxis.adapter.add('min', function (min) {
            if (min < 5) { // Restrict minimum value to 5°C
                return 5;
            }
            return min;
        });
        valueAxis.renderer.labels.template.fill = am4core.color('#ffffff'); // Set y-axis labels color to white
        valueAxis.renderer.grid.template.stroke = am4core.color('#ffffff'); // Set y-axis grid color to white

        // Create series
        var series = chart.series.push(new am4charts.LineSeries());
        series.dataFields.valueY = 'value';
        series.dataFields.dateX = 'time';
        series.tooltipText = '{value}kW';
        series.strokeWidth = 2;
        series.stroke = am4core.color('#ff0000'); // Set trend line color to red

        // Add bullets
        var bullet = series.bullets.push(new am4charts.CircleBullet());
        bullet.circle.radius = 4;
        bullet.circle.strokeWidth = 2;
        bullet.circle.fill = am4core.color('#ffffff'); // Set bullet color to red

        // Add tooltip to bullets
        bullet.tooltipText = '{valueY}kW\n[bold]{categoryX}[/]'; // Use categoryX to display the time

        // Set up data
        var data = [];
        var time = new Date();

        let prevValue = null; // Variable to store previous value

        function generateData() {
            time = new Date(time.getTime() + 1000);
            fetch("http://15.185.73.254:1880/latestnaubahar1")
                .then(response => response.json())
                .then(dataFromAPI => {
                    const value = (dataFromAPI.U_1_ActivePower_Total_kW);
                    const roundedValue = parseFloat(value.toFixed(2)); // Round to 2 decimal places
                    data.push({ time: time, value: roundedValue });
if (prevValue !== null) {
                        if (value > prevValue) {
                            series.stroke = am4core.color('#00ff00'); // Set trend line color to green for uptrend
                        } else if (value < prevValue) {
                            series.stroke = am4core.color('#ff0000'); // Set trend line color to red for downtrend
                        }
                    }
                    prevValue = value;
                })
                .catch(error => {
                    console.error("Error fetching data:", error);
                });

            // Remove data older than 1 minute
            var cutoffTime = new Date(time.getTime() - 60000);
            while (data.length > 0 && data[0].time < cutoffTime) {
                data.shift();
            }
        }

        // Update chart data every second
        setInterval(function () {
            generateData();
            chart.data = data;
            chart.invalidateData();
        }, 1000);

        return () => {
            chart.dispose();
        };
    }, []);

    return <div id="chartdiv" style={{ width: '100%', height: '100%', marginTop: '30px' }} />;
};

export default Realtime;