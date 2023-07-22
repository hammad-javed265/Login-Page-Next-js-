"use client"
import React, { Component } from 'react'
import Chart from 'react-google-charts'
const gaugeData = [
  ['Label', 'Value'],
  ['kW', 80],
  ['A', 55],
  ['V', 68],
]
class GaugeChart extends Component {
  render() {
    return (
      <div className="container h-[100%] w-[100%] pt-14">
        {/* <h2>React Gauge Chart Example</h2> */}
         <Chart
                 height={null}
                 width={null}
                chartType="Gauge"
                // loader={<div>Loading Chart</div>}
                data={gaugeData}
                options={{
                  redFrom: 90,
                  redTo: 100,
                  yellowFrom: 75,
                  yellowTo: 90,
                  minorTicks: 5,
                }}
                rootProps={{ 'data-testid': '1' }}
              />
      </div>
    )
  }
}
export default GaugeChart