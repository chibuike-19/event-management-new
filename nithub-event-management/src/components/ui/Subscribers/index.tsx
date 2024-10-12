import { Table, TableColumnsType, TableProps } from "antd";
import { useState } from "react";
import { parseDate } from "../../../utils/sort-dates";

export const Subscribers = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [activeClients, setActiveClients] = useState(true)

  interface DataType {
    key: React.Key;
    client_name: string;
    email: string;
    plan: string;
    status: string;
    events: number;
    nextBillingDate: string;
  }

  type TableRowSelection<T> = TableProps<T>["rowSelection"];

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const columns: TableColumnsType<DataType> = [
    {
      title: "Client Name",
      dataIndex: "client_name",
      key: 'client_name',
      // specify the condition of filtering result
      // here is that finding the name started with `value`
      onFilter: (value, record) => record.client_name.indexOf(value as string) === 0,
      sorter: (a, b) => a.client_name.length - b.client_name.length,
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: "Email",
      dataIndex: "email",
      // sorter: {
      //   compare: (a, b) => parseDate(a.email) - parseDate(b.email),
      //   multiple: 1,
      // },
    },
    {
      title: "Plan",
      dataIndex: "plan",
      key: 'plan',
      // specify the condition of filtering result
      // here is that finding the name started with `value`
      onFilter: (value, record) => record.plan.indexOf(value as string) === 0,
      sorter: (a, b) => a.plan.length - b.plan.length,
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: "Number of Events",
      dataIndex: "events",
      sorter: {
        compare: (a, b) => a.events - b.events,
        multiple: 3,
      },
    },
    {
      title: "Next Billing Date",
      dataIndex: "nextBillingDate",
      sorter: (a, b) => parseDate(a.nextBillingDate).getTime() - parseDate(b.nextBillingDate).getTime(),
      // {
      //   compare: (a, b) => parseDate(a.nextBillingDate).getTime() - parseDate(b.nextBillingDate).getTime(),
      //   multiple: 1,
      // },
    },
  ];

  const data: DataType[] = [
    {
      key: "1",
      client_name: "John Brown",
      email: "johndeo@gmail.com",
      plan: "N 50000",
      status: "Gold",
      events: 300,
      nextBillingDate: "30th July 2024",
    },
    {
      key: "2",
      client_name: "Jim Green",
      email: "johndeo@gmail.com",
      plan: "N 50000",
      status: "Bronze",
      events: 67,
      nextBillingDate: "30th July 2024",
    },
    {
      key: "3",
      client_name: "Joe Black",
      email: "johndeo@gmail.com",
      plan: "N 20000",
      status: "SIlver",
      events: 23,
      nextBillingDate: "30th May 2023",
    },
    {
      key: "4",
      client_name: "Jim Red",
      email: "johndeo@gmail.com",
      plan: "N 300000",
      status: "Gold",
      events: 88,
      nextBillingDate: "30th January 2024",
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
      <div className="">
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
