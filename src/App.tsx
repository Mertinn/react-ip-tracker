import React from "react";
import MainPanel from "./components/MainPanel";
import Map from "./components/Map";
import { MainContainer } from "./globalStyles";

function App() {
  return (
    <div className="App">
      <MainContainer>
        <MainPanel />
        <Map />
      </MainContainer>
    </div>
  );
}

export default App;
