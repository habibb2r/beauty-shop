import { NavLink } from "react-router-dom";
import useGetUserInfo from "../../../Hooks/CommonHooks/useGetUserInfo";


const DasboardNavbar = () => {
    const [userInfo, , isLoading] = useGetUserInfo()

    if(isLoading){
        return <div className="loading loading-spinner loading-lg"></div>
    }
    return (
        <div>
            <div>
                {
                    userInfo?.role === 'admin' ? <>
                    <NavLink>Admin</NavLink></> : userInfo?.role === 'seller' ? <>
                    <NavLink>Seller</NavLink></> : <><NavLink>Customer</NavLink></>
                }
            </div>
        </div>
    );
};

export default DasboardNavbar;