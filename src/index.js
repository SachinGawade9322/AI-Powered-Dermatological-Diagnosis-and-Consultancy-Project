import React from "react";
import ReactDOM from "react-dom/client"; // Change this import
import App from "./App";
import "./App.css";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement); // Use createRoot instead of render
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
