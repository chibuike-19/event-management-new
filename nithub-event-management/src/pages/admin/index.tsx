import { ArrowDownIcon, EventsData } from "../../assets/svg/sidebar/svg-export";
import Navbar from "../../components/layout/navbar";
import { Sidebar } from "../../components/layout/sidebar";
import DataCard from "../../components/ui/DateCard";
import Chart from "react-apexcharts";
import { cardData } from "../../data-helpers/admin-data";
import { useContext } from "react";
import { AuthContext } from "../../context/auth-service";
import MixedChart from "../../components/ui/MixedChart";
import ScatterChart from "../../components/ui/ScatterChart";

export const AdminHome = () => {
  const { userData } = useContext(AuthContext);
  // console.log(userData.role)

  const dataScatterChart = {
    "Giz": [
      new Date('20 Oct 2024 10:00 GMT').getTime(),
      new Date('22 Oct 2024 12:00 GMT').getTime(),
      new Date('23 Oct 2024 09:45 GMT').getTime(),
      new Date('25 Oct 2024 20:30 GMT').getTime(),
      new Date('26 Oct 2024 21:00 GMT'),
    ].map(timestamp => {
      const date = new Date(timestamp); // Convert timestamp to Date object
      const hours = date.getUTCHours(); // Extract hours (in UTC)
      const dayOfWeek = date.getUTCDay() || 7; // Get the day of the week (1 = Monday, 7 = Sunday)
      return [hours, dayOfWeek]; // Return [hour, dayOfWeek] for plotting
    }),
    "UNCP": [
      new Date('21 Oct 2024 16:30 GMT').getTime(),
      new Date('22 Oct 2024 10:00 GMT').getTime(),
      new Date('24 Oct 2024 9:00 GMT').getTime(),
      new Date('25 Oct 2024 8:30 GMT').getTime(),
      new Date('26 Oct 2024 21:00 GMT'),
    ].map(timestamp => {
      const date = new Date(timestamp);
      const hours = date.getUTCHours();
      const dayOfWeek = date.getUTCDay() || 7;
      return [hours, dayOfWeek];
    }),
    "Strive": [
      new Date('20 Oct 2024 10:00 GMT').getTime(),
      new Date('21 Oct 2024 12:30 GMT').getTime(),
      new Date('23 Oct 2024 09:45 GMT').getTime(),
      new Date('25 Oct 2024 15:30 GMT').getTime(),
      new Date('26 Oct 2024 10:00 GMT'),
    ].map(timestamp => {
      const date = new Date(timestamp);
      const hours = date.getUTCHours();
      const dayOfWeek = date.getUTCDay() || 7;
      return [hours, dayOfWeek];
    }),
    "CC-hub": [
      new Date('21 Oct 2024 12:30 GMT').getTime(),
      new Date('22 Oct 2024 14:00 GMT').getTime(),
      new Date('24 Oct 2024 16:00 GMT').getTime(),
      new Date('25 Oct 2024 19:30 GMT').getTime(),
    ].map(timestamp => {
      const date = new Date(timestamp);
      const hours = date.getUTCHours();
      const dayOfWeek = date.getUTCDay() || 7;
      return [hours, dayOfWeek];
    }),
  }

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
          <MixedChart xCategories={["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]} lineData={[30, 40, 25, 50, 49, 21, 70, 51]} colunnData={[23, 12, 54, 61, 32, 56, 81, 19]} />
        </div>

        <div className="flex flex-row bg-[#F6F6F6] border border-[#E6E6E6] p-6 gap-6">
          <div className="w-1/2 rounded-2xl p-6 border-2 border-[#CACACA] bg-white relative">
            <h2 className="text-2xl font-bold">Top Organizers</h2>
            <div className="flex flex-col items-center justify-center p-6">
              <div className="flex items-center justify-center text-center w-fit h-full">
                <div className="font-bold relative">
                  <div className="rounded-full w-[15vw] h-[15vw] bg-black flex items-center justify-center z-0 -ml-[5vw]">
                    <h2 className="text-white text-center text-[1.5vw]">GIZ</h2>
                  </div>
                  <div className="rounded-full w-[12vw] h-[12vw] bg-[#FEF8E2] flex items-center absolute justify-center z-10 ml-[5vw] -mt-[17vw]">
                    <h2 className="text-black text-center text-[1.5vw]">Others</h2>
                  </div>
                  <div className="rounded-full w-[10vw] h-[10vw] bg-[#E1E9FE] flex items-center absolute justify-center z-20 ml-[5vw] -mt-[8vw]">
                    <h2 className="text-black text-center text-[1.5vw]">CC-hub</h2>
                  </div>
                  <div className="rounded-full w-[5vw] h-[5vw] bg-[#F9D5ED] flex items-center absolute justify-center z-30 ml-[12vw] -mt-[9vw]">
                    <h2 className="text-black text-center text-[1.2vw]">Strive</h2>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div className="w-1/2 rounded-2xl p-6 border-2 border-[#CACACA] bg-white">
            <div className="flex flex-row justify-between items-center">
              <h2 className="text-2xl font-bold">Schedule</h2>
              <button className="p-1 border font-bold flex flex-row rounded-lg">Weekly <span className="text-lg"><ArrowDownIcon/></span></button>
            </div>
            <div>
              <ScatterChart data={dataScatterChart} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
