import { useState } from "react";
import Navbar from "../../../components/layout/navbar";
import { Sidebar } from "../../../components/layout/sidebar";
import { Table, TableColumnsType, TableProps } from "antd";
import { parseDate } from "../../../utils/sort-dates";

export const Transactions = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  interface DataType {
    key: React.Key;
    clientName: string;
    description: string;
    amount: string;
    status: string;
    lastLogin: string;
    trackingId: string
  }

  type TableRowSelection<T> = TableProps<T>["rowSelection"];

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const columns: TableColumnsType<DataType> = [
    {
      title: "Clients Name",
      dataIndex: "clientName",
    },
    {
      title: "Description",
      dataIndex: "description",
    },
    {
      title: "Amount",
      dataIndex: "amount",
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (_, { status }) => (
        <span
          style={{
            color:
              status === "pending"
                ? "#F69300"
                : status === "cancelled"
                ? "#EE7450"
                : "#427063",
            backgroundColor:
              status === "pending"
                ? "#FFEDCB"
                : status === "cancelled"
                ? "#FFBF9D"
                : "#ECF5F3",
          }}
          className="px-3 pb-1 rounded-3xl"
        >
          {status}
        </span>
      ),
    },
    {
      title: "Date",
      dataIndex: "lastLogin",
      sorter: {
        compare: (a, b) =>
          parseDate(a.lastLogin).getTime() - parseDate(b.lastLogin).getTime(),
        multiple: 1,
      },
    },
    {
      title: "Tracking ID",
      dataIndex: "trackingId",
      render: (_, { key, trackingId }) => (
        <p
        key={key}
          className="px-3 pb-1 flex flex-col rounded-3xl"
        >
          <span className="font-bold">LMRAS12SS</span>
          {trackingId}
        </p>
      ),
    },
  ];

  const data: DataType[] = [
    {
      key: "1",
      clientName: "GIZ",
      description: "Monthly Payments",
      amount: "#50,000",
      lastLogin: "30th July 2024",
      status: "pending",
      trackingId: "uyjekr78i34oe8eehw2399w",
    },
    {
      key: "2",
      clientName: "Stellar",
      description: "Monthly Payments",
      amount: "#50,000",
      lastLogin: "30th July 2024",
      status: "cancelled",
      trackingId: "uyjekr78i34oe8eehw2399w",
    },
    {
      key: "3",
      clientName: "Moniepoint",
      description: "Monthly Payments",
      amount: "#50,000",
      lastLogin: "30th May 2023",
      status: "pending",
      trackingId: "uyjekr78i34oe8eehw2399w",
    },
    {
      key: "4",
      clientName: "Jim Red",
      description: "Monthly Payments",
      amount: "#50,000",
      lastLogin: "30th January 2024",
      status: "paid",
      trackingId: "uyjekr78i34oe8eehw2399w",
    },
  ];

  const onChange: TableProps<DataType>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  const rowSelection: TableRowSelection<DataType> = {
    selectedRowKeys,
    onChange: onSelectChange,
    selections: [
      Table.SELECTION_ALL,
      Table.SELECTION_INVERT,
      Table.SELECTION_NONE,
      {
        key: "odd",
        text: "Select Odd Row",
        onSelect: (changeableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return false;
            }
            return true;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
      {
        key: "even",
        text: "Select Even Row",
        onSelect: (changeableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return true;
            }
            return false;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
    ],
  };
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className="pl-36 pr-5">
        <Table
          dataSource={data}
          columns={columns}
          pagination={false}
          onChange={onChange}
          rowSelection={rowSelection}
        />
      </div>
    </div>
  );
};
