import React from "react";
import { useSelector } from "react-redux";
import { Table, Space, Tag, Typography } from "antd";
import { dateFormat } from "../utils/dateFormatter";
import clipIcon from "../assets/icon_clip.svg";
import "antd/dist/antd.css";

const { Text } = Typography;

const columns = [
  {
    title: "From",
    dataIndex: "from",
    ellipsis: true,
    width: "15%",
    render: (from: any) => {
      return (
        <a rel="noopener noreferrer" target="_blank" href={`mailto:${from}`}>
          <Text>{from}</Text>
        </a>
      );
    },
  },

  {
    title: "To",
    dataIndex: "to",
    render: (to: any) => {
      if (to.length > 1) {
        return (
          <a
            rel="noopener noreferrer"
            target="_blank"
            href={`mailto:${to[0].address}`}
          >
            <div style={{ display: "flex" }} className="tag-container">
              <Text>{to[0].address}...</Text>
              <Tag className="to-counter">+{to.length - 1}</Tag>
            </div>
          </a>
        );
      } else {
        console.log(to.length);
        return (
          <a
            rel="noopener noreferrer"
            target="_blank"
            href={`mailto:${to[0].address}`}
          >
            <Text>{to[0].address}</Text>
          </a>
        );
      }
    },
    width: "20%",
    ellipsis: true,
  },
  {
    title: "Subject",
    dataIndex: "body",
    width: "50%",
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
    width: "5%",
  },
  {
    title: "Date",
    dataIndex: "date",
    render: (_: any, email: any) => dateFormat(email.date),
    sorter: (a: any, b: any) => {
      return a.date.localeCompare(b.date);
    },
    width: "10%",
  },
];

function EmailTable() {
  const emailData = useSelector((state: any) => state.filter.emails);

  return (
    <Space>
      <Table
        dataSource={emailData}
        columns={columns}
        size="middle"
        showHeader={emailData.length > 0 ? true : false}
      />
    </Space>
  );
}
export default EmailTable;
