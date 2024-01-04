import Input from '@mui/material/Input';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const Footer = () => {
   return (
      <>
         <div className="bg-[#1b2661] px-5 lg:px-0 text-[#BFD2F8]">
            <div className="container flex lg:flex-row flex-col  justify-center gap-16 py-10 mx-auto">
               <div>
                  <h1 className="uppercase text-3xl text-[#BFD2F8] font-semibold">Medical Care</h1>
                  <p className="pt-5">Leading the Way in Medical
                     Execellence, Trusted Care.</p>
               </div>
               <div>
                  <h1 className="uppercase text-[#BFD2F8] font-semibold">Important Links</h1>
                  <div className="pt-5">
                     <p>Appointment</p>
                     <p>Doctors</p>
                     <p>Appointment</p>
                     <p>Doctors</p>
                  </div>
               </div>
               <div>
                  <h1 className="uppercase text-[#BFD2F8] font-semibold">Contact Us</h1>
                  <div className="pt-5">
                     <p>Call: (237) 681-812-255</p>
                     <p>Email: fildineesoe@gmail.com</p>
                     <p>Address: 0123 Some place</p>
                     <p>Some country</p>
                  </div>
               </div>
               <div>
                  <h1 className="uppercase text-[#BFD2F8] font-semibold">Newsletter</h1>
                  <div className="mt-5  bg-[#BFD2F8]">
                     <Input
                        slotProps={{ input: { placeholder: 'A placeholder', type: 'email' } }}
                        sx={{
                           bgcolor: '#BFD2F8'
                        }}
                     />
                     <Button>{<SendIcon />}</Button>
                  </div>
               </div>
            </div>
            <div className="container mx-auto">
               <Divider sx={{ backgroundColor: '#BFD2F8' }} />
               <div className="py-3 flex justify-between items-center">
                  <small>© 2021 Hospital's name All Rights Reserved by PNTEC-LTD</small>
                  <div>
                     <IconButton sx={{ color: "#BFD2F8" }} aria-label="delete">
                        <DeleteIcon />
                     </IconButton>
                     <IconButton sx={{ color: "#BFD2F8" }} aria-label="delete">
                        <DeleteIcon />
                     </IconButton>
                     <IconButton sx={{ color: "#BFD2F8" }} aria-label="delete">
                        <DeleteIcon />
                     </IconButton>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default Footer;
