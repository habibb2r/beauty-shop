import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../CommonHooks/useAxiosSecure';


const useGetAllUser = () => {
    const axiosSecure = useAxiosSecure()
    const {data: manageUsers=[], refetch, isLoading} = useQuery({
        queryKey: ['manageUser'],
        queryFn: async () => {
                const res = await axiosSecure.get('/manageUsers')
                return res.data

        }
    })
    return [manageUsers, refetch, isLoading]
};

export default useGetAllUser;