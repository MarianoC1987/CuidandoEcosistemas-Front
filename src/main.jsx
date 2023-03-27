import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/home/Home";
import Welcome from "./pages/welcome/Welcome";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/login/login";
import Register from "./pages/register/Register";
import MyPlants from "./pages/myplants/MyPlants";
<<<<<<< HEAD
import Forum from "./pages/forum/Forum";
=======
import GuardarPlanta from "./pages/guardarPlanta/GuardarPlanta";
>>>>>>> 95aceb2e575d3791bd7f9a228b7a0f7ec1fb23ef

const router = createBrowserRouter([
  { name: "Welcome", path: "/", element: <Welcome /> },
  { name: "Home", path: "home", element: <Home /> },
  { name: "Login", path: "login", element: <Login /> },
  { name: "Register", path: "register", element: <Register /> },
  { name: "MyPlants", path: "myplants", element: <MyPlants /> },
<<<<<<< HEAD
  { name: "Forum", path: "forum", element: <Forum /> },
=======
  { name: "MyPlants", path: "myplants/guardarplanta", element: <GuardarPlanta /> },

>>>>>>> 95aceb2e575d3791bd7f9a228b7a0f7ec1fb23ef
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
