import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/MainLayout/Main";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
    },
  ]);