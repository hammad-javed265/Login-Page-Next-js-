"use client"
import React, { useEffect } from 'react';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
// import am4themes_animated from '@amcharts/amcharts4/themes/animated';

// am4core.useTheme(am4themes_animated);
const Sankey = () => {
    useEffect(() => {
        let chart = am4core.create('chartdiv', am4charts.SankeyDiagram);
        if (chart.logo) {
            chart.logo.disabled = true;
        }
        chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

        chart.data = [
            { from: "A", to: "D", value: 10 },
            { from: "B", to: "D", value: 8 },
            { from: "B", to: "E", value: 4 },
            { from: "C", to: "E", value: 3 },
            { from: "D", to: "G", value: 5 },
            { from: "D", to: "I", value: 2 },
            { from: "D", to: "H", value: 3 },
            { from: "E", to: "H", value: 6 },
            { from: "G", to: "J", value: 5 },
            { from: "I", to: "J", value: 1 },
            { from: "H", to: "J", value: 9 }
        ];

        let hoverState = chart.links.template.states.create("hover");
        hoverState.properties.fillOpacity = 0.8;
        chart.dataFields.fromName = "from";
        chart.dataFields.toName = "to";
        chart.dataFields.value = "value";
        // for right-most label to fit
        // chart.paddingRight = 120;
        // Add title
        chart.titles.template.fontSize = 20;
        var title = chart.titles.create();
        title.text = "Energy Flow";
        // Set the title color to white
        title.fill = am4core.color("#FFFFFF");
        chart.nodes.template.nameLabel.label.truncate = false;
        chart.nodes.template.nameLabel.label.wrap = true;
        // configure nodes
        var nodeTemplate = chart.nodes.template;
        nodeTemplate.nameLabel.label.text = "{toName}";
        nodeTemplate.nameLabel.label.truncate = true;
        nodeTemplate.nameLabel.label.maxWidth = 200;
        nodeTemplate.nameLabel.label.fontSize = 12;

        nodeTemplate.inert = true;
        nodeTemplate.readerTitle = "Drag me!";
        nodeTemplate.showSystemTooltip = true;
        nodeTemplate.stroke = am4core.color("#fff");
        nodeTemplate.strokeWidth = 2;
        // nodeTemplate.nameLabel.label.fontWeight = "bold";
        //   nodeTemplate.width = 35;
        // nodeTemplate.padding(5, 20, 10, 20); // Adjust the top, right, bottom, and left padding values as per your requirement
        // nodeTemplate.margin(50);
        // Configure links
        var linkTemplate = chart.links.template;
        linkTemplate.colorMode = "gradient";
        linkTemplate.fillOpacity = 0.4; // Adjust the opacity of the link color
        // Create a gradient for the link colors
        var gradient = new am4core.LinearGradient();
        gradient.addColor(am4core.color("#FF0000")); // Start color
        gradient.addColor(am4core.color("#00FF00")); // End color
        linkTemplate.fill = gradient;
        // Add labels to link nodes
        // Add text to the tooltip using a JavaScript variable
        var tooltipText = "{fromName} → {toName}\n [bold]{value} kWh";
        linkTemplate.tooltipText = tooltipText;
        // make nodes draggable
        var nodeTemplate = chart.nodes.template;
        nodeTemplate.readerTitle = "Click to show/hide or drag to rearrange";
        nodeTemplate.showSystemTooltip = true;
        nodeTemplate.cursorOverStyle = am4core.MouseCursorStyle.pointer;
        var linkTemplate = chart.links.template;
        linkTemplate.colorMode = "gradient";

        return () => {
            chart.dispose();
        };
    }, []);

    return <div id="chartdiv" className='w-full h-full' />;
};


export default Sankey
