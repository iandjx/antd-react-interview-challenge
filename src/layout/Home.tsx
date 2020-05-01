import { Layout, Menu, Breadcrumb } from "antd";

import React from "react";
import DateSelector from "../components/DateSelector";
import EmailCounter from "../components/EmailCounter";
import EmailTable from "../components/EmailTable";
import logo from "../assets/logo.png";
const { Header, Content, Footer } = Layout;

const Home = () => {
  return (
    <Layout>
      <Header
        style={{
          position: "fixed",
          zIndex: 1,
          width: "100%",
          backgroundColor: "white",
        }}
      >
        <DateSelector />
      </Header>
      <Content
        className="site-layout"
        style={{
          padding: "0 50px",
          marginTop: 64,
          backgroundColor: "white",
          backgroundImage: logo,
        }}
      >
        <EmailCounter />
        <EmailTable />
      </Content>
      <Footer style={{ backgroundColor: "white" }} />
    </Layout>
  );
};

export default Home;
