import React from "react";
import Header from "./components/header";
import Summery from "./components/summery";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="App_body">
        <Summery />
      </div>
    </div>
  );
}

export default App;
