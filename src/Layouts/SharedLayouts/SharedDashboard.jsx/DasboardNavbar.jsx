import { Link, NavLink } from "react-router-dom";
import useGetUserInfo from "../../../Hooks/CommonHooks/useGetUserInfo";

const DasboardNavbar = () => {
  const [userInfo, , isLoading] = useGetUserInfo();

  if (isLoading) {
    return <div className="loading loading-spinner loading-lg"></div>;
  }
  return (
    <div className="w-full flex justify-center absolute bottom-[15%]">
      <div className="fixed z-10">
        {userInfo?.role === "admin" ? (
          <>
            <div className="w-full mx-auto flex justify-center items-center ">
              <div className="flex justify-center items-center gap-2 md:gap-5 px-2 md:px-5 py-2 md:py-3 bg-slate-200  rounded-lg">
                <NavLink
                  className={({ isActive }) =>
                    `shadow-lg shadow-slate-500 rounded-md font-semibold text-sm px-2 md:px-4 py-2 md:py-3 ${
                      isActive ? "bg-slate-500 text-white" : ""
                    }`
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  to="/admindashboard/manageuser"
                  className={({ isActive }) =>
                    `shadow-lg shadow-slate-500 rounded-md font-semibold text-sm px-2 md:px-4 py-2 md:py-3 ${
                      isActive ? "bg-slate-800 text-white" : ""
                    }`
                  }
                >
                  Manage User
                </NavLink>
                <Link
                  to="/"
                  className={`shadow-lg shadow-slate-500 rounded-md font-semibold text-sm px-2 md:px-4 py-2 md:py-3`}
                >
                  Website Home
                </Link>
              </div>
            </div>
          </>
        ) : userInfo?.role === "seller" ? (
          <>
            <div className="w-full mx-auto flex justify-center items-center">
              <div className="flex justify-center items-center gap-2 md:gap-5 px-2 md:px-5 py-2 md:py-3 bg-slate-200  mx-auto rounded-lg">
                <NavLink
                  className={({ isActive }) =>
                    `shadow-lg shadow-slate-500 rounded-md font-semibold text-sm px-2 md:px-4 py-2 md:py-3 ${
                      isActive ? "bg-slate-500 text-white" : ""
                    }`
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  to="/sellerdashboard/additem"
                  className={({ isActive }) =>
                    `shadow-lg shadow-slate-500 rounded-md font-semibold text-sm px-2 md:px-4 py-2 md:py-3 ${
                      isActive ? "bg-slate-800 text-white" : ""
                    }`
                  }
                >
                  Add Item
                </NavLink>
                <NavLink
                  to="/sellerdashboard/manageitem"
                  className={({ isActive }) =>
                    `shadow-lg shadow-slate-500 rounded-md font-semibold text-sm px-2 md:px-4 py-2 md:py-3 ${
                      isActive ? "bg-slate-800 text-white" : ""
                    }`
                  }
                >
                  Manage Item
                </NavLink>
                <Link
                  to="/"
                  className={`shadow-lg shadow-slate-500 rounded-md font-semibold text-sm px-2 md:px-4 py-2 md:py-3`}
                >
                  Website Home
                </Link>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="w-full mx-auto flex justify-center items-center">
              <div className="flex flex-wrap justify-center items-center gap-5 px-2 md:px-5 py-2 md:py-3 bg-slate-200  mx-auto rounded-lg">
                <NavLink
                  className={({ isActive }) =>
                    `shadow-lg shadow-slate-500 rounded-md font-semibold text-sm px-2 md:px-4 py-2 md:py-3 ${
                      isActive ? "bg-slate-500 text-white" : ""
                    }`
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  to="/dashboard/cart"
                  className={({ isActive }) =>
                    `shadow-lg shadow-slate-500 rounded-md font-semibold text-sm px-2 md:px-4 py-2 md:py-3 ${
                      isActive ? "bg-slate-800 text-white" : ""
                    }`
                  }
                >
                  Cart
                </NavLink>
                <NavLink
                  to="/dashboard/wishlist"
                  className={({ isActive }) =>
                    `shadow-lg shadow-slate-500 rounded-md font-semibold text-sm px-2 md:px-4 py-2 md:py-3 ${
                      isActive ? "bg-slate-800 text-white" : ""
                    }`
                  }
                >
                  WishList
                </NavLink>
                <NavLink
                  to="/dashboard/orders"
                  className={({ isActive }) =>
                    `shadow-lg shadow-slate-500 rounded-md font-semibold text-sm px-2 md:px-4 py-2 md:py-3 ${
                      isActive ? "bg-slate-800 text-white" : ""
                    }`
                  }
                >
                  My Orders
                </NavLink>
                <Link
                  to="/"
                  className={`shadow-lg shadow-slate-500 rounded-md font-semibold text-sm px-2 md:px-4 py-2 md:py-3`}
                >
                  Website Home
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default DasboardNavbar;
