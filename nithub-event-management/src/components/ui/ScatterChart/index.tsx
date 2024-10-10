
import Chart from "react-apexcharts";
// import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from "apexcharts";

type scatterChartType = {
  data: {
    "Giz": number[][],
    "UNCP": number[][],
    "Strive": number[][],
    "CC-hub": number[][],
  }
}


export default function ScatterChart({ data }: scatterChartType) {
  const series = [
    {
      name: "GIZ",
      data: data.Giz,
    },
    {
      name: "UNCP",
      data: data.UNCP,
    },
    {
      name: "Strive",
      data: data.Strive,
    },
    {
      name: "cc-hub",
      data: data["CC-hub"],
    },
  ];

  const options: ApexOptions = {
    chart: {
      height: 350,
      type: 'scatter',
      zoom: {
        enabled: true,
        type: 'xy',
      },
      animations: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    colors: ['#1C1D22', '#FEF8E2', '#E1E9FE', '#F9D5ED'],
    dataLabels: {
      enabled: false,
    },
    grid: {
      xaxis: {
        lines: {
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    xaxis: {
      title: {
        text: "Time of Day (Hours)",
      },
      tickAmount: 6, // Setting the number of ticks, dividing the 24 hours into intervals (12 ticks = 2-hour intervals)
      labels: {
        formatter: function (val: string) {
          return `${parseFloat(val)}:00`; // Display as time (e.g., 9:00, 10:00)
        },
      },
      min: 8,
      max: 20,
    },
    yaxis: {
      title: {
        text: "Day of the Week",
      },
      labels: {
        formatter: function (value: number) {
          const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
          return daysOfWeek[value - 1]; // Convert numeric day (1-7) to day name
        },
      },
      min: 7, // Sunday
      max: 1, // Monday
    },
    markers: {
      size: 14
    },
    // legend: {
    //   labels: {
    //     useSeriesColors: true
    //   },
    //   markers: {
    //     customHTML: (): any => {
    //       return [
    //         () => "<div style={{fontSize: 10px, backgroundColor: '#1C1D22' }}>GIZ</div>",
    //         () => '<div>UNCP</div',
    //         () => '<div>Strive</div',
    //         () => '<div>CC-hub</div',
    //       ]
    //     },
    //   }
    // }
  };

  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={options}
          series={series}
          type="scatter"
          height="350px"
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
}
