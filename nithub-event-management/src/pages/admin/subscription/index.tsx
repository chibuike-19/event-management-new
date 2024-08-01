import { useState } from "react";
import Navbar from "../../../components/layout/navbar"
import { Sidebar } from "../../../components/layout/sidebar"
import { subscriptionsPlan } from "../../../data-helpers/admin-data";


export const Subscriptions = () => {
  const [subscribers, setSubscribers] = useState(false);

    return (
      <div>
        <Navbar />
        <Sidebar />
        <div className="pl-36 pr-5">
          <div className="flex gap-4 items-center mb-6">
            <div
              className={`${
                subscribers ? "inactive" : "active"
              } py-2 px-4 rounded-md`}
              onClick={() => setSubscribers(false)}
            >
              <button>Subscription</button>
            </div>
            <div
              className={`${
                subscribers ? "active" : "inactive"
              } py-2 px-4 rounded-md`}
              onClick={() => setSubscribers(true)}
            >
              <button>Subscribers</button>
            </div>
          </div>
          <div className="flex gap-6 flex-col xl:flex-row items-start">
            <div className="flex flex-col gap-4 max-w-[700px] p-8 rounded-lg bg-[#F7F7F7]">
              <div className="border border-black rounded-lg p-4 bg-white">
                <span>Current Plan</span>

                <h2 className="font-bold text-[28px]">Free Trial</h2>
                <div className="grid grid-cols-2">
                  <p>pay per event based on its size</p>
                  <p>Pay from your ticket sales for no upfront cost</p>
                  <p>Send 450 marketing emails a day</p>
                  <p>Access all-in-one event ticketing and marketing tools </p>
                </div>
              </div>
              <div className="flex bg-white gap-5">
                {subscriptionsPlan.map((plan, indx) => (
                  <div
                    key={indx}
                    className="border border-black rounded-lg p-4"
                  >
                    <div className="flex justify-between">
                      <h3>{plan.title}</h3>
                      <span>{plan.discount} Discount</span>
                    </div>
                    <div className="mt-4">
                      <p className="font-bold">{plan.price}</p>
                    </div>
                    <div>
                      {plan.options.map((item) => (
                        <p className="mb-3">{item}</p>
                      ))}
                    </div>
                    <div className="bg-[#099137] flex justify-center py-3 items-center rounded-lg mt-4 cursor-pointer">
                      <button className="text-white">Edit</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="border-2 px-8 py-6 border-[#eeebeb] rounded-lg h-full">
              <h4>Create Subcription Plan</h4>
              <form action="" className="mt-4">
                <div className="flex flex-col">
                  <label htmlFor="">Plan Name</label>
                  <input
                    type="text"
                    className="border border-[#3f3c3co]  rounded-lg px-4 py-2"
                    name=""
                    id=""
                  />
                </div>
                <div className="grid grid-cols-2 gap-3 mt-4">
                  <div className="flex flex-col">
                    <label htmlFor="">Plan Name</label>
                    <input
                      type="text"
                      className="border border-[#3f3c3co]  rounded-lg px-4 py-2"
                      name=""
                      id=""
                    />
                  </div>
                  <div className="flex flex-col ">
                    <label htmlFor="">Plan Name</label>
                    <input
                      type="text"
                      className="border border-[#3f3c3co]  rounded-lg px-4 py-2"
                      name=""
                      id=""
                    />
                  </div>
                </div>
                <div className="flex flex-col mt-4">
                  <label htmlFor="">Plan Features</label>
                  <textarea
                    name=""
                    id=""
                    className="border border-[#3f3c3co]  rounded-lg px-4 py-2"
                    cols={40}
                    rows={5}
                  ></textarea>
                </div>
                <div className="flex justify-around items-center pt-12 pb-6">
                  <div>
                    <button className="bg-[#099137] px-8 py-2 rounded-md text-white">
                      Save
                    </button>
                  </div>
                  <div>
                    <button className="bg-[#e0dede] px-8 py-2 rounded-md">
                      Cancel
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
}