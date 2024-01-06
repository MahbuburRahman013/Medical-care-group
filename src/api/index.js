import axios from 'axios';
// import { clearCookie } from './auth';

const axiosSecure = axios.create({
   baseURL: import.meta.env.VITE_API_URL,
   withCredentials: true,
});

// Intercept response and check for unauthorized response
axiosSecure.interceptors.response.use(
   (response) => response,
   async (error) => {
      console.log('Error in the interceptor', error.response.data);
      if (error.response && (error.response.status === 401 || error.response.status === 403)) {
         // await clearCookie();
         if (error.response.status === 403) {
            window.location.replace('/');
         } else {
            window.location.replace('/login');
         }
      }
      return Promise.reject(error);
   },
);

export default axiosSecure;








// import axios from "axios";
// import toast from "react-hot-toast";

// const axiosSecure = axios.create({
//    baseURL: import.meta.VITE_API_URL,
//    withCredentials: true,
// });

// axiosSecure.interceptors.response.use(
//    (response) => response,
//    async (error) => {
//       toast.error("Error in the Interceptor", error.response.data);
//       if (error.message && (error.response.status === 401 || error.response.status === 403)) {
//          toast.error(error.message);
//       }
//       return Promise.reject(error);
//    }
// );

// export default axiosSecure;
