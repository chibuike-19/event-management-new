import { EventsData } from "../../assets/svg/sidebar/svg-export";
import Navbar from "../../components/layout/navbar";
import { Sidebar } from "../../components/layout/sidebar";
import DataCard from "../../components/ui/DateCard";
import Chart from "react-apexcharts";
import { cardData } from "../../data-helpers/client-data";
import { ChangeEvent, useContext, useState } from "react";
import { AuthContext } from "../../context/auth-service";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from 'apexcharts';
import EventsCard from "../../components/ui/EventCard";

export const ClientHome = () => {
    const { userData } = useContext(AuthContext);
    const [selectedValue, setSelectedValue] = useState<'Month' | 'Year'>('Month');;

    const options = [
        { value: 'Month', label: 'Month' },
        { value: 'Year', label: 'Year' },
    ];

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newValue = e.target.value as 'Month' | 'Year';
        setSelectedValue(newValue);
        
        setChartData((prevState) => ({
            ...prevState,
            options: {
              ...prevState.options,
              xaxis: {
                ...prevState.options.xaxis,
                categories: data[newValue].categories
              },
              yaxis: {
                ...prevState.options.yaxis,
                max: data[newValue].max
              }
            },
            series: data[newValue].series
          }));
    };

    const data = {
        'Month': {
            max: 130,
            series: [
                {
                    name: 'Attended',
                    data: [74, 55, 57, 56, 61, 58, 83, 60, 66, 35, 56, 21],
                },
                {
                    name: 'Registered',
                    data: [76, 85, 101, 98, 87, 105, 91, 114, 94, 63, 60, 66],
                },
            ],
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        },
        'Year': {
            max: 70000,
            series:[
                {
                    name: 'Attended',
                    data: [10450, 45000, 50700, 26000, 46111, 48000, 22083, 60000, 36600, 33550],
                },
                {
                    name: 'Registered',
                    data: [31000, 55600, 61010, 39800, 48700, 48950, 22910, 64000, 36940, 36000],
                },
            ],
            categories: [2016, 2017, 2018, 2019, 2020, 2021, 2021, 2022, 2023, 2024]
        }
    }

    const [chartData, setChartData] = useState<{
        series: {
            name: string;
            data: number[];
        }[];
        options: ApexOptions;
    }>({
        series: [
            {
                name: 'Attended',
                data: [74, 55, 57, 56, 61, 58, 83, 60, 66, 35, 56, 21],
            },
            {
                name: 'Registered',
                data: [76, 85, 101, 98, 87, 105, 91, 114, 94, 63, 60, 66],
            },
        ],
        options: {
            chart: {
                type: 'bar',
                height: 350,
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '25%',
                    borderRadius: 5,
                    borderRadiusApplication: 'end'
                },
            },
            colors: ['#099137', '#EE7450'],
            dataLabels: {
                enabled: false,
            },
            stroke: {
                show: true,
                width: 2,
                colors: ['transparent'],
            },
            xaxis: {
                categories: data[`${selectedValue}`].categories
            },
            yaxis: {
                tickAmount: 5,
                min: 0,
                max: data[`${selectedValue}`].max,
                labels: {
                    style: {
                        colors: ["black"],
                    },
                }
                // title: {
                //   text: '$ (thousands)',
                // },
            },
            fill: {
                opacity: 1,
            },
            tooltip: {
                y: {
                    formatter: function (val: number) {
                        return `${val}`;
                    },
                },
            },
        },
    });

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
                    <div className="flex flex-row justify-between p-4">
                        <h2 className="text-[#000000] text-[20px] font-[700] pl-4 pt-4">
                            Metrics
                        </h2>
                        <div className="border border-[#099137] rounded-lg p-1 text-white flex items-center">
                            <select
                                value={selectedValue} onChange={handleChange} className=" bg-[#099137] rounded-md p-2"
                            >
                                {options.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div id="chart">
                        <ReactApexChart options={chartData.options} series={chartData.series} type="bar" height={350} />
                    </div>
                    <div id="html-dist"></div>
                </div>

                <div>
                    <p className=" font-extrabold pt-5">Recent events</p>
                    <div>
                        <EventsCard tag="none" />
                        <EventsCard tag="none" />
                    </div>
                </div>
            </div>
        </div>
    );
};
