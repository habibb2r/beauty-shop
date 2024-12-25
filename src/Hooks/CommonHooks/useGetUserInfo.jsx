import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";



const useGetUserInfo = () => {
    const {user, loading}= useAuth()
    const axiosSecure = useAxiosSecure()
    const {data: userInfo, refetch, isLoading}= useQuery({
        queryKey: ['userInfo'],
        enabled: !loading,
        queryFn: async()=>{
            const res = await axiosSecure.get(`/userInfo?email=${user? user.email : false}`)
            return res.data
        }
    })
    return [userInfo, refetch, isLoading]
};

export default useGetUserInfo;