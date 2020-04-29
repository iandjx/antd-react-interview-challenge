import React from "react";
import { useSelector } from "react-redux";
import moment from "moment";
import { Table, Space } from "antd";
import { dateFormat } from "../utils/dateFormatter";
import clipIcon from "../assets/icon_clip.svg";
const toFormat = (element: any) =>
  element.to.forEach((to: any) => {
    console.log(to.address);
  });

const columns = [
  {
    title: "From",
    dataIndex: "from",
  },

  {
    title: "To",
    dataIndex: "to",
    render: (to: any) => {
      if (to.length > 1) {
        return (
          <React.Fragment>
            <span>{to[0].address}</span>
            <span style={{ marginLeft: "2em" }}>{to.length}</span>
          </React.Fragment>
        );
      } else {
        console.log(to.length);
        return <span>{to[0].address}</span>;
      }
    },
  },
  {
    title: "Body",
    dataIndex: "body",
    width: 400,
  },
  {
    dataIndex: "hasAttachment",
    render: (hasAttachment: boolean) => {
      const render = hasAttachment ? (
        <img alt="clip-icon" src={clipIcon} className="calendar" />
      ) : (
        ""
      );
      return render;
    },
  },
  {
    title: "Date",
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
