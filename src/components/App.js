import React from "react";
import Sidebar from "./Sidebar";
import Forum from "./Forum";
import "../styles/App.css";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Forum />
    </div>
  );
}

export default App;
