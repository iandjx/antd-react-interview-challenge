import React from "react";
import { Button } from "antd";
import { useSelector } from "react-redux";

export default function EmailSorter() {
  const [from, setFrom] = React.useState("");
  const [to, setTo] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [date, setDate] = React.useState("");

  const sort = (header: string) => {};
  const emailData = useSelector((state: any) => state.filter.emails);

  const sortSwitch = (header: any) => {
    switch (header) {
      case "from":
        const sortedData = [...emailData];
        sortedData.sort((a: any, b: any) => {
          return a.from > b.from ? 1 : -1;
        });
        console.log(sortedData);
        break;
      default:
        break;
    }
  };

  return (
    <div className="site-button-ghost-wrapper">
      <Button
        type="link"
        onClick={() => sortSwitch("from")}
        ghost
        style={{ color: "rgb(136, 136, 136)" }}
      >
        From
      </Button>
      |
      <Button type="link" ghost style={{ color: "rgb(136, 136, 136)" }}>
        To
      </Button>
      |
      <Button type="link" ghost style={{ color: "rgb(136, 136, 136)" }}>
        Subject
      </Button>
      |
      <Button type="link" ghost style={{ color: "rgb(136, 136, 136)" }}>
        Date
      </Button>
    </div>
  );
}
