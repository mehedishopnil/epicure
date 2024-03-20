import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Search from "../pages/Search/Search";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import CreatorSignUp from "../pages/CreatorSignUp/CreatorSignUp";


 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/search",
          element: <Search/>
        },
        {
          path: "/login",
          element: <Login/>
        },
        {
          path: "/signup",
          element: <SignUp/>
        },
        {
          path: "/creatorSignup",
          element: <CreatorSignUp/>
        }
      ],
    },
  ]);
