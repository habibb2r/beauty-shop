import { Link, useNavigate } from "react-router-dom";
import logo from '../../../assets/logo.png'
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
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
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
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
