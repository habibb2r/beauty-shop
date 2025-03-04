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
import CustomerRoute from "./CustomerRoute";
import AddItems from "../Pages/DashBoardPages/Seller/AddItems/AddItems";

import ManageItems from "../Pages/DashBoardPages/Seller/ManageItems/ManageItems";
import SellerRoute from "./SellerRoute";
import AdminRoute from "./AdminRoute";
import UpdateItem from "../Pages/DashBoardPages/Seller/UpdateItem/UpdateItem";
import SellerHome from "../Pages/DashBoardPages/Seller/SellerHome/SellerHome";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import MyOrders from "../Pages/DashBoardPages/User/MyOrders/MyOrders";
import ETC from "../Pages/ETC/ETC";

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
        path: "/etc",
        element: <ETC></ETC>,
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
      {
        path: "/productdetails/:id",
        element: <ProductDetails></ProductDetails>,
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
    element: <SellerRoute><SellerDashboard></SellerDashboard></SellerRoute>,
    children: [
      {
        path: "/sellerdashboard",
        element: <SellerHome></SellerHome>,
      },
      {
        path: "/sellerdashboard/additem",
        element: <AddItems></AddItems>,
      },
      {
        path: "/sellerdashboard/manageitem",
        element: <ManageItems></ManageItems>,
      },
      {
        path: "/sellerdashboard/updateitem/:id",
        element: <UpdateItem></UpdateItem>,
      },
    ],
  },
  {
    path: "/admindashboard",
    element: <AdminRoute><AdminDashboard></AdminDashboard></AdminRoute>,
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
    element: <CustomerRoute><UserDashboard></UserDashboard></CustomerRoute>,
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
      {
        path: "/dashboard/orders",
        element: <MyOrders></MyOrders>,
      },
    ],
  },
]);
