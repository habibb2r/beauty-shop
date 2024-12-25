import { Outlet } from "react-router-dom";
import DasboardNavbar from "../SharedLayouts/SharedDashboard.jsx/DasboardNavbar";


const UserDashboard = () => {
    return (
        <div>
            <DasboardNavbar></DasboardNavbar>
            <Outlet></Outlet>
        </div>
    );
};

export default UserDashboard;