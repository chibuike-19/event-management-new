
import Chart from "react-apexcharts";

type mixedChartType = {
    xCategories: string[],
    lineData: number[],
    colunnData: number[],
}

export default function MixedChart({xCategories, lineData, colunnData}: mixedChartType) {
  const optionsMixedChart = {
    chart: {
      id: "basic-bar",
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        columnWidth: "20%",
      },
    },
    fill: {
      colors: ["#099137"],
    },
    stroke: {
      width: [4, 0, 0],
    },
    xaxis: {
      categories: {xCategories},
    },
    markers: {
      size: 6,
      strokeWidth: 3,
      fillOpacity: 0,
      strokeOpacity: 0,
      hover: {
        size: 8,
      },
      colors: ["#EE7450"],
    },
    yaxis: {
      tickAmount: 5,
      min: 0,
      max: 100,
      style: {
        colors: ["#EE7450"],
      },
    },
  };
  const seriesMixedChart = [
    {
      name: "series-1",
      type: "line",
      data: lineData,
    },
    {
      name: "series-2",
      type: "column",
      data: colunnData,
    },
  ];

  // console.log(userData.role)

  return (
    <div className="">
       <Chart
            options={optionsMixedChart}
            series={seriesMixedChart}
            type="line"
            height="400px"
          />
    </div>
  );
};
