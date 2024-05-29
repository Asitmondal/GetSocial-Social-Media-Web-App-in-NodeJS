import React from "react";
import ReactDOM from "react-dom/client"; // Update import statement
import "./index.css";
import App from "./App";
import AuthProvider from "./context/AuthContext";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container); // Create root

root.render(
  <React.StrictMode>
    {/* <AuthProvider> */}
      <App />
    {/* </AuthProvider> */}
  </React.StrictMode>
);
