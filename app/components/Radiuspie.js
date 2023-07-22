"use client"
import React, { useEffect } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from '@amcharts/amcharts4/charts';
// import am4themes_animated from '@amcharts/amcharts4/themes/animated';

// am4core.useTheme(am4themes_animated);
const Radiuspie = () => {
  useEffect(() => {
    let chart = am4core.create('radiuspie', am4charts.PieChart);
    if (chart.logo) {
      chart.logo.disabled = true;
    }
    chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

    chart.data = [
      {
        country: "Lithuania",
        value: 260
      },
      {
        country: "Czechia",
        value: 230
      },
      {
        country: "Ireland",
        value: 200
      },
      {
        country: "Germany",
        value: 165
      },
      {
        country: "Australia",
        value: 139
      },
      {
        country: "Austria",
        value: 128
      }
    ];

    var series = chart.series.push(new am4charts.PieSeries());
    series.dataFields.value = "value";
    series.dataFields.radiusValue = "value";
    series.dataFields.category = "country";
    series.slices.template.cornerRadius = 6;
    series.colors.step = 3;

    series.hiddenState.properties.endAngle = -90;

    // chart.legend = new am4charts.Legend();

    return () => {
      chart.dispose();
    };
  }, []);

  return <div id="radiuspie" style={{ width: '100%', height: '100%', marginTop: '10px' }} />;
};

export default Radiuspie;
