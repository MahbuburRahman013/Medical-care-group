import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
const Login = () => {
   let [isOpen, setIsOpen] = useState(false);
   const { register, handleSubmit,
      // formState: { errors }
   } = useForm();
   const onSubmit = (data) => console.log(data);
   // console.log(errors);

   function closeModal() {
      setIsOpen(false);
   }

   function openModal() {
      setIsOpen(true);
   }

   return (
      <>
         <div className='fixed inset-0 flex items-center justify-center'>
            <button
               type='button'
               onClick={openModal}
               className='rounded-md bg-sky-600 px-4 py-2 text-sm font-medium text-white hover:bg-sky-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75'>
               Open dialog
            </button>
         </div>

         <Transition appear show={isOpen} as={Fragment}>
            <Dialog as='div' className='relative z-10' onClose={closeModal}>
               <Transition.Child
                  as={Fragment}
                  enter='ease-out duration-300'
                  enterFrom='opacity-0'
                  enterTo='opacity-100'
                  leave='ease-in duration-200'
                  leaveFrom='opacity-100'
                  leaveTo='opacity-0'>
                  <div className='fixed inset-0 bg-black/25' />
               </Transition.Child>

               <div className='fixed inset-0 overflow-y-auto'>
                  <div className='flex min-h-full items-center justify-center text-center'>
                     <Transition.Child
                        as={Fragment}
                        enter='ease-out duration-300'
                        enterFrom='opacity-0 scale-95'
                        enterTo='opacity-100 scale-100'
                        leave='ease-in duration-200'
                        leaveFrom='opacity-100 scale-100'
                        leaveTo='opacity-0 scale-95'>
                        <Dialog.Panel className='w-full max-w-3xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                           {/* <Dialog.Title
                              as='h3'
                              className='text-lg font-medium leading-6 text-gray-900'>
                              Payment successful
                           </Dialog.Title> */}
                           <div className='flex items-center bg-gray-100 lg:justify-center'>
                              <div className='flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1'>
                                 <div className=' py-6 text-white bg-blue-500 md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly'>
                                    <div className='my-3 text-4xl font-bold tracking-wider text-center'>
                                       <a href='#'>Madical Care <br />Hospital</a>
                                    </div>
                                    <p className='mt-6 font-normal text-center text-gray-300 md:mt-0'>
                                       Welcome to Medical Care Hospital—where your health is our priority. Experience top-notch healthcare with our dedicated team. Explore the power of K-WD technology for seamless navigation. Your journey to wellness begins here.
                                    </p>
                                    <p className='flex flex-col items-center justify-center mt-10 text-center'>
                                       <span>Don't have an account?</span>
                                       <Link to="/register" className='py-1 px-3 rounded-3xl border-white border hover:bg-blue-900'>
                                          Get Started!
                                       </Link>
                                    </p>
                                    <p className='mt-6 text-sm text-center text-gray-300'>
                                       Read our{' '}
                                       <a href='#' className='underline'>
                                          terms
                                       </a>{' '}
                                       and{' '}
                                       <a href='#' className='underline'>
                                          conditions
                                       </a>
                                    </p>
                                 </div>
                                 <div className='p-5 bg-white md:flex-1'>
                                    <h3 className='my-4 text-2xl font-semibold text-gray-700'>
                                       Account Login
                                    </h3>
                                    <form onSubmit={handleSubmit(onSubmit)}
                                       className='flex flex-col space-y-5'>
                                       <div className='flex flex-col space-y-1'>
                                          <label
                                             for='email'
                                             className='text-sm font-semibold text-gray-500'>
                                             Email address
                                          </label>
                                          <input
                                             type='text'
                                             placeholder='Email'
                                             className='px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200'
                                             {...register('Email', { pattern: /^\S+@\S+$/i })}
                                          />
                                       </div>
                                       <div className='flex flex-col space-y-1'>
                                          <div className='flex items-center justify-between'>
                                             <label
                                                for='password'
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
                                             {...register('Password', {
                                                required: true,
                                                minLength: 6,
                                                maxLength: 12,
                                                pattern:
                                                   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
                                             })}
                                          />
                                       </div>
                                       <div className='flex items-center space-x-2'>
                                          <input type="checkbox" placeholder="Remember Me" required className='w-4 h-4 transition duration-300 rounded focus:ring-2 focus:ring-offset-0 focus:outline-none focus:ring-blue-200' {...register("rememberMe")} />
                                          <label
                                             for='remember'
                                             className='text-sm font-semibold text-gray-500'>
                                             Remember me
                                          </label>
                                       </div>
                                       <div>
                                          <input type='submit' value="Login" className='w-full cursor-pointer px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-blue-500 rounded-md shadow hover:bg-blue-900 focus:outline-none focus:ring-blue-200 focus:ring-4' />
                                       </div>
                                       <div className='flex flex-col space-y-5'>
                                          <span className='flex items-center justify-center space-x-2'>
                                             <span className='h-px bg-gray-400 w-14'></span>
                                             <span className='font-normal text-gray-500'>
                                                or login with
                                             </span>
                                             <span className='h-px bg-gray-400 w-14'></span>
                                          </span>
                                          <div className='flex flex-col space-y-4'>
                                             <a
                                                href='#'
                                                className='flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-gray-800 rounded-md group hover:bg-gray-800 focus:outline-none'>
                                                <span>
                                                   <FaGithub className='w-5 h-5 text-gray-800 fill-current group-hover:text-white' />
                                                </span>
                                                <span className='text-sm font-medium text-gray-800 group-hover:text-white'>
                                                   Github
                                                </span>
                                             </a>
                                             <a
                                                href='#'
                                                className='flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-blue-500 rounded-md group hover:bg-blue-500 focus:outline-none'>
                                                <span>
                                                   <FcGoogle className='text-blue-500 text-xl group-hover:text-white' />
                                                </span>
                                                <span className='text-sm font-medium text-blue-500 group-hover:text-white'>
                                                   Google
                                                </span>
                                             </a>
                                          </div>
                                       </div>
                                    </form>
                                 </div>
                              </div>
                           </div>

                        </Dialog.Panel>
                     </Transition.Child>
                  </div>
               </div>
            </Dialog>
         </Transition>
      </>
   );
};
export default Login;
