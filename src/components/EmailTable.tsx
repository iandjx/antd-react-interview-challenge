import React from "react";
import { useSelector } from "react-redux";
import { Table, Space, Tag } from "antd";
import { dateFormat } from "../utils/dateFormatter";
import clipIcon from "../assets/icon_clip.svg";
import "antd/dist/antd.css";
import { useFlexLayout } from "react-table";

const columns = [
  {
    title: "From",
    dataIndex: "from",
    ellipsis: true,
    width: 200,
  },

  {
    title: "To",
    dataIndex: "to",
    render: (to: any) => {
      if (to.length > 1) {
        return (
          <div style={{ display: "flex" }} className="tag-container">
            <span>{to[0].address}...</span>
            <Tag className="to-counter">+{to.length - 1}</Tag>
          </div>
        );
      } else {
        console.log(to.length);
        return <span>{to[0].address}</span>;
      }
    },
    width: 250,
    ellipsis: true,
  },
  {
    title: "Subject",
    dataIndex: "body",
    width: 600,
    ellipsis: true,
  },
  {
    dataIndex: "hasAttachment",
    render: (hasAttachment: boolean) => {
      const render = hasAttachment ? (
        <img alt="clip-icon" src={clipIcon} className="clip-icon" />
      ) : (
        ""
      );
      return (
        <div style={{ display: "flex", justifyContent: "center" }}>
          {render}
        </div>
      );
    },
    width: 70,
  },
  {
    title: "Date",
    dataIndex: "date",
    render: (_: any, email: any) => dateFormat(email.date),
    sorter: (a: any, b: any) => {
      return a.date.localeCompare(b.date);
    },
    width: 150,
  },
];

function EmailTable() {
  const emailData = useSelector((state: any) => state.filter.emails);

  return (
    <Space>
      <Table dataSource={emailData} columns={columns} size="middle" />
    </Space>
  );
}
export default EmailTable;
