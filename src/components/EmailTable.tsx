import React from "react";
import { useSelector } from "react-redux";
import moment from "moment";
import { Table, Space } from "antd";
import { dateFormat } from "../utils/dateFormatter";

const columns = [
  {
    Header: "From",
    dataIndex: "from",
  },

  {
    Header: "To",
    dataIndex: "to",
  },
  {
    Header: "Body",
    dataIndex: "body",
  },
  {
    Header: "Date",
    dataIndex: "date",
    render: (_: any, email: any) => dateFormat(email.date),
    sorter: (a: any, b: any) => {
      return a.date.localeCompare(b.date);
    },
  },
];

function EmailTable() {
  const emailData = useSelector((state: any) => state.filter.emails);

  return (
    <Space>
      <Table dataSource={emailData} columns={columns} size="large" />
    </Space>
  );
}
export default EmailTable;
