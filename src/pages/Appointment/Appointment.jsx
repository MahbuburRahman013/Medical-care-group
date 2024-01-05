import { useLocation } from "react-router";
import banner from "../../assets/Rectangle 3 (3).png"
import PageBanner from "../../shared/PageBanner/PageBanner";
import AppointmentForm from "../../shared/AppointmentForm/AppointmentForm";
import Contact from "../../shared/Contact/Contact";

const Appointment = () => {

   const location = useLocation()
   const path = location.pathname.replace("/s", "/ S")

   const sheduleHore = [
      { day: "Monday", time: " 09:00 AM - 07:00 PM" },
      { day: "TuesDay", time: " 09:00 AM - 07:00 PM" },
      { day: "Wednesday", time: " 09:00 AM - 07:00 PM" },
      { day: "Thursday", time: " 09:00 AM - 07:00 PM" },
      { day: "Friday", time: " 09:00 AM - 07:00 PM" },
      { day: "Satarday", time: " 09:00 AM - 07:00 PM" },
      { day: "Sunday", time: "Closed" },
   ]

   return (
      <>
         <PageBanner banner={banner} path={path} value="Book an Appointment" />
         <div className="max-w-[1100px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-5 content-center justify-center items-center my-20 p-3 lg:p-0">
               {/* Appointment Form */}
               <AppointmentForm />

               {/* Shedule Hour */}
               <div className="flex flex-row max-w-[500px] items-start">
                  <div className="bg-[#1f2b6c] p-5 flex flex-col justify-center gap-5 w-full font-['Yeseva_One'] items-start rounded">
                     <h2 className="text-5xl text-[#bfd2f8] ml-4">Shedule hours</h2>
                     <div className="flex flex-col w-full font-['Work_Sans'] items-start">
                        <div className="flex flex-col gap-4 md:gap-6 w-full items-start">
                           {
                              sheduleHore.map(time => (
                                 <div key={time.day} className="grid grid-cols-7 gap-12 items-center">
                                    <h2 className="col-span-2 text-lg leading-[25.2px] text-[#fcfefe]">{time.day}</h2>
                                    <div className="col-span-1 h-[2px] bg-white w-5" />
                                    <h3 className="col-span-4 leading-[22.4px] text-[#fcfefe]">{time.time}</h3>
                                 </div>
                              ))
                           }
                        </div>

                        <img
                           src="https://file.rendit.io/n/Ympa3P8l9r1voRllEMm4.svg"
                           alt="Vector"
                           className="mx-auto mt-5 mb-3 md:mb-6 lg:mb-3"
                        />

                        <div className="flex flex-row w-full items-center justify-center">
                           <img
                              src="https://file.rendit.io/n/qT4v8vvouyYaeUrdMrhS.svg"
                              alt="Group"
                              className="mt-2 w-12"
                           />
                           <div className="flex flex-col ml-3 font-['Work_Sans'] items-start">
                              <div className="text-2xl font-medium text-[#fcfefe]">Emergency</div>
                              <div className="text-2xl font-medium text-[#bfd2f8]">
                                 (+880) 1234567890
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="max-w-[1100px] mx-auto mb-5">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d65109.45481943296!2d89.15221715680582!3d23.165151970395385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff108d87ea6d65%3A0x627d034ef93261cf!2sJashore!5e1!3m2!1sen!2sbd!4v1704449791019!5m2!1sen!2sbd" width="100%" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
         </div>
         <Contact />
      </>
   );
};

export default Appointment;
