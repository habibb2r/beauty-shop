import { useQuery } from "@tanstack/react-query"
import useAuth from "../CommonHooks/useAuth"
import useAxiosSecure from "../CommonHooks/useAxiosSecure"



const useGetOrders = () => {
    const {user, loading} = useAuth()
    
    const axiosSecure = useAxiosSecure()
    const {data : orders=[],isLoading: loadorders,refetch: reloadorders} = useQuery({
        queryKey: ['orders'],
        enabled: !loading,
        queryFn: async ()=>{
            const res = await axiosSecure.get(`/orders?email=${user? user.email:"false"}`)
            return res.data;
        }
    })
    return [orders,loadorders, reloadorders]
}
export default useGetOrders;