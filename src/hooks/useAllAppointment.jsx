import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useAllAppointment = () => {
   const axiosPublic = useAxiosPublic()
   const { data, isLoading, refetch } = useQuery({
      queryKey: ['allAppointments'],
      queryFn: async () => {
         const { data } = await axiosPublic.get('/appointments')
         return data
      }
   })
   return { data, isLoading, refetch }
};

export default useAllAppointment;