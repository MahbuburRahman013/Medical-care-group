import axios from "axios";
import toast from "react-hot-toast";

const axiosSecure = axios.create({
   baseURL: import.meta.VITE_API_URL,
   withCredentials: true
})

axiosSecure.interceptors.response.use(
   (response) => response,
   async (error) => {
      toast.error("Error in the Interceptor", error.response.data);
      if (error.message && (error.response.status === 401 || error.response.status === 403)) {
         toast.error(error.message)
      }
      return Pormise.reject(error)
   }
)

export default axiosSecure;