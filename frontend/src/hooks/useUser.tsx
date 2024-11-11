import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useUser = () => {
    const axiosSecure = useAxiosSecure()
    const {data: users =[], refetch} = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
          const res = await  axiosSecure.get('/api/users', {
            headers:{
              authorization: `Bearer ${localStorage.getItem('access-token')}`
            }
          })
          return res.data
        }
    })
    return [users, refetch]
};

export default useUser;