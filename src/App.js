import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Homepage from "./pages/homepage";

import "./App.styles.scss";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Homepage />
    </div>
  );
}

export default App;
