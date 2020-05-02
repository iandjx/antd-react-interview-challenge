import React from "react";
import logo from "./assets/logo.png";
import { ConfigProvider } from "antd";
import Home from "./layout/Home";
import "antd/dist/antd.css";
import EmailCard from "./components/EmailCard";
import EmailList from "./components/EmailList";

const customizeRenderEmpty = () => (
  <div className="empty-container">
    <img className="empty-img" src={logo} alt="lgo" />
  </div>
);

function App() {
  return (
    <ConfigProvider renderEmpty={customizeRenderEmpty}>
      {/* <Home /> */}
      {/* <EmailCard /> */}
      <EmailList />
    </ConfigProvider>
  );
}

export default App;
