import { DatePicker, Space } from "antd";
import moment from "moment";
import React from "react";
import "antd/dist/antd.css";
import calendarIcon from "../assets/icon_calender.svg";

function DateSelector() {
  const { RangePicker } = DatePicker;
  function onChange(dates: any[] | null, dateStrings: any[] | null) {
    if (dates !== null && dateStrings !== null) {
      console.log("From: ", dates[0], ", to: ", dates[1]);
      console.log("From: ", dateStrings[0], ", to: ", dateStrings[1]);
    }
  }
  return (
    <Space style={{ borderRadius: "10%" }}>
      <img src={calendarIcon} style={{ width: "2em" }} />
      <RangePicker
        bordered={false}
        size={"large"}
        suffixIcon={false}
        ranges={{
          Today: [moment(), moment()],
          "This Month": [moment().startOf("month"), moment().endOf("month")],
        }}
        onChange={onChange}
      />
    </Space>
  );
}

export default DateSelector;
