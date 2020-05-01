import React from "react";
import logo from "./assets/logo.png";
import { ConfigProvider } from "antd";

import Home from "./layout/Home";
import "antd/dist/antd.css";
const customizeRenderEmpty = () => (
  <div className="empty-container">
    <img className="empty-img" src={logo} alt="lgo" />
  </div>
);

function App() {
  return (
    <ConfigProvider renderEmpty={customizeRenderEmpty}>
      <Home />
    </ConfigProvider>
  );
}

export default App;
