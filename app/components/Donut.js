"use client"
import React, { useEffect } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from '@amcharts/amcharts4/charts';
// import am4themes_animated from '@amcharts/amcharts4/themes/animated';

// am4core.useTheme(am4themes_animated);
const Donut = () => {
    useEffect(() => {
        let chart = am4core.create('donut', am4charts.PieChart);
        if(chart.logo) {
          chart.logo.disabled = true ;
        }

       // Add data
chart.data = [{
    "country": "Lithuania",
    "litres": 501.9
  }, {
    "country": "Czech Republic",
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
  }, {
    "country": "Belgium",
    "litres": 60
  }, {
    "country": "The Netherlands",
    "litres": 50
  }];
  
  // Add and configure Series
  var pieSeries = chart.series.push(new am4charts.PieSeries());
  pieSeries.dataFields.value = "litres";
  pieSeries.dataFields.category = "country";
  pieSeries.innerRadius = am4core.percent(50);
  pieSeries.ticks.template.disabled = true;
  pieSeries.labels.template.disabled = true;
  
  var rgm = new am4core.RadialGradientModifier();
  rgm.brightnesses.push(-0.8, -0.8, -0.5, 0, - 0.5);
  pieSeries.slices.template.fillModifier = rgm;
  pieSeries.slices.template.strokeModifier = rgm;
  pieSeries.slices.template.strokeOpacity = 0.4;
  pieSeries.slices.template.strokeWidth = 0;
  
  chart.legend = new am4charts.Legend();
  chart.legend.position = "right";
  chart.legend.labels.template.fill = am4core.color('#ffffff');
  chart.legend.valueLabels.template.fill = am4core.color('#ffffff');

        return () => {
            chart.dispose();
        };
    }, []);

    return <div id="donut" style={{ width: '100%', height: '100%', marginTop: '10px' }} />;
};

export default Donut;
