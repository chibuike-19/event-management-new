import { EventsData } from "../../assets/svg/sidebar/svg-export";
import Navbar from "../../components/layout/navbar";
import { Sidebar } from "../../components/layout/sidebar";
import DataCard from "../../components/ui/DateCard";
import Chart from "react-apexcharts";
import { cardData } from "../../data-helpers/admin-data";
import { useContext } from "react";
import { AuthContext } from "../../context/auth-service";

export const AdminHome = () => {
  const { userData } = useContext(AuthContext);

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
      categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
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
      data: [30, 40, 25, 50, 49, 21, 70, 51],
    },
    {
      name: "series-2",
      type: "column",
      data: [23, 12, 54, 61, 32, 56, 81, 19],
    },
  ];

  // console.log(userData.role)

  return (
    <div className="">
      <Navbar />
      <Sidebar />
      <div className="pl-36 px-5 md:pr-10">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 md:gap-4 xl:gap-8">
          {cardData.map((card) => (
            <DataCard
              name={card.name}
              number={card.number}
              icon={<EventsData />}
              color={card.color}
              bg={card.bgColor}
            />
          ))}
        </div>
        <div className="w-full border rounded-xl mt-8 border-[E2E2E2]">
          <h2 className="text-[#000000] text-[20px] font-[700] pl-4 pt-4">
            Revenue Metrics
          </h2>
          <Chart
            options={optionsMixedChart}
            series={seriesMixedChart}
            type="line"
            height="400px"
          />
        </div>
      </div>
    </div>
  );
};
