import { useForm } from 'react-hook-form';
import { useEffect } from "react";

const AppointmentForm = () => {

   const { register, handleSubmit, setValue, formState: { errors } } = useForm();
   const onSubmit = data => console.log(data);
   console.log(errors);

   const getCurrentDate = () => {
      const currentDate = new Date();
      const year = currentDate.getFullYear();
      const month = `${currentDate.getMonth() + 1}`.padStart(2, '0'); // Month is 0-indexed
      const day = `${currentDate.getDate()}`.padStart(2, '0');
      return `${year}-${month}-${day}`;
   };

   useEffect(() => {
      setValue('date', getCurrentDate());
   }, [setValue]);

   return (
      <>
         <div className="max-w-[500px]">
            <h2 className="text-[32px] font-semibold">Book an Appoointment</h2>
            <p className="py-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et.</p>
            <div className="bg-[#1f2b6c]">
               <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="grid grid-cols-2">
                     <div className="col-span-1">
                        <input className="bg-transparent border p-1 w-full h-10 text-white placeholder:text-white" type="text" placeholder="Full Name" {...register("name", { required: true })} />
                     </div>
                     <div className="col-span-1">
                        <select defaultValue="" className="bg-[#1f2b6c] border p-1 w-full h-10 text-white placeholder:text-white" {...register("gender")}>
                           <option disabled value="">Gender</option>
                           <option value="Male">Male</option>
                           <option value="Female">Female</option>
                        </select>
                     </div>
                     <div className="col-span-1">
                        <input className="bg-transparent border p-1 w-full h-10 text-white placeholder:text-white" type="email" placeholder="Email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
                     </div>
                     <div className="col-span-1">
                        <input className="bg-transparent border p-1 w-full h-10 text-white placeholder:text-white" type="tel" placeholder="Mobile number" {...register("mobileNumber", { required: true, minLength: 6, maxLength: 12 })} />
                     </div>
                     <div className="col-span-1">
                        <input
                           type="date"
                           placeholder="Date"
                           {...register('date')}
                           className="bg-transparent border p-1 w-full h-10 text-white placeholder:text-white"
                        />
                     </div>
                     <div className="col-span-1">
                        <input
                           className="bg-transparent border p-1 w-full h-10 text-white placeholder:text-white"
                           type="time"
                           defaultValue=""
                           {...register("time", {})}
                        />
                     </div>
                     <div className="col-span-1">
                        <select defaultValue="" className="bg-[#1f2b6c] border p-1 w-full h-10 text-white placeholder:text-white" {...register("doctor")}>
                           <option disabled value="">Doctor's</option>
                           <option value="Dr. Sohan Perves">Dr. Sohan Perves</option>
                           <option value="Dr. Mahbub Islam">Dr. Mahbub Islam</option>
                        </select>

                     </div>
                     <div className="col-span-1">
                        <select defaultValue="" className="bg-[#1f2b6c] border p-1 w-full h-10 text-white placeholder:text-white" {...register("department")}>
                           <option disabled value="">Department</option>
                           <option value="Cardiology">Cardiology</option>
                           <option value="E&T">E&T</option>
                        </select>
                     </div>
                     <div className="col-span-2">
                        <textarea placeholder="Message" className="bg-transparent border p-1 text-white placeholder:text-white" {...register("message", {})} style={{ width: "100%" }} rows={5} />
                     </div>
                     <div className="col-span-2">
                        <input className="bg-blue-300  border p-1 w-full h-10 text-black font-semibold text-xl hover:bg-blue-800 hover:text-white placeholder:text-white" type="submit" />
                     </div>
                  </div>
               </form>
            </div>
         </div>
      </>
   );
};

export default AppointmentForm;