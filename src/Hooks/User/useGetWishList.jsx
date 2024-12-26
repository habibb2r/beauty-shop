import { useQuery } from "@tanstack/react-query"
import useAuth from "../CommonHooks/useAuth"
import useAxiosSecure from "../CommonHooks/useAxiosSecure"



const useGetWishList = () => {
    const {user, loading} = useAuth()
    
    const axiosSecure = useAxiosSecure()
    const {data : wishLists=[],isLoading: loadWishList,refetch: reloadWishList} = useQuery({
        queryKey: ['wishlist'],
        enabled: !loading,
        queryFn: async ()=>{
            const res = await axiosSecure.get(`/wishlist?email=${user? user.email:"false"}`)
            return res.data;
        }
    })
    return [wishLists ,loadWishList, reloadWishList]
}
export default useGetWishList;