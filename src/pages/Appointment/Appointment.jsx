import { useLocation } from "react-router";
import banner from "../../assets/Rectangle 3 (3).png"
import PageBanner from "../../shared/PageBanner/PageBanner";
import AppointmentForm from "../../shared/AppointmentForm/AppointmentForm";
import ContactCard from "../../shared/ContactCard/ContactCard";
import MapBox from "../../shared/MapBox/MapBox";

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
         <MapBox />
         <ContactCard />
      </>
   );
};

export default Appointment;
