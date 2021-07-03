import React from "react";
import Header from "./components/header";
import Summery from "./components/summery";
import Filtering from "./components/filtering";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="App_body">
        <Summery />
        <div className="filtering_togle">
          <Filtering />
        </div>
      </div>
    </div>
  );
}

export default App;
