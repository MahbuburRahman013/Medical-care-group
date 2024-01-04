import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useAllUser = () => {
   const axiosPublic = useAxiosPublic()
   const { data, isLoading, refetch } = useQuery({
      queryKey: ['allUser'],
      queryFn: async () => {
         const { data } = await axiosPublic("/users")
         return data
      }
   })
   return { data, isLoading, refetch }
};

export default useAllUser;