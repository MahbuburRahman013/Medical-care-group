import toast from "react-hot-toast";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";

const SocialLogin = () => {
   const { signInWithGoogle } = useAuth();

   const handleGoogleLogin = async () => {
      try {
         const result = await signInWithGoogle();
         console.log(result)
         toast.success('Successfully Sign in With Google');
      } catch (error) {
         toast.error(error);
      }
   };
   return (
      <>
         <div className='flex flex-col md:flex-row gap-5'>
            <button
               className='flex w-full items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-gray-800 rounded-md group hover:bg-gray-800 focus:outline-none'>
               <span>
                  <FaGithub className='w-5 h-5 text-gray-800 fill-current group-hover:text-white' />
               </span>
               <span className='text-sm font-medium text-gray-800 group-hover:text-white'>
                  Github
               </span>
            </button>
            <button onClick={handleGoogleLogin}
               className='flex w-full items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-blue-500 rounded-md group hover:bg-blue-500 focus:outline-none'>
               <span>
                  <FcGoogle className='text-blue-500 text-xl group-hover:text-white' />
               </span>
               <span className='text-sm font-medium text-blue-500 group-hover:text-white'>
                  Google
               </span>
            </button>
         </div>
      </>
   );
};

export default SocialLogin;