"use client"
import React, { useEffect } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from '@amcharts/amcharts4/charts';
// import am4themes_animated from '@amcharts/amcharts4/themes/animated';

// am4core.useTheme(am4themes_animated);
const PieChart = () => {
    useEffect(() => {
        let chart = am4core.create('PieChart', am4charts.PieChart);
        if(chart.logo) {
          chart.logo.disabled = true ;
        }

      // Add data
chart.data = [ {
  "country": "Lithuania",
  "litres": 501.9
}, {
  "country": "Czechia",
  "litres": 301.9
}, {
  "country": "Ireland",
  "litres": 201.1
}, {
  "country": "Germany",
  "litres": 165.8
}, {
  "country": "Australia",
  "litres": 139.9
}, {
  "country": "Austria",
  "litres": 128.3
}, {
  "country": "UK",
  "litres": 99
}
];

// Add and configure Series
var pieSeries = chart.series.push(new am4charts.PieSeries());
pieSeries.dataFields.value = "litres";
pieSeries.dataFields.category = "country";
pieSeries.slices.template.stroke = am4core.color("#fff");
pieSeries.slices.template.strokeOpacity = 1;

// This creates initial animation
pieSeries.hiddenState.properties.opacity = 1;
pieSeries.hiddenState.properties.endAngle = -90;
pieSeries.hiddenState.properties.startAngle = -90;
// Set the label colors to white
pieSeries.labels.template.fill = am4core.color("#FFFFFF");
// Set the tick (line connecting the slice and the label) colors to white
pieSeries.ticks.template.stroke = am4core.color("#FFFFFF");
chart.hiddenState.properties.radius = am4core.percent(0);
        return () => {
            chart.dispose();
        };
    }, []);

    return <div id="PieChart" style={{ width: '100%', height: '100%', marginTop: '10px' }} />;
};

export default PieChart;
