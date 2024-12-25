import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/MainLayout/Main";
import Home from "../Components/Home";
import About from "../Pages/About/About";
import AllProducts from "../Pages/AllProducts/AllProducts";
import Contact from "../Pages/Contact/Contact";
import Login from "../Pages/Accounts/Login";
import SignUp from "../Pages/Accounts/SignUp";
import SellerDashboard from "../Layouts/Dashboard/SellerDashboard";
import AdminDashboard from "../Layouts/Dashboard/AdminDashboard";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/about",
            element: <About></About>
        },
        {
            path: "/products",
            element: <AllProducts></AllProducts>
        },
        {
            path: "/contact",
            element: <Contact></Contact>
        }
      ]
    },
        {
            path: "/login",
            element: <Login></Login>
        },
        {
            path: "/signup",
            element: <SignUp></SignUp>
        },
        {
            path: "/sellerdashboard",
            element: <SellerDashboard></SellerDashboard>,
            children: [
                {
                    path: '/sellerdashboard',
                    element: <div>sellerdashboard</div>
                }
            ]
        },
        {
            path: "/admindashboard",
            element: <AdminDashboard></AdminDashboard>,
            children: [
                {
                    path: '/admindashboard',
                    element: <div>Admin dashboard</div>
                }
            ]
        }
  ]);