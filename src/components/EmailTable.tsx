import React from "react";
import { useSelector } from "react-redux";
import moment from "moment";
import { Table, Space } from "antd";
import { mockdata } from "../mockdata";

// const dataSource = makeData(20);
// console.log(dataSource);
// const displayData = dataSource.map((email: any) => {
//   const isMoment = moment.isMoment(email.date);
//   if (isMoment) {
//     email.date = email.date.format("DD/MM/YYYY");
//   }
//   return email;
// });

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
    render: (_: any, email: any) => moment(email.date).format("DD/MM/YYYY"),
    sorter: (a: any, b: any) => {
      return a.date.localeCompare(b.date);
    },
  },
];

function EmailTable() {
  const emailData = useSelector((state: any) => state.filter.emails);
  const displayData = emailData.map((email: any) => {
    email.date = moment(email.date).format("DD/MM/YYYY");

    return email;
  });

  return (
    <Space>
      <Table
        dataSource={mockdata}
        columns={columns}
        style={{ maxHeight: "50em" }}
        size="small"
      />
    </Space>
  );
}
export default EmailTable;
