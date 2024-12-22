import { Outlet } from "react-router-dom";
import Navbar from "../SharedLayouts/Navbar/Navbar";

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <h1>footer</h1>
        </div>
    );
};

export default Main;