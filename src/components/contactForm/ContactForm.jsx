import { useForm } from 'react-hook-form';
import { useEffect } from "react";
import { saveAppointment } from '../../api/appoinment';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';
import useDoctorsInfo from '../../hooks/useDoctorsInfo';

const timeDatas = [
   "09:00 AM - 09:30 AM",
   "09:30 AM - 10:00 AM",
   "10:00 AM - 10:30 AM",
   "10:30 AM - 11:00 AM",
]

const ContactForm = () => {
   const { data: doctorsInfo } = useDoctorsInfo()

   const options = { day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
   const createdAt = new Date().toLocaleString('en-US', options);

   const { register, handleSubmit } = useForm();

   const onSubmit = async (data) => {

      const appointmentData = {
         ...data,
         createdAt
      }
      try {
         await saveAppointment(appointmentData);
         Swal.fire({
            position: "center",
            icon: "success",
            title: "Your appointment has been saved",
            showConfirmButton: false,
            timer: 1500,
         });
      } catch (error) {
         console.error("Error saving appointment:", error);
         toast.error(error.message || "An error occurred");
      }
   };

   return (
      <>
         <div className="max-w-[500px]">
            <div className="flex flex-col items-start justify-center w-full mb-5">
               <h2 className="text-center text-lg font-['Work_Sans'] font-bold tracking-[2.88] uppercase text-[#159eec]">
                  Get in touch
               </h2>
               <h2 className="text-center text-3xl text-[#1f2b6c] font-semibold">Contact</h2>
            </div>
            <div className="bg-[#1f2b6c]">
               <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="grid grid-cols-2">
                     <div className="col-span-1">
                        <input className="bg-transparent border px-1 py-2 w-full h-10 text-white placeholder:text-white" type="text" placeholder="Full Name" required {...register("name", {})} />
                     </div>
                     <div className="col-span-1">
                        <input className="bg-transparent border px-1 py-2 w-full h-10 text-white placeholder:text-white" type="email" placeholder="Email" required {...register("email", { pattern: /^\S+@\S+$/i })} />
                     </div>
                     <div className="col-span-2">
                        <input className="bg-transparent border px-1 py-2 w-full h-10 text-white placeholder:text-white" type="text" placeholder="Subject" required {...register("subject", {})} />
                     </div>
                     <div className="col-span-2">
                        <textarea placeholder="Message" className="bg-transparent border px-1 py-2 text-white placeholder:text-white" required {...register("message", {})} style={{ width: "100%" }} rows={6} />
                     </div>
                     <div className="col-span-2">
                        <input className="bg-blue-300 cursor-pointer  border px-1 py-2 w-full h-10 text-black font-semibold text-xl hover:bg-blue-800 hover:text-white placeholder:text-white" type="submit" value="Send Message" />
                     </div>
                  </div>
               </form>
            </div>
         </div>
      </>
   );
};

export default ContactForm;