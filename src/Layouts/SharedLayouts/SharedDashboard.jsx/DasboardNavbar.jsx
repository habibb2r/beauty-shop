import { Link, NavLink } from "react-router-dom";
import useGetUserInfo from "../../../Hooks/CommonHooks/useGetUserInfo";

const DasboardNavbar = () => {
  const [userInfo, , isLoading] = useGetUserInfo();

  if (isLoading) {
    return <div className="loading loading-spinner loading-lg"></div>;
  }
  return (
    <div>
      <div className="">
        {userInfo?.role === "admin" ? (
          <>
            <div className="">
                   <div className="flex justify-center items-center gap-5 px-5 py-3 bg-slate-200 absolute bottom-[5%] left-[45%] rounded-lg">
                        <NavLink className={({ isActive }) =>
            `shadow-lg shadow-slate-500 rounded-md font-semibold px-2 py-3 ${isActive ? 'bg-slate-500 text-white' : ''}`
          }>Home</NavLink>
                        <NavLink to="/admindashboard/manageuser"  className={({ isActive }) =>
            `shadow-lg shadow-slate-500 rounded-md font-semibold px-2 py-3 ${isActive ? 'bg-slate-800 text-white' : ''}`
          }>Manage User</NavLink>
                        </div>
                   </div>
          </>
        ) : userInfo?.role === "seller" ? (
          <>
             <div className="">
                   <div className="flex justify-center items-center gap-5 px-5 py-3 bg-slate-200 absolute bottom-[5%] left-[45%] rounded-lg">
                        <NavLink className={({ isActive }) =>
            `shadow-lg shadow-slate-500 rounded-md font-semibold px-2 py-3 ${isActive ? 'bg-slate-500 text-white' : ''}`
          }>Home</NavLink>
                        <NavLink to="/sellerdashboard/additem"  className={({ isActive }) =>
            `shadow-lg shadow-slate-500 rounded-md font-semibold px-2 py-3 ${isActive ? 'bg-slate-800 text-white' : ''}`
          }>Add Item</NavLink>
                        <NavLink to="/sellerdashboard/allitems"  className={({ isActive }) =>
            `shadow-lg shadow-slate-500 rounded-md font-semibold px-2 py-3 ${isActive ? 'bg-slate-800 text-white' : ''}`
          }>All Item</NavLink>
                        <NavLink to="/sellerdashboard/manageitem"  className={({ isActive }) =>
            `shadow-lg shadow-slate-500 rounded-md font-semibold px-2 py-3 ${isActive ? 'bg-slate-800 text-white' : ''}`
          }>Manage Item</NavLink>
                        </div>
                   </div>
          </>
        ) : (
          <>
            <div className="">
              <div className="flex justify-center items-center gap-5 px-5 py-3 bg-slate-200 absolute bottom-[5%] left-[45%] rounded-lg">
                <NavLink
                  className={({ isActive }) =>
                    `shadow-lg shadow-slate-500 rounded-md font-semibold px-2 py-3 ${
                      isActive ? "bg-slate-500 text-white" : ""
                    }`
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  to="/dashboard/cart"
                  className={({ isActive }) =>
                    `shadow-lg shadow-slate-500 rounded-md font-semibold px-2 py-3 ${
                      isActive ? "bg-slate-800 text-white" : ""
                    }`
                  }
                >
                  Cart
                </NavLink>
                <NavLink
                  to="/dashboard/wishlist"
                  className={({ isActive }) =>
                    `shadow-lg shadow-slate-500 rounded-md font-semibold px-2 py-3 ${
                      isActive ? "bg-slate-800 text-white" : ""
                    }`
                  }
                >
                  WishList
                </NavLink>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default DasboardNavbar;
