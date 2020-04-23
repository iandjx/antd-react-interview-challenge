import { DatePicker, Space } from "antd";
import moment from "moment";
import React, { useState } from "react";
import "antd/dist/antd.css";
import calendarIcon from "../assets/icon_calender.svg";
import searchIcon from "../assets/icon_search.svg";
import { useDispatch } from "react-redux";

export interface Ranges {
  fromDate: moment.Moment;
  toDate: moment.Moment;
}

function DateSelector() {
  // const dispatch = useDispatch();
  const [range, setRange] = useState<Ranges>({
    fromDate: moment(),
    toDate: moment(),
  });

  const { RangePicker } = DatePicker;

  function onChange(dates: any[] | null, dateStrings: any[] | null) {
    if (dates !== null && dateStrings !== null) {
      setRange({
        ...range,
        fromDate: dates[0],
        toDate: dates[1],
      });

      console.log("From: ", dates[0], ", to: ", dates[1]);
      console.log("From: ", dateStrings[0], ", to: ", dateStrings[1]);
    }
  }
  return (
    <React.Fragment>
      {console.log(range)}
      <p>
        {range.fromDate.toLocaleString} I am {range.toDate.toString}
      </p>
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
        <img
          alt="search-icon"
          src={searchIcon}
          className="search"
          onClick={() => console.log("test")}
        />
      </Space>
    </React.Fragment>
  );
}

export default DateSelector;
