import { useQuery } from "@tanstack/react-query"
import useAuth from "../CommonHooks/useAuth"
import useAxiosSecure from "../CommonHooks/useAxiosSecure"



const useGetCart = () => {
    const {user, loading} = useAuth()
    
    const axiosSecure = useAxiosSecure()
    const {data : cart=[],isLoading: loadCart,refetch: reloadCart} = useQuery({
        queryKey: ['cart'],
        enabled: !loading,
        queryFn: async ()=>{
            const res = await axiosSecure.get(`/cart?email=${user? user.email:"false"}`)
            return res.data;
        }
    })
    return [cart,loadCart, reloadCart]
}
export default useGetCart;