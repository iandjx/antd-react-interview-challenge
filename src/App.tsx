import React from "react";

import DateSelector from "./components/DateSelector";
import EmailCounter from "./components/EmailCounter";
import EmailTable from "./components/EmailTable";
import { Row, Col } from "antd";
import { dateFormat } from "./utils/dateFormatter";

import { mockdata } from "./mockdata";
function App() {
  // mockdata.forEach((element: any) => {
  //   element.to.forEach((to: any) => {
  //     console.log(to.address);
  //   });
  // });
  return (
    <Row>
      <Col span={24} style={{ height: "100%" }}>
        {/* <DateSelector /> */}
        {/* <EmailCounter /> */}
        <EmailTable />
      </Col>
    </Row>
  );
}

export default App;
