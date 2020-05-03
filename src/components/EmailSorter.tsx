import React from "react";
import { Button } from "antd";
import { useSelector } from "react-redux";

export default function EmailSorter() {
  const [from, setFrom] = React.useState("");
  const [to, setTo] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [date, setDate] = React.useState("");

  const emailData = useSelector((state: any) => state.filter.emails);

  const sortSwitch = (header: any) => {
    const sortedData = [...emailData];
    switch (header) {
      case "from":
        if (from === "descending") {
          setFrom("ascending");
          sortedData.sort((a: any, b: any) => {
            return a.from > b.from ? -1 : 1;
          });
        }

        if (from === "ascending" || from === "") {
          setFrom("descending");
          sortedData.sort((a: any, b: any) => {
            return a.from > b.from ? 1 : -1;
          });
        }

        break;

      case "to":
        if (to === "descending") {
          setTo("ascending");
          sortedData.sort((a: any, b: any) => {
            return a.to[0].address > b.to[0].address ? -1 : 1;
          });
        }

        if (to === "ascending" || to === "") {
          setTo("descending");
          sortedData.sort((a: any, b: any) => {
            return a.to[0].address > b.to[0].address ? 1 : -1;
          });
        }

        break;
      case "subject":
        if (subject === "descending") {
          setSubject("ascending");
          sortedData.sort((a: any, b: any) => {
            return a.body > b.body ? -1 : 1;
          });
        }

        if (subject === "ascending" || subject === "") {
          setSubject("descending");
          sortedData.sort((a: any, b: any) => {
            return a.body > b.body ? 1 : -1;
          });
        }
        console.log(sortedData);
        break;

      case "date":
        if (date === "descending") {
          setDate("ascending");
          sortedData.sort((a: any, b: any) => {
            return a.date.localeCompare(b.date);
          });
        }

        if (date === "ascending" || date === "") {
          setDate("descending");
          sortedData.sort((a: any, b: any) => {
            return -a.date.localeCompare(b.date);
          });
        }
        console.log(sortedData);
        break;
      default:
        break;
    }

    //dispatch action
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
      <Button
        type="link"
        onClick={() => sortSwitch("to")}
        ghost
        style={{ color: "rgb(136, 136, 136)" }}
      >
        To
      </Button>
      |
      <Button
        type="link"
        onClick={() => sortSwitch("subject")}
        ghost
        style={{ color: "rgb(136, 136, 136)" }}
      >
        Subject
      </Button>
      |
      <Button
        type="link"
        onClick={() => sortSwitch("date")}
        ghost
        style={{ color: "rgb(136, 136, 136)" }}
      >
        Date
      </Button>
    </div>
  );
}
