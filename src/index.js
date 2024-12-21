import React from "react";
import ReactDOM from "react-dom/client"; // Updated import for React 18
import App from "./components/App"; // Ensure the path is correct
import "./index.css";

// Create root using ReactDOM.createRoot()
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
