import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { useContext, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import useGetUserInfo from "../../../Hooks/CommonHooks/useGetUserInfo";
import useGetCart from "../../../Hooks/User/useGetCart";
import './Navbar.css'

import navmenu from '../../../assets/basic-icons/categories.png'
import cancelnav from '../../../assets/basic-icons/close.png'


const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [userInfo, refetch, isLoading] = useGetUserInfo();
  const [cart] = useGetCart()
  const navigate = useNavigate();
  const [open, setOpen] = useState(false)
  const handleLogOut = () => {
    setOpen(!open)
    logOut()
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Logout successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        refetch();
        navigate("/", { replace: true });
      })
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <div className="fixed mx-auto max-w-screen-2xl w-full bg-white bg-opacity-90 flex justify-between items-center gap-5 px-5 py-5 z-10">
        <div>
          <img className="h-[60px] md:h-[70px]" src={logo} alt="" />
        </div>
        <div className="resposive-nav z-10">
          <img onClick={()=>setOpen(!open)} className="h-[45px]" src={open? cancelnav : navmenu} alt="" />
        </div>
        <div className={`flex justify-center items-center gap-5 font-semibold navbar-res ${open? '' : 'navbar-active'}`}>
          <NavLink onClick={()=>setOpen(!open)} className="active:border-b-2 " to="/">
            Home
          </NavLink>
          <NavLink onClick={()=>setOpen(!open)} className="active:border-b-2 " to="/products">
            Products
          </NavLink>
          <NavLink onClick={()=>setOpen(!open)} className="active:border-b-2 " to="/about">
            About
          </NavLink>
          <NavLink onClick={()=>setOpen(!open)} className="active:border-b-2 " to="/contact">
            Contact
          </NavLink>
         
          {userInfo?.role === "seller" ? (
            <NavLink onClick={()=>setOpen(!open)} className="active:border-b-2 " to="/sellerdashboard">
              Dashboard
            </NavLink>
          ) : userInfo?.role === "admin" ? (
            <NavLink onClick={()=>setOpen(!open)} className="active:border-b-2 " to="/admindashboard">
              Admin
            </NavLink>
          ) : userInfo?.role === "customer" ? (
            <div className="flex justify-center items-center gap-5">
               <NavLink onClick={()=>setOpen(!open)} className="active:border-b-2 " to="/dashboard/cart">
            Cart <span className="font-bold px-2 text-primary border-b-4">{cart? cart.length : 0}</span>
          </NavLink>
          <NavLink onClick={()=>setOpen(!open)} className="active:border-b-2 " to="/dashboard">
              {" "}
              Dashboard
            </NavLink>
            </div>
          ) : '' }
          <div className="resposive-nav">
          {
            isLoading ? <div className="loading loading-spinner"></div> : ''
          }
          {user ? (
            <Link className="btn btn-error" onClick={handleLogOut}>
              Logout
            </Link>
          ) : (
            <Link onClick={()=>setOpen(!open)} className="btn btn-secondary" to="/login">
              Login
            </Link>
          )}
        </div>
        </div>
        <div className="hidden md:block">
          {
            isLoading ? <div className="loading loading-spinner"></div> : ''
          }
          {user ? (
            <Link className="btn btn-error" onClick={handleLogOut}>
              Logout
            </Link>
          ) : (
            <Link className="btn btn-secondary" to="/login">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
