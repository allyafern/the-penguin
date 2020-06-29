import React from "react";
import "./App.css";
import FlipCard from "./src/components/FlipCard";

function App() {
  const undeConstruction = (
    <div className="under-construction">Coming Soon...</div>
  );
  return (
    <div className="App">
      <header className="App-header">
        <h4>The Whale is Coding</h4>
        <h4>The Penguin studies Finance</h4>
      </header>
      <div className="content">
        <FlipCard
          backContent={undeConstruction}
          frontContent={undeConstruction}
        />
      </div>
    </div>
  );
}

export default App;
