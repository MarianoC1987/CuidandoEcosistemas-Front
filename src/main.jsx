import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from './pages/Login/Login';
// import App from "./App";
//import "./index.css";
import Welcome from "./pages/welcome/Welcome";
import UserRegister from "./pages/UserRegister/UserRegister";

const router = createBrowserRouter([
  {
    path:"/",
    element: <Welcome/>,
  },
  {
    path:"/login",
    element: <Login/>,
  },
  {
    path:"/register",
    element: <UserRegister/>,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Welcome /> */}
    {/* <UserRegister/> */}
    <RouterProvider router={router}/>
  </React.StrictMode>
);
