import React from "react";
import { Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../store/actions/index";

export default function EmailSorter() {
  const dispatch = useDispatch();

  const [from, setFrom] = React.useState("");
  const [to, setTo] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [date, setDate] = React.useState("");

  const emailData = useSelector((state: any) => state.filter.emails);
  const sortedData = useSelector((state: any) => {
    if (state.sort === undefined) {
      return [];
    }
    return state.sort.sortedEmails;
  });

  interface sortInterface {
    sortBy: string;
    direction: string;
    emailData: Array<any>;
  }

  const sortSwitch = (header: any) => {
    console.log(sortedData);
    switch (header) {
      case "from":
        if (from === "descending") {
          setFrom("ascending");
          const sort: sortInterface = {
            sortBy: header,
            direction: from,
            emailData,
          };
          dispatch(actions.sortEmail(sort));
          console.log(sortedData);
        }

        if (from === "ascending" || from === "") {
          setFrom("descending");
          const sort: sortInterface = {
            sortBy: header,
            direction: from,
            emailData,
          };
          dispatch(actions.sortEmail(sort));
        }

        break;

      case "to":
        if (to === "descending") {
          setTo("ascending");
          const sort: sortInterface = {
            sortBy: header,
            direction: to,
            emailData,
          };
          dispatch(actions.sortEmail(sort));
        }

        if (to === "ascending" || to === "") {
          setTo("descending");
          const sort: sortInterface = {
            sortBy: header,
            direction: to,
            emailData,
          };
          dispatch(actions.sortEmail(sort));
        }

        break;
      case "body":
        if (subject === "descending") {
          setSubject("ascending");
          const sort: sortInterface = {
            sortBy: header,
            direction: subject,
            emailData,
          };
          dispatch(actions.sortEmail(sort));
        }

        if (subject === "ascending" || subject === "") {
          setSubject("descending");
          const sort: sortInterface = {
            sortBy: header,
            direction: subject,
            emailData,
          };
          dispatch(actions.sortEmail(sort));
        }
        console.log(sortedData);
        break;

      case "date":
        if (date === "descending") {
          setDate("ascending");
          const sort: sortInterface = {
            sortBy: header,
            direction: date,
            emailData,
          };
          dispatch(actions.sortEmail(sort));
        }

        if (date === "ascending" || date === "") {
          setDate("descending");
          const sort: sortInterface = {
            sortBy: header,
            direction: date,
            emailData,
          };
          dispatch(actions.sortEmail(sort));
        }

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
        onClick={() => sortSwitch("body")}
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
