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
import UserDashboard from "../Layouts/Dashboard/UserDashboard";
import UserHome from "../Pages/DashBoardPages/User/UserHome/UserHome";
import Cart from "../Pages/DashBoardPages/User/Cart/Cart";
import WishList from "../Pages/DashBoardPages/User/WishList/WishList";
import AdminHome from "../Pages/DashBoardPages/Admin/AdminHome/AdminHome";
import ManageUser from "../Pages/DashBoardPages/Admin/ManageUser/ManageUser";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/products",
        element: <AllProducts></AllProducts>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/signup",
    element: <SignUp></SignUp>,
  },
  {
    path: "/sellerdashboard",
    element: <SellerDashboard></SellerDashboard>,
    children: [
      {
        path: "/sellerdashboard",
        element: <div>sellerdashboard</div>,
      },
    ],
  },
  {
    path: "/admindashboard",
    element: <AdminDashboard></AdminDashboard>,
    children: [
      {
        path: "/admindashboard",
        element: <AdminHome></AdminHome>,
      },
      {
        path: "/admindashboard/manageuser",
        element: <ManageUser></ManageUser>
      },
    ],
  },
  {
    path: "/dashboard",
    element: <UserDashboard></UserDashboard>,
    children: [
      {
        path: "/dashboard",
        element: <UserHome></UserHome>,
      },
      {
        path: "/dashboard/cart",
        element: <Cart></Cart>,
      },
      {
        path: "/dashboard/wishlist",
        element: <WishList></WishList>,
      },
    ],
  },
]);
