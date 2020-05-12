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

import { SingleEmail } from "./components/SingleEmail";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
      <Switch>
        {isMobile && <Route exact path="/" component={MobileHome} />}
        {isBigScreen && <Route exact path="/" component={Home} />}
        <Route exact path="/email" component={SingleEmail} />

        {/* <EmailModal /> */}
      </Switch>
    </ConfigProvider>
  );
}

export default App;
