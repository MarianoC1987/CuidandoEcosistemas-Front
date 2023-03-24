import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/home/Home";
import Welcome from "./pages/welcome/Welcome";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/login/login";
import Register from "./pages/register/Register";
import MyPlants from "./pages/myplants/MyPlants";

const router = createBrowserRouter([
  { name: "Welcome", path: "/", element: <Welcome /> },
  { name: "Home", path: "home", element: <Home /> },
  { name: "Login", path: "login", element: <Login /> },
  { name: "Register", path: "register", element: <Register /> },
  { name: "MyPlants", path: "myplants", element: <MyPlants /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
