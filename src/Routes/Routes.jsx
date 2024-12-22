import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/MainLayout/Main";
import Home from "../Components/Home";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: "/",
            element: <Home></Home>
        }
      ]
    },
  ]);