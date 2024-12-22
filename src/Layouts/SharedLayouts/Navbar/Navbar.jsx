import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between items-center gap-5 px-5 py-5">
        <div>
          <img src="" alt="" />
        </div>
        <div className=" flex justify-center items-center gap-5 font-semibold">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div>
          <Link>Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
