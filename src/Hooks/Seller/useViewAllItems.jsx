
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../CommonHooks/useAxiosSecure';

const useViewAllItems = () => {
    const axiosSecure = useAxiosSecure()
    const { data : viewItems, refetch: refetchAllItems, isLoading: loadItems} = useQuery({
        queryKey: ['allItems'],
        queryFn: async()=>{
            const res = await axiosSecure.get(`${import.meta.env.VITE_backend_server}/allitems`)
            return res.data
        }
    })
    return [viewItems, refetchAllItems, loadItems]
};

export default useViewAllItems;