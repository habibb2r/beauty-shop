import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from '../../../assets/logo.png'
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import useGetUserInfo from "../../../Hooks/CommonHooks/useGetUserInfo";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const[userInfo, refetch, isLoading] = useGetUserInfo()
  console.log(userInfo)
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
          <NavLink className="active:border-b-2 " to="/">Home</NavLink>
          <NavLink className="active:border-b-2 " to="/products">Products</NavLink>
          <NavLink className="active:border-b-2 " to="/about">About</NavLink>
          <NavLink className="active:border-b-2 " to="/contact">Contact</NavLink>
          <NavLink className="active:border-b-2 " to="/cart">Cart</NavLink>
          {
            userInfo?.role === 'seller' ? <NavLink className="active:border-b-2 " to="/sellerdashboard">Dashboard</NavLink> : userInfo?.role === 'admin' ? <NavLink className="active:border-b-2 " to="/admindashboard">Admin</NavLink> : <NavLink className="active:border-b-2 " to="dashboard"> Dashboard</NavLink>
          }
          
        </div>
        <div>
          {
            user? <Link className="btn btn-error" onClick={handleLogOut}>Logout</Link>: <Link className="btn btn-secondary" to='/login'>Login</Link>
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;
