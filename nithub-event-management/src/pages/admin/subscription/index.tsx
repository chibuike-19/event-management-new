import { useState } from "react";
import Navbar from "../../../components/layout/navbar"
import { Sidebar } from "../../../components/layout/sidebar"
import { Subscribers } from "../../../components/ui/Subcribers";
import Subcription from "../../../components/ui/Subcription";


export const Subscriptions = () => {
  const [subscribers, setSubscribers] = useState(false);

  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className="pl-36 pr-5">
        <div className="flex gap-4 items-center mb-6">
          <div
            className={`${subscribers ? "inactive" : "active"
              } py-2 px-4 rounded-md`}
            onClick={() => setSubscribers(false)}
          >
            <button>Subscription</button>
          </div>
          <div
            className={`${subscribers ? "active" : "inactive"
              } py-2 px-4 rounded-md`}
            onClick={() => setSubscribers(true)}
          >
            <button>Subscribers</button>
          </div>
        </div>

        <div
          id="Subscription"
          style={{ display: subscribers ? "none" : "block" }}
        >
          <Subcription />
        </div>
        <div
          id="Subscribers"
          style={{ display: subscribers ? "block" : "none" }}
        >
          <div>
            <Subscribers />
          </div>
        </div>

      </div>
    </div>
  );
}