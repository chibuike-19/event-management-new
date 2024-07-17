import { Table, TableColumnsType, TableProps } from "antd";
import Navbar from "../../../components/layout/navbar";
import { Sidebar } from "../../../components/layout/sidebar";
import { useState } from "react";
import { parseDate } from "../../../utils/sort-dates";

export const ClientsList = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [activeClients, setActiveClients] = useState(true)

  interface DataType {
    key: React.Key;
    organizers: string;
    events: number;
    ticketsSold: number;
    lastLogin: string;
  }

  type TableRowSelection<T> = TableProps<T>["rowSelection"];

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const columns: TableColumnsType<DataType> = [
    {
      title: "Organizers",
      dataIndex: "organizers",
    },
    {
      title: "Events",
      dataIndex: "events",
      sorter: {
        compare: (a, b) => a.events - b.events,
        multiple: 3,
      },
    },
    {
      title: "Tickets Sold",
      dataIndex: "ticketsSold",
      sorter: {
        compare: (a, b) => a.ticketsSold - b.ticketsSold,
        multiple: 2,
      },
    },
    {
      title: "Last Login Date",
      dataIndex: "lastLogin",
      sorter: {
        compare: (a, b) => parseDate(a.lastLogin).getTime() - parseDate(b.lastLogin).getTime(),
        multiple: 1,
      },
    },
  ];

  const data: DataType[] = [
    {
      key: "1",
      organizers: "John Brown",
      events: 300,
      ticketsSold: 2000,
      lastLogin: "30th July 2024",
    },
    {
      key: "2",
      organizers: "Jim Green",
      events: 98,
      ticketsSold: 66,
      lastLogin: "30th July 2024",
    },
    {
      key: "3",
      organizers: "Joe Black",
      events: 98,
      ticketsSold: 90,
      lastLogin: "30th May 2023",
    },
    {
      key: "4",
      organizers: "Jim Red",
      events: 88,
      ticketsSold: 99,
      lastLogin: "30th January 2024",
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
        <div className="flex gap-4 items-center mb-6">
          <div
            className={`${activeClients ? "active" : "inactive"} py-2 px-4 rounded-md`}
            onClick={() => setActiveClients(true)}
          >
            <button>Active Clients</button>
          </div>
          <div
            className={`${activeClients ? "inactive" : "active"} py-2 px-4 rounded-md`}
            onClick={() => setActiveClients(false)}
          >
            <button>Revoked Clients</button>
          </div>
        </div>
        {activeClients ? (
          <Table
            dataSource={data}
            columns={columns}
            pagination={false}
            onChange={onChange}
            rowSelection={rowSelection}
          />
        ) : (
          <Table
            dataSource={data}
            columns={columns}
            pagination={false}
            onChange={onChange}
            rowSelection={rowSelection}
          />
        )}
      </div>
    </div>
  );
};
