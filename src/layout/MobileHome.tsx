import React from "react";
import { Layout, Menu, Breadcrumb, Row, Col } from "antd";
import DateSelector from "../components/DateSelector";
import EmailCounter from "../components/EmailCounter";
import EmailList from "../components/EmailList";
import EmailSorter from "../components/EmailSorter";
const { Header, Content, Footer } = Layout;

const MobileHome = () => {
  return (
    <Row justify="center" align="middle">
      <Col span={22}>
        <Layout>
          <Header
            style={{
              position: "fixed",
              zIndex: 1,
              width: "100%",
              backgroundColor: "white",
              display: "block",
              height: "5em",
              paddingLeft: "10px",
            }}
          >
            <DateSelector />
          </Header>
          <Content style={{ marginTop: "5em", backgroundColor: "white" }}>
            <div style={{ paddingLeft: "10px" }}>
              <EmailCounter />
            </div>

            <EmailSorter />
            <div style={{ paddingLeft: "10px" }}>
              <EmailList />
            </div>
          </Content>
        </Layout>
      </Col>
    </Row>
  );
};
export default MobileHome;
