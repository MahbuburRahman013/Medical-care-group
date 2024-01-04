import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { useForm } from 'react-hook-form';
import Register from '../Register/Register';
import useAuth from '../../hooks/useAuth';
import SocialLogin from './SocialLogin';
import toast from 'react-hot-toast';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TbFidgetSpinner } from 'react-icons/tb'
import { Tooltip } from '@mui/material';

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import LogoutIcon from '@mui/icons-material/Logout';
import { Login as LoggedIn, Person2 } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { MdDashboard } from "react-icons/md";
const userIcon = 'https://i.ibb.co/6HtdFTk/585e4bf3cb11b227491c339a.png'

const style = {
   position: 'absolute',
   top: '50%',
   left: '50%',
   transform: 'translate(-50%, -50%)',
   width: 400,
   bgcolor: 'background.paper',
   boxShadow: 24,
   p: 4,
};

const Login = () => {
   let [isOpen, setIsOpen] = useState(false);
   const [loading, setLoading] = useState(false)
   const [open, setOpen] = useState(false);
   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);

   const { logOut, signIn, resetPassword, user } = useAuth()

   const [change, setChange] = useState()
   const { register, handleSubmit, reset } = useForm();

   const onSubmit = async (data) => {
      const { email, password } = data;
      setLoading(false)
      try {
         await signIn(email, password)
         toast.success("Login Successfully")
         reset()
         setLoading(false)
         setIsOpen(false);
      } catch (error) {
         toast.error(error.message)
         setLoading(false)
      }
   }

   function closeModal() {
      setIsOpen(false);
   }

   function openModal() {
      setIsOpen(true);
   }

   const handleChange = () => {
      setChange(!change)
   }

   // ==================================
   const [anchorElUser, setAnchorElUser] = useState(null);

   const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
   };

   const handleCloseUserMenu = () => {
      setAnchorElUser(null);
   };
   // ==================================


   const handleResetPassword = async (e) => {
      e.preventDefault();
      const form = e.target
      const email = form.resetEmail.value;

      try {
         await resetPassword(email);
         toast.success("Password reset email sent successfully. Check your email.");

         // Reset the form
         form.reset();
      } catch (error) {
         toast.error(error.message);
      }
   };
   return (
      <>
         <div className='inset-0 flex items-center justify-center'>
            <Box sx={{ flexGrow: 0 }}>
               <Tooltip title="Open Profile">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                     <Avatar alt="User Pic" src={user?.photoURL ? user?.photoURL : userIcon} />
                  </IconButton>
               </Tooltip>
               <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                     vertical: 'top',
                     horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                     vertical: 'top',
                     horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
               >
                  {
                     user && user?.email ?
                        <Box>
                           <MenuItem sx={{ display: 'block' }} onClick={handleCloseUserMenu}>
                              <Typography sx={{ paddingLeft: '5px', py: 1, display: 'flex', justifyContent: 'left', alignItems: 'center', ":hover": { backgroundColor: "#001B79", color: "white", borderRadius: 2 } }} textAlign="center">
                                 <Person2 />
                                 <span className='pl-3'>{user?.displayName}</span>
                              </Typography>

                              <Link to="/dashboard" className='flex justify-start items-center gap-2 px-2 hover:bg-[#001B79] hover:text-white py-2 rounded-md'>
                                 <MdDashboard />
                                 Dashboard
                              </Link>
                              <Button
                                 onClick={logOut}
                                 sx={{
                                    display: 'flex',
                                    justifyContent: 'start',
                                    alignItems: 'center',
                                    color: 'red',
                                    fontWeight: '600',
                                    width: '100%',
                                    '&:hover': {
                                       backgroundColor: '#001B79',
                                    },
                                    marginTop: '5px'
                                 }}
                              >
                                 <LogoutIcon />
                                 <span className='pl-2'>LogOut</span>
                              </Button>
                           </MenuItem>
                        </Box> : <MenuItem sx={{ display: 'grid' }} onClick={handleCloseUserMenu}>
                           <Button onClick={openModal} sx={{ fontWeight: 700, ":hover": { color: 'white', backgroundColor: "#1f2b6c" } }}>
                              <LoggedIn sx={{ mr: 1 }} />Login
                           </Button>
                        </MenuItem>
                  }
               </Menu>
            </Box>
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

               <div className='fixed inset-0 overflow-y-scroll'>
                  <div className='flex min-h-full items-center justify-center text-center'>
                     <Transition.Child
                        as={Fragment}
                        enter='ease-out duration-300'
                        enterFrom='opacity-0 scale-95'
                        enterTo='opacity-100 scale-100'
                        leave='ease-in duration-200'
                        leaveFrom='opacity-100 scale-100'
                        leaveTo='opacity-0 scale-95'>

                        <Dialog.Panel className='w-full mx-5 md:mx-0 md:w-full relative flex items-center max-w-3xl h-[100vh]  md:h-[510px] transform overflow-y-scroll md:overflow-y-hidden rounded-2xl bg-white md:p-6 text-left align-middle shadow-xl transition-all'>
                           {/* Login */}
                           <div className={`flex items-center absolute bg-gray-100 lg:justify-center ${change ? "hidden" : "visible"}`}>
                              <div className='flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1'>
                                 <div className=' py-6 text-white bg-blue-500 md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly'>
                                    <div className='my-3 text-4xl font-bold tracking-wider text-center'>
                                       <a href='#'>Madical Care <br />Hospital</a>
                                    </div>
                                    <p className='mt-6 p-2 font-normal text-center text-gray-300 md:mt-0'>
                                       Welcome to Medical Care Hospital—where your health is our priority. Experience top-notch healthcare with our dedicated team. Explore the power of K-WD technology for seamless navigation. Your journey to wellness begins here.
                                    </p>
                                    <p className='flex flex-col items-center justify-center mt-10 text-center'>
                                       <span>Don't have an account?</span>
                                       <button onClick={handleChange} className='py-1 px-3 rounded-3xl border-white border hover:bg-blue-900'>
                                          Get Started!
                                       </button>
                                    </p>
                                    <p className='mt-6 text-sm text-center text-gray-300'>
                                       Read our{' '}
                                       <a href='#' className='underline text-white'>
                                          terms
                                       </a>{' '}
                                       and{' '}
                                       <a href='#' className='underline text-white'>
                                          conditions
                                       </a>
                                    </p>
                                 </div>
                                 <div className='p-5 bg-white md:flex-1 md:w-[405px]'>
                                    <h3 className='my-4 text-2xl font-semibold text-gray-700'>
                                       Account Login
                                    </h3>
                                    <form onSubmit={handleSubmit(onSubmit)}
                                       className='flex flex-col space-y-5'>
                                       <div className='flex flex-col space-y-1'>
                                          <label
                                             htmlFor='email'
                                             className='text-sm font-semibold text-gray-500'>
                                             Email address
                                          </label>
                                          <input
                                             type='text'
                                             onChange={(e) => console.log(e.target)}
                                             placeholder='Email'
                                             className='px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200'
                                             {...register('email', { pattern: /^\S+@\S+$/i })}
                                          />
                                       </div>
                                       <div className='flex flex-col space-y-1'>
                                          <div className='flex items-center justify-between'>
                                             <label
                                                htmlFor='password'
                                                className='text-sm font-semibold text-gray-500'>
                                                Password
                                             </label>
                                             <button onClick={handleOpen} className='text-sm text-blue-600 hover:underline focus:text-blue-800'>
                                                Forgot Password?
                                             </button>
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
                                       <div className='flex items-center space-x-2'>
                                          <input type="checkbox" placeholder="Remember Me" className='w-4 h-4 transition duration-300 rounded focus:ring-2 focus:ring-offset-0 focus:outline-none focus:ring-blue-200' {...register("rememberMe")} />
                                          <label
                                             htmlFor='remember'
                                             className='text-sm font-semibold text-gray-500'>
                                             Remember me
                                          </label>
                                       </div>
                                       <div>
                                          <button type='submit' value="Login" className='w-full cursor-pointer px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-blue-500 rounded-md shadow hover:bg-blue-900 focus:outline-none focus:ring-blue-200 focus:ring-4' >
                                             {loading ? <TbFidgetSpinner className='animate-spin mx-auto' /> : "Sign In"}
                                          </button>
                                       </div>
                                       <div className='flex flex-col space-y-5'>
                                          <span className='flex items-center justify-center space-x-2'>
                                             <span className='h-px bg-gray-400 w-14'></span>
                                             <span className='font-normal text-gray-500'>
                                                or login with
                                             </span>
                                             <span className='h-px bg-gray-400 w-14'></span>
                                          </span>
                                          <SocialLogin />
                                       </div>
                                    </form>
                                 </div>
                              </div>
                           </div>
                           {/* Registration */}
                           <Register handleChange={handleChange} change={change} setIsOpen={setIsOpen} />

                        </Dialog.Panel>
                     </Transition.Child>
                  </div>
               </div>
            </Dialog>
         </Transition>
         <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
         >
            <Box className="rounded-lg" sx={style}>
               <Typography id="modal-modal-title" variant="h6" component="h2">
                  Reset Password
               </Typography>
               <Typography id="modal-modal-description" sx={{ mt: 2 }}>

               </Typography>
               <form onSubmit={handleResetPassword}>
                  <input type="text" name="resetEmail" id="" className='border w-full p-2 rounded-md' placeholder='Type Your Email' />
                  <input type="submit" value="Reset" className='w-full mt-2 bg-blue-500 text-white font-semibold p-1 hover:bg-blue-900 cursor-pointer' />
               </form>
            </Box>
         </Modal>
      </>
   );
};
export default Login;
