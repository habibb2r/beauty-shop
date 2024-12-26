import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import useGetUserInfo from "../../../Hooks/CommonHooks/useGetUserInfo";
import useGetCart from "../../../Hooks/User/useGetCart";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [userInfo, refetch, isLoading] = useGetUserInfo();
  const [cart] = useGetCart()
  const navigate = useNavigate();
  const handleLogOut = () => {
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
      <div className="flex justify-between items-center gap-5 px-5 py-5">
        <div>
          <img className="h-[70px]" src={logo} alt="" />
        </div>
        <div className=" flex justify-center items-center gap-5 font-semibold">
          <NavLink className="active:border-b-2 " to="/">
            Home
          </NavLink>
          <NavLink className="active:border-b-2 " to="/products">
            Products
          </NavLink>
          <NavLink className="active:border-b-2 " to="/about">
            About
          </NavLink>
          <NavLink className="active:border-b-2 " to="/contact">
            Contact
          </NavLink>
         
          {userInfo?.role === "seller" ? (
            <NavLink className="active:border-b-2 " to="/sellerdashboard">
              Dashboard
            </NavLink>
          ) : userInfo?.role === "admin" ? (
            <NavLink className="active:border-b-2 " to="/admindashboard">
              Admin
            </NavLink>
          ) : userInfo?.role === "customer" ? (
            <div className="flex justify-center items-center gap-5">
               <NavLink className="active:border-b-2 " to="/cart">
            Cart <span className="font-bold px-2 text-primary border-b-4">{cart? cart.length : 0}</span>
          </NavLink>
          <NavLink className="active:border-b-2 " to="/dashboard">
              {" "}
              Dashboard
            </NavLink>
            </div>
          ) : '' }
        </div>
        <div>
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
