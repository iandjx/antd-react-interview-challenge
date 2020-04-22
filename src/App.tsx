import React from "react";

import DateSelector from "./components/DateSelector";
import EmailCounter from "./components/EmailCounter";
import EmailGrid from "./components/EmailGrid";
function App() {
  return (
    <div className="App">
      <DateSelector />
      <EmailCounter />
      <EmailGrid />
    </div>
  );
}

export default App;
