import React from "react";
import logo from "./assets/logo.png";
import { ConfigProvider } from "antd";
import Home from "./layout/Home";
import "antd/dist/antd.css";
import EmailCard from "./components/EmailCard";
import EmailList from "./components/EmailList";
import EmailSorter from "./components/EmailSorter";
import DateSelector from "./components/DateSelector";
import EmailCounter from "./components/EmailCounter";
import MobileHome from "./layout/MobileHome";
import { useMediaQuery } from "react-responsive";
import MediaQuery from "react-responsive";
import EmailModal from "./components/EmailModal";
import { SingleEmail } from "./components/SingleEmail";

const customizeRenderEmpty = () => (
  <div className="empty-container">
    <img className="empty-img" src={logo} alt="lgo" />
  </div>
);

function App() {
  const isBigScreen = useMediaQuery({ query: "(min-width: 769px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <ConfigProvider renderEmpty={customizeRenderEmpty}>
      {/* {isMobile && <MobileHome />}
      {isBigScreen && <Home />} */}
      {/* <EmailModal /> */}
      <SingleEmail />
    </ConfigProvider>
  );
}

export default App;
