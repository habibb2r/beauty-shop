import { Outlet } from "react-router-dom";
import DasboardNavbar from "../SharedLayouts/SharedDashboard.jsx/DasboardNavbar";


const SellerDashboard = () => {
    return (
        <div>
            <DasboardNavbar></DasboardNavbar>
            <Outlet></Outlet>
        </div>
    );
};

export default SellerDashboard;