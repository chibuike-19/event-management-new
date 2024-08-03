import { useState } from "react";
import Navbar from "../../../components/layout/navbar";
import { Sidebar } from "../../../components/layout/sidebar";



export const Settings = () => {
    const [ToggleSettings, setToggelSettings] = useState(true);
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className="pl-36 pr-5">
        <div className="flex gap-4 items-center mb-6">
          <div
            className={`${
              ToggleSettings ? "active" : "inactive"
            } py-2 px-4 rounded-md`}
            onClick={() => setToggelSettings(true)}
          >
            <button>Profile</button>
          </div>
          <div
            className={`${
              ToggleSettings ? "inactive" : "active"
            } py-2 px-4 rounded-md`}
            onClick={() => setToggelSettings(false)}
          >
            <button>Billings</button>
          </div>
        </div>
      </div>
    </div>
  );
};