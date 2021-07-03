import React from "react";
import Header from "./components/header";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="body">
        <h3>들어온 요청</h3>
        <div>파트너님에게 딱 맞는 요청서를 찾아보세요.</div>
      </div>
    </div>
  );
}

export default App;
