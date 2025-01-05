
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const useProductDetails = (itemId) => {
    const id = itemId;
    console.log(id)
    const axiosSecure = useAxiosSecure()
    const {data : details, refetch: itemRefetch, isLoading } = useQuery({
        queryKey: ['productdetails'],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/details/${id}`)
            return res.data
        }
    })
    return [details, itemRefetch, isLoading]
};

export default useProductDetails;