import { DatePicker, Space } from "antd";
import moment from "moment";
import React from "react";
import "antd/dist/antd.css";
import calendarIcon from "../assets/icon_calender.svg";
import searchIcon from "../assets/icon_search.svg";
import "../styles/dataSelector.css";
function DateSelector() {
  const { RangePicker } = DatePicker;
  function onChange(dates: any[] | null, dateStrings: any[] | null) {
    if (dates !== null && dateStrings !== null) {
      console.log("From: ", dates[0], ", to: ", dates[1]);
      console.log("From: ", dateStrings[0], ", to: ", dateStrings[1]);
    }
  }
  return (
    <React.Fragment>
      <Space className="container" size="middle">
        <img alt="calendar-icon" src={calendarIcon} className="calendar" />
        <RangePicker
          defaultValue={[moment().startOf("month"), moment().endOf("month")]}
          className="range-picker"
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
      <Space className="search-container">
        <img alt="search-icon" src={searchIcon} className="search" />
      </Space>
    </React.Fragment>
  );
}

export default DateSelector;
