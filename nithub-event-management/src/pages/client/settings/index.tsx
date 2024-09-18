import { useState } from "react";
import Navbar from "../../../components/layout/navbar";
import { Sidebar } from "../../../components/layout/sidebar";
import { Table, Checkbox } from "antd";


export const Settings = () => {
  const [ToggleSettings, setToggelSettings] = useState(true);
  const [editCard, setEditCard] = useState(false);
  const [editBank, setEditBank] = useState(false);

  const [activeTab, setActiveTab] = useState("Profile");
  const openTab = (tabName: string) => {
    setActiveTab(tabName);
  };

  const profileData = {
    Profile: {
      profilePic: '',
      fullname: 'David Ogunbiyi',
      email: 'ogunbs@gmail.com',
      phoneno: '0903455347'
    },
    Role: {
      role: 'Admin',
      locaiton: 'Alausa Ikeja Lagos, Nigeria',
      Date_joined: '13th May, 2024'
    }
  }

  const billingData = [
    {
      key: "1",
      invoice: "Monthly event mgt",
      date: "13th May, 2034",
      amount: "$10,000",
      status: "Pending",
      trackingId: "LN8965907DCN",
    },
    {
      key: "2",
      invoice: "Year event mgt",
      date: "13th May, 2034",
      amount: "$300,000",
      status: "Cancelled",
      trackingId: "LN8965907DCN",
    },
    {
      key: "3",
      invoice: "May event mgt",
      date: "13th May, 2034",
      amount: "$20,000",
      status: "Paid",
      trackingId: "LN8965907DCN",
    },
    {
      key: "4",
      invoice: "Monthly event mgt",
      date: "13th May, 2034",
      amount: "$10,000",
      status: "Paid",
      trackingId: "LN8965907DCN",
    },
  ];

  const Billingcolumns = [
    {
      title: "Invoice #",
      dataIndex: "invoice",
      key: "invoice",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status: "Pending" | "Cancelled" | "Paid") => {
        const statusColors = {
          Pending: "text-yellow-600",
          Cancelled: "text-red-600",
          Paid: "text-green-600",
        };
        return <span className={statusColors[status]}>{status}</span>;
      },
    },
    {
      title: "Tracking ID",
      dataIndex: "trackingId",
      key: "trackingId",
    },
  ];

  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className="pl-36 pr-5">
        <div className="p-8 space-y-8">
          {/* Tab Navigation */}
          <div className="flex space-x-4 border-b pb-2">
            <div
              className={` p-2 cursor-pointer border-b-2 border-transparent ${activeTab === "Profile" ? "border-b-green" : ""
                }`}
              onClick={() => openTab("Profile")}
              style={{ color: activeTab === "Profile" ? "black" : "#868686", fontWeight: activeTab === "Profile" ? "bold" : "300", borderBottomColor: activeTab === "Profile" ? "#099137" : "white" }}
            >
              Profile
            </div>
            <div
              className={` p-2 cursor-pointer border-b-2 border-transparent ${activeTab === "Billings" ? "border-b-green" : ""
                }`}
              onClick={() => openTab("Billings")}
              style={{ color: activeTab === "Billings" ? "black" : "#868686", fontWeight: activeTab === "Billings" ? "bold" : "300", borderBottomColor: activeTab === "Billings" ? "#099137" : "white" }}
            >
              Billings
            </div>
          </div>

          {/* Profile Tab */}
          <div
            id="Profile"
            className="city-content"
            style={{ display: activeTab === "Profile" ? "block" : "none" }}
          >
            <div className="flex flex-col gap-8">
              <div>
                <h1 className="font-bold bg-[#F2F2F2] rounded-t-2xl px-5 py-3">Personal Details</h1>
                <div>
                  <div className="flex flex-row justify-between items-center px-5 py-3 border-[#EDEDED] border">
                    <h3 className="">Profile photo</h3>
                    {profileData.Profile.profilePic ? "1" : <div className="rounded-full px-3 py-2 bg-[#F2F2F2] font-bold">{profileData.Profile.fullname[0]}</div>}
                    <button className=" underline cursor-pointer text-[11px]">Edit</button>
                  </div>
                  <div className="flex flex-row justify-between items-center text-left px-5 py-3 border-[#EDEDED] border">
                    <h3 className="">Full name</h3>
                    <h3>{profileData.Profile.fullname}</h3>
                    <button className=" underline cursor-pointer text-[11px]">Edit</button>
                  </div>
                  <div className="flex flex-row justify-between items-center text-left px-5 py-3 border-[#EDEDED] border">
                    <h3 className="">Email address</h3>
                    <h3>{profileData.Profile.email}</h3>
                    <button className=" underline cursor-pointer text-[11px]">Edit</button>
                  </div>
                  <div className="flex flex-row justify-between items-center text-left px-5 py-3 border-[#EDEDED] border rounded-b-2xl">
                    <h3 className="">Phone number</h3>
                    <h3 className="flex flex-row justify-start">{profileData.Profile.phoneno}</h3>
                    <button className=" underline cursor-pointer text-[11px]">Edit</button>
                  </div>
                </div>
              </div>

              <div>
                <h1 className="font-bold bg-[#F2F2F2] rounded-t-2xl px-5 py-3">Role Details</h1>
                <div>
                  <div className="flex flex-row justify-between items-center px-5 py-3 border-[#EDEDED] border">
                    <h3 className="">Role</h3>
                    <div>{profileData.Role.role}</div>
                    <button className=" underline cursor-pointer text-[11px]">Edit</button>
                  </div>
                  <div className="flex flex-row justify-between items-center px-5 py-3 border-[#EDEDED] border">
                    <h3 className="">Location</h3>
                    <div>{profileData.Role.locaiton}</div>
                    <button className=" underline cursor-pointer text-[11px]">Edit</button>
                  </div>
                  <div className="flex flex-row justify-between items-center px-5 py-3 border-[#EDEDED] border rounded-b-2xl">
                    <h3 className="">Date joined</h3>
                    <div>{profileData.Role.Date_joined}</div>
                    <button className=" underline cursor-pointer text-[11px]">Edit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Billings Tab */}
          <div
            id="Billings"
            className="city-content"
            style={{ display: activeTab === "Billings" ? "block" : "none" }}
          >
            {/* Payment Method Section */}

            <section className="space-y-6">
              <h2 className="text-xl font-semibold">Payment Method</h2>
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4 w-full md:w-2/3">
                  <div className="space-y-2">
                    <label className="block text-gray-600 text-sm font-bold">
                      Name on card
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      readOnly={!editCard}
                      type="text"
                      placeholder="David Ogunleye"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-gray-600 text-sm font-bold">
                      Expiry
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      readOnly={!editCard}
                      type="text"
                      placeholder="04/2034"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4 w-full md:w-2/3">
                  <div className="space-y-2">
                    <label className="block text-gray-600 text-sm font-bold">
                      Card number
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      readOnly={!editCard}
                      type="text"
                      placeholder="4567 6798 6789 4567"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-gray-600 text-sm font-bold">
                      CVV
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      readOnly={!editCard}
                      type="password"
                      placeholder="•••"
                    />
                  </div>
                </div>
                <button
                  onClick={() => setEditCard((prev) => !prev)}
                  className="text-green-500 font-bold"
                >
                  {editCard ? "Save" : "+ Add another card"}
                </button>
              </div>
            </section>

            {/* Bank Information Section */}
            <section className="space-y-6">
              <h2 className="text-xl font-semibold pt-4">Bank Information</h2>
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4 w-full md:w-2/3">
                  <div className="space-y-2">
                    <label className="block text-gray-600 text-sm font-bold">
                      Account holder's name
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      readOnly={!editBank}
                      type="text"
                      placeholder="David Ogunleye"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-gray-600 text-sm font-bold">
                      Bank name
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      readOnly={!editBank}
                      type="text"
                      placeholder="GTB"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="block text-gray-600 text-sm font-bold">
                    Account number
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full md:w-1/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    readOnly={!editBank}
                    type="text"
                    placeholder="022 456 7854"
                  />
                </div>
                <button
                  onClick={() => setEditBank((prev) => !prev)}
                  className="text-green-500 font-bold"
                >
                  {editBank ? "Save" : "+ Add another bank details"}
                </button>
              </div>
            </section>

            {/* Contact Email Section */}
            <section className="space-y-6">
              <h2 className="text-xl font-semibold pt-4">Contact Email</h2>
              <div className="space-y-2">
                <label className="block text-gray-600 text-sm font-bold">
                  Update your billing details and address
                </label>
                <div className="flex items-center space-x-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="contact-email"
                      className="form-radio h-4 w-4 text-green-500"
                      defaultChecked
                    />
                    <span className="ml-2 text-gray-700">
                      Send to current email address (ogundavid@gmail.com)
                    </span>
                  </label>
                </div>
                <div className="flex items-center space-x-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="contact-email"
                      className="form-radio h-4 w-4 text-green-500"
                    />
                    <span className="ml-2 text-gray-700">
                      Add another email address
                    </span>
                  </label>
                </div>
              </div>
            </section>

            {/* Billing History Section */}
            <section className="space-y-6 mb-6">
              <h2 className="text-xl font-semibold pt-4">Billing History</h2>
              <div className="overflow-x-auto">
                <Table
                  columns={Billingcolumns}
                  dataSource={billingData}
                  pagination={false}
                />
              </div>
            </section>
          </div>

        </div>
      </div>
    </div>
  );
};