import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useDoctorsInfo = () => {
   const axiosPublic = useAxiosPublic()
   const { data, isLoading, refetch } = useQuery({
      queryKey: ['allUser'],
      queryFn: async () => {
         const { data } = await axiosPublic("/doctors")
         return data
      }
   })
   return { data, isLoading, refetch }
};

export default useDoctorsInfo;