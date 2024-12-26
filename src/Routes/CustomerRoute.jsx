
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/CommonHooks/useAuth";
import useGetUserInfo from "../Hooks/CommonHooks/useGetUserInfo";



const CustomerRoute = ({children}) => {
    const { user, loading} = useAuth()
    const location = useLocation()
    const [userInfo, refetch, isLoading] = useGetUserInfo()

    if(loading){
        return <div className="loading loading-spinner loading-lg mx-auto"></div>
    }

    if(user){
        if(userInfo?.role === 'customer'){
            return children
        }
        else{
            return <Navigate to='/' state={{from: location}} replace></Navigate>
        }
        
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default CustomerRoute;