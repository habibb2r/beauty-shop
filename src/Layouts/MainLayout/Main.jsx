import { Outlet } from "react-router-dom";
import Navbar from "../SharedLayouts/Navbar/Navbar";
import Footer from "../SharedLayouts/Footer/Footer";
import ChatWithUs from "../../Components/ChatUs/ChatWithUs";

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="min-h-screen pt-[20%] md:pt-[7%]">
            <Outlet></Outlet>
            </div>
            <ChatWithUs></ChatWithUs>
            <Footer></Footer>
        </div>
    );
};

export default Main;