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

const AppointmentForm = () => {
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
         <div className="bg-[#1f2b6c]">
            <form onSubmit={handleSubmit(onSubmit)}>
               <div className="grid grid-cols-2">
                  <div className="col-span-1">
                     <input className="bg-transparent border p-1 w-full h-10 text-white placeholder:text-white" type="text" placeholder="Full Name" required {...register("name", {})} />
                  </div>
                  <div className="col-span-1">
                     <select defaultValue="" className="bg-[#1f2b6c] border p-1 w-full h-10 text-white placeholder:text-white" required {...register("gender")}>
                        <option disabled value="">Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                     </select>
                  </div>
                  <div className="col-span-1">
                     <input className="bg-transparent border p-1 w-full h-10 text-white placeholder:text-white" type="email" placeholder="Email" required {...register("email", { pattern: /^\S+@\S+$/i })} />
                  </div>
                  <div className="col-span-1">
                     <input
                        className="bg-transparent border p-1 w-full h-10 text-white placeholder:text-white"
                        type="tel"
                        placeholder="Mobile number"
                        required
                        {...register("mobileNumber", { minLength: 10, maxLength: 12 })}
                     />
                  </div>
                  <div className="col-span-1">
                     <input
                        type="date"
                        placeholder="Date"
                        required
                        {...register('date')}
                        className="bg-transparent border p-1 w-full h-10 text-white placeholder:text-white"
                     />
                  </div>
                  <div className="col-span-1">
                     <select defaultValue="" className="bg-[#1f2b6c] border p-1 w-full h-10 text-white placeholder:text-white" required {...register("time")}>
                        <option disabled value="">Time</option>
                        {
                           timeDatas.map((timeData, index) => (
                              <option key={index} value={timeData}>{timeData}</option>
                           ))
                        }
                     </select>
                  </div>
                  <div className="col-span-1">
                     <select defaultValue="" className="bg-[#1f2b6c] border p-1 w-full h-10 text-white placeholder:text-white" required {...register("doctor")}>
                        <option disabled value="">Doctor's</option>
                        {
                           doctorsInfo?.map((info, index) => (
                              <option key={index} value={info?.doctorName}>{info?.doctorName}</option>
                           ))
                        }
                        <option value="Dr. Mahbub Islam">Dr. Mahbub Islam</option>
                     </select>

                  </div>
                  <div className="col-span-1">
                     <select defaultValue="" className="bg-[#1f2b6c] border p-1 w-full h-10 text-white placeholder:text-white" required {...register("department")}>
                        <option disabled value="">Department</option>
                        <option value="Cardiology">Cardiology</option>
                        <option value="E&T">E&T</option>
                     </select>
                  </div>
                  <div className="col-span-2">
                     <textarea placeholder="Message" className="bg-transparent border p-1 text-white placeholder:text-white" required {...register("message", {})} style={{ width: "100%" }} rows={5} />
                  </div>
                  <div className="col-span-2">
                     <input className="bg-blue-300 cursor-pointer  border p-1 w-full h-10 text-black font-semibold text-xl hover:bg-blue-800 hover:text-white placeholder:text-white" type="submit" />
                  </div>
               </div>
            </form>
         </div>
      </>
   );
};

export default AppointmentForm;