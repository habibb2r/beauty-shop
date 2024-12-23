import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useGetFeatured = () => {

    const axiosSecure = useAxiosSecure();
    const {data: featured=[], isLoading} = useQuery({
        queryKey: ['featured'],
        queryFn: async()=>{
            const res = await axiosSecure.get('/featured')
            return res.data
        }
    })
    return [featured, isLoading]
};

export default useGetFeatured;