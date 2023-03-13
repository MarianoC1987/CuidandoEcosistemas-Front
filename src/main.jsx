import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
//import "./index.css";
import Welcome from "./pages/welcome/Welcome";
import UserRegister from "./pages/UserRegister/UserRegister";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Welcome /> */}
    <UserRegister/>

  </React.StrictMode>
);
