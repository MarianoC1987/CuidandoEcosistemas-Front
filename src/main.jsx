import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/home/Home";
import Welcome from "./pages/welcome/Welcome";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/login/login";
import Register from "./pages/register/Register";
import Cubism from "./components/CubismBackground/Cubism";
import UserProfile from "./pages/UserProfile/UserProfile";
import MyProfile from "./components/MyProfile/MyProfile";
import UserHelp from "./components/UserHelp/UserHelp";
import Notifications from "./components/Notifications/Notifications";
import Conditions from "./components/Conditions/Conditions";
import Forum from "./pages/forum/Forum";
import ViewPost from "./pages/viewPost/ViewPost";
import ForumPost from "./components/ForumPost/ForumPost";
import ErrorPage from "./pages/errorPage/ErrorPage";
import ShowTreflePlants from "./components/ShowTreflePlants/ShowTreflePlants";

const router = createBrowserRouter([
  { name: "Welcome", path: "/", element: <Welcome /> },
  { name: "Home", path: "home", element: <Home /> },

  { name: "Login", path: "login", element: <Login /> },
  { name: "Register", path: "register", element: <Register /> },

  //MODULO PLANTAS
  { name: "MyPlants", path: "myplants", element: <Cubism /> },
  {
    name: "TrefleApiPlants",
    path: "trefle/:search",
    element: <ShowTreflePlants />,
  },

  //MODULO USUARIO
  { name: "UserProfile", path: "userProfile", element: <UserProfile /> },
  { name: "MyProfile", path: "myProfile", element: <MyProfile /> },
  { name: "UserHelp", path: "userHelp", element: <UserHelp /> },
  { name: "Notifications", path: "notifications", element: <Notifications /> },
  { name: "Conditions", path: "conditions", element: <Conditions /> },

  //MODULO FORO
  { name: "Forum", path: "forum", element: <Forum /> },
  { name: "NewPost", path: "forum/newpost", element: <ForumPost /> },
  { name: "ViewPost", path: "forum/viewpost/:id", element: <ViewPost /> },

  { name: "ErrorURL", path: "*", element: <ErrorPage /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
