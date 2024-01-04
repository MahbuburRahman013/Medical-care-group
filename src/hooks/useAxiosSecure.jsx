import axios from "axios";
import useAuth from "./useAuth";
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const axiosSecure = axios.create({
   baseURL: import.meta.VITE_API_URL,
   withCredentials: true
})

const useAxiosSecure = () => {
   const { logOut } = useAuth()
   const navigate = useNavigate();

   useEffect(() => {
      axiosSecure.interceptors.response.use(
         (response) => {
            return response;
         },
         (error) => {
            console.log('Error Tracked in the Interceptor', error.response);
            if (error.response.status === 401) {
               console.log('Logout the user');
               logOut()
                  .then(() => {
                     toast.success('Logout')
                     navigate('/');
                  })
                  .catch((error) => console.log(error));
            } else if (error.response.status === 403) {
               toast.success('Navigate');
               navigate('/');
            }
            return Promise.reject(error);
         }
      );
   }, [logOut, navigate]);

   return axiosSecure;
};

export default useAxiosSecure;