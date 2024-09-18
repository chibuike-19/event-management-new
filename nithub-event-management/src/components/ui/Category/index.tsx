"use client"
import { useEffect, useState } from "react";
import EventsCard from "../EventCard";
import EventList from "../EventList";
import { AddIcon } from "../../../assets/svg/sidebar/svg-export";
import { Button } from "../Button";
import { useNavigate } from "react-router-dom";

type CategoryProps = {
    // getData?: Function,
    tabs: Data[]
}

type Data = {
    name: string;
    data: [
        {
            id: string;
            tag: string;
        }
    ]
}

// type Data = {
//     name: string;
//     data: any[]
// }

function getData() {
    // Fetch data from your API here.
    return [
        {
            id: "m5gr84i9",
            tag: 'Upcoming',
        },
        {
            id: "3u1reuv4",
            tag: 'Upcoming',
        },
        {
            id: "m5gr84i9",
            tag: 'Past',
        },
        {
            id: "derv1ws0",
            tag: 'Upcoming',
        },
        {
            id: "m5gr84i9",
            tag: 'Upcoming',
        },
        {
            id: "m5gr84i9",
            tag: 'Upcoming',
        },
        {
            id: "m5gr84i9",
            tag: 'Past',
        },
        {
            id: "3u1reuv4",
            tag: 'Upcoming',
        },
        {
            id: "3u1reuv4",
            tag: 'Upcoming',
        },
    ]
}

/**
 * Category component that renders a section like tab that renders different view depending on the tab clicked on.
 * @param {CategoryProps} props - The props object containing getData, .
 * @returns {JSX.Element} - Category component JSX.
 */
export default function Category() {
    const data = getData();
    const navigate = useNavigate();


    const [activeTab, setActiveTab] = useState("Upcoming");

    const [Upcoming, setUpcoming] = useState<{ id: string; tag: string; }[]>([]);
    const [Past, setPast] = useState<{ id: string; tag: string; }[]>([]);

    const openTab = (tabName: string) => {
        setActiveTab(tabName);
    };

    const filterData = () => {
        const UpcomingData = data.filter(obj => obj.tag === 'Upcoming');
        const PastData = data.filter(obj => obj.tag === 'Past');

        setUpcoming(UpcomingData);
        setPast(PastData);
    };

    useEffect(() => {
        filterData();
    }, []);

    useEffect(() => {
        console.log(Upcoming);
        console.log(Past);
    }, [Upcoming, Past]); // Run this effect when Upcoming or Past changes

    return (
        <div className="container mx-auto p-4 bg-white">
            <div className="flex border-b justify-between">
                <div className="flex border-b flex-row">
                    <div
                        className={` p-2 cursor-pointer border-b-2 border-transparent ${activeTab === "Upcoming" ? "border-b-green" : ""
                            }`}
                        onClick={() => openTab("Upcoming")}
                        style={{ color: activeTab === "Upcoming" ? "black" : "#868686", fontWeight: activeTab === "Upcoming" ? "bold" : "300", borderBottomColor: activeTab === "Upcoming" ? "#099137" : "white" }}
                    >
                        Upcoming
                        <span className=" text-[#868686] text-sm bg-[#D9D9D9] ml-1 py-1 px-2 rounded-lg">
                            {Upcoming.length}
                        </span>
                    </div>
                    <div
                        className={`p-2 cursor-pointer border-b-2 border-transparent   ${activeTab === "Past" ? "border-b-green" : ""
                            }`}
                        onClick={() => openTab("Past")}
                        style={{ color: activeTab === "Past" ? "black" : "#868686", fontWeight: activeTab === "Past" ? "bold" : "300", borderBottomColor: activeTab === "Past" ? "#099137" : "white" }}
                    >
                        Past
                        <span className=" text-[#868686] text-sm bg-[#D9D9D9] ml-1 py-1 px-2 rounded-lg">
                            {Past.length}
                        </span>
                    </div>
                </div>
                <div className="pb-1">
                    <Button
                        variant="contained"
                        label={
                            <div className="flex items-center gap-3">
                                <AddIcon />
                                Create Event
                            </div>
                        }
                        className="rounded-full"
                        onClick={() => navigate("/events/create-event")}
                    />
                </div>
            </div>

            <div
                id="Upcoming"
                className="city-content"
                style={{ display: activeTab === "Upcoming" ? "block" : "none" }}
            >
                <EventList data={Upcoming} />
            </div>
            <div
                id="Past"
                style={{ display: activeTab === "Past" ? "block" : "none" }}
            >
                <EventList data={Past} />
            </div>
        </div>
    );
}

const getHeading = (data: any) => {
    // Concatenate all keys into a single list
    let allKeys: string[] = data.reduce((keys: any, obj: any) => {
        return keys.concat(Object.keys(obj));
    }, []);

    // Remove duplicates and 'id' key
    const heading: string[] = Array.from(new Set(allKeys.filter(key => key !== 'id')));
    return heading;
}