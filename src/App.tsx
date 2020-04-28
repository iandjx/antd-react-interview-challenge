import React from "react";

import DateSelector from "./components/DateSelector";
import EmailCounter from "./components/EmailCounter";
import EmailTable from "./components/EmailTable";
import { Row, Col } from "antd";
import { dateFormat } from "./utils/dateFormatter";

function App() {
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
