import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
//import "./index.css";
import Welcome from "./pages/welcome/Welcome";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Welcome /> */}
    <Login />
    {/* <Home /> */}
  </React.StrictMode>
);
