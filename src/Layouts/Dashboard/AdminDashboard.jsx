import { Outlet } from "react-router-dom";
import DasboardNavbar from "../SharedLayouts/SharedDashboard.jsx/DasboardNavbar";


const AdminDashboard = () => {
    return (
        <div>
            <DasboardNavbar></DasboardNavbar>
            <Outlet></Outlet>
        </div>
    );
};

export default AdminDashboard;