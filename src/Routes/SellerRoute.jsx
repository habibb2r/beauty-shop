
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/CommonHooks/useAuth";
import useGetUserInfo from "../Hooks/CommonHooks/useGetUserInfo";
import Loading from "../Components/Reuseable/Loading";



const SellerRoute = ({children}) => {
    const { user, loading} = useAuth()
    const location = useLocation()
    const [userInfo, refetch, isLoading] = useGetUserInfo()

    if(loading && isLoading){
        return <Loading></Loading>
    }

    if(user){
        if(userInfo?.role === 'seller'){
            return children
        }
        else{
            return <Navigate to='/' state={{from: location}} replace></Navigate>
        }
        
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default SellerRoute;