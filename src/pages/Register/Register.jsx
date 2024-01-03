
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import useAuth from '../../hooks/useAuth';
import toast from 'react-hot-toast';
import { imageUpload } from '../../api/utilities';
const Register = ({ handleChange, change }) => {
   const { createUser, } = useAuth()
   const { register, handleSubmit,
      // formState: { errors }
   } = useForm();
   const onSubmit = async (data) => {
      const { name, email, password } = data;
      const image = data?.image[0]
      try {
         // Upload image
         const imageData = await imageUpload(image);
         // User Registration
         const result = await createUser(email, password);
         console.log(result)
         await updateUserProfile(name, imageData?.data?.display_url);
         toast.success('Sign up Successfull');
      } catch (error) {
         if (error.message) {
            toast.error('Email Already in Use.');
         }
      }
   }

   return (
      <>
         <div className={` absolute bg-gray-100 w-full md:max-w-[720px] overflow-x-hidden ${change ? "visible" : "hidden"}`}>
            <div className=' overflow-hidden bg-white rounded-md shadow-lg'>
               <div className='px-5 bg-white'>
                  <h3 className='my-4 text-2xl font-semibold text-gray-700'>
                     Account Registration
                  </h3>
                  <form onSubmit={handleSubmit(onSubmit)}
                     className='grid grid-cols-2 gap-5'>
                     <div className='flex flex-col col-span-2 md:col-span-1  space-y-1'>
                        <label
                           htmlFor='email'
                           className='text-sm font-semibold text-gray-500'>
                           Full Name
                        </label>
                        <input
                           type='text'
                           placeholder='Email'
                           className='px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200'
                           {...register('name')}
                        />
                     </div>
                     <div className='flex flex-col  col-span-2 md:col-span-1 space-y-1'>
                        <label
                           htmlFor='email'
                           className='text-sm font-semibold text-gray-500'>
                           Upload Image
                        </label>
                        <input
                           type='file'
                           placeholder='Image'
                           className='px-4 py-[6px] transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200'
                           {...register('image', { pattern: /^\S+@\S+$/i })}
                        />
                     </div>

                     <div className='flex flex-col  col-span-2 md:col-span-1 space-y-1'>
                        <label
                           htmlFor='email'
                           className='text-sm font-semibold text-gray-500'>
                           Email address
                        </label>
                        <input
                           type='text'
                           placeholder='Email'
                           className='px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200'
                           {...register('email', { pattern: /^\S+@\S+$/i })}
                        />
                     </div>
                     <div className='flex flex-col col-span-2 md:col-span-1 space-y-1'>
                        <div className='flex items-center justify-between'>
                           <label
                              htmlFor='password'
                              className='text-sm font-semibold text-gray-500'>
                              Password
                           </label>
                           <a
                              href='#'
                              className='text-sm text-blue-600 hover:underline focus:text-blue-800'>
                              Forgot Password?
                           </a>
                        </div>
                        <input
                           type='password'
                           placeholder='Password'
                           className='px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200'
                           {...register('password', {
                              required: true,
                              minLength: 6,
                              maxLength: 12,
                              pattern:
                                 /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
                           })}
                        />
                     </div>
                     <div className='flex items-center  col-span-2 space-x-2'>
                        <input type="checkbox" placeholder="Remember Me" required className='w-4 h-4 transition duration-300 rounded focus:ring-2 focus:ring-offset-0 focus:outline-none focus:ring-blue-200' {...register("rememberMe")} />
                        <label
                           htmlFor='remember'
                           className='text-sm font-semibold text-gray-500'>
                           Remember me
                        </label>
                     </div>
                     <div className=' col-span-2'>
                        <input type='submit' value="Login" className='w-full cursor-pointer px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-blue-500 rounded-md shadow hover:bg-blue-900 focus:outline-none focus:ring-blue-200 focus:ring-4' />
                     </div>
                  </form>
                  <div className='flex flex-col space-y-5'>
                     <span className='flex items-center  justify-center space-x-2 mt-4'>
                        <span className='h-px bg-gray-400 w-14'></span>
                        <span className='font-normal text-gray-500'>
                           or login with
                        </span>
                        <span className='h-px bg-gray-400 w-14 '></span>
                     </span>
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
                        <button
                           className='flex w-full items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-blue-500 rounded-md group hover:bg-blue-500 focus:outline-none'>
                           <span>
                              <FcGoogle className='text-blue-500 text-xl group-hover:text-white' />
                           </span>
                           <span className='text-sm font-medium text-blue-500 group-hover:text-white'>
                              Google
                           </span>
                        </button>
                     </div>
                     <p className='py-5 text-center flex items-center justify-center'>Already Have an Account! <span><button onClick={handleChange} className='py-1 px-3 bg-sky-600 rounded-3xl text-white ml-2 hover:bg-sky-900'>Login</button></span></p>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};
export default Register;
