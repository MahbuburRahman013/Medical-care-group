import { useLocation } from "react-router";
import banner from "../../assets/Rectangle 3 (2).png"
import PageBanner from "../../shared/PageBanner/PageBanner";
import MapBox from "../../shared/MapBox/MapBox";
import ContactForm from "../../components/contactForm/contactForm";
import { LuPhoneCall } from "react-icons/lu";
import { IoLocationOutline, IoMailOutline, IoTimeOutline } from "react-icons/io5";
import SmallNewsCard from "../../shared/SmallNewsCard/SmallNewsCard";
const Contact = () => {
   const location = useLocation()
   const path = location.pathname.replace("/c", "/ C")
   return (
      <>
         <PageBanner banner={banner} path={path} value="Our Contact" />
         <div className="my-20">
            <MapBox />
         </div>
         <div className="max-w-[1100px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 mb-20">
               <div className="mb-10 md:mb-0 p-2 md:p-0">
                  <ContactForm />
               </div>
               <div className="grid grid-cols-2 gap-5 w-full p-2 xl:p-0">

                  <div className="bg-[#bfd2f8] hover:bg-[#1f2b6c] text-[#1f2b6c] hover:text-[#bfd2f8] flex flex-col justify-center pl-4 gap-4 h-44 items-start rounded">
                     <LuPhoneCall className="text-4xl" />
                     <div className="flex flex-col gap-2 font-['Work_Sans'] items-start">
                        <div className="text-lg font-bold uppercase">
                           Emergency
                        </div>
                        <div className="flex flex-col gap-1 w-full items-start">
                           <div className="leading-[22.4px]">
                              (+880) 1789-123456
                           </div>
                           <div className="leading-[22.4px]">
                              (+880) 1456-123456
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="bg-[#bfd2f8] hover:bg-[#1f2b6c] text-[#1f2b6c] hover:text-[#bfd2f8] flex flex-col justify-center pl-4 gap-4 h-44 items-start rounded">
                     <IoLocationOutline className="text-4xl" />
                     <div className="flex flex-col gap-2 font-['Work_Sans'] items-start">
                        <div className="text-lg font-bold uppercase  ">
                           Location
                        </div>
                        <div className="flex flex-col gap-1 w-full items-start">
                           <div className="leading-[22.4px] ">123 Jhenaidah</div>
                           <div className="leading-[22.4px] ">
                              789 Jessore
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="bg-[#bfd2f8] hover:bg-[#1f2b6c] text-[#1f2b6c] hover:text-[#bfd2f8] flex flex-col justify-center pl-5 gap-5 h-44 items-start rounded">
                     <IoMailOutline className="text-4xl" />
                     <div className="flex flex-col gap-2 font-['Work_Sans'] items-start">
                        <div className="text-lg font-bold uppercase">Email</div>
                        <div className="flex flex-col gap-1 w-full items-start">
                           <div className="leading-[22.4px]">
                              mspsohan@gmil.com
                           </div>
                           <div className="text-sm">mahbub01304@gmail.com</div>
                        </div>
                     </div>
                  </div>
                  <div className="bg-[#bfd2f8] hover:bg-[#1f2b6c] text-[#1f2b6c] hover:text-[#bfd2f8] flex flex-col justify-center pl-4 gap-5 h-44 items-start rounded">
                     <IoTimeOutline className="text-4xl" />
                     <div className="flex flex-col gap-2 font-['Work_Sans'] items-start">
                        <div className="text-lg font-bold uppercase">
                           Working Hours
                        </div>
                        <div className="flex flex-col gap-1 w-full items-start">
                           <div className="leading-[22.4px]">
                              Mon-Sat 09:00-20:00
                           </div>
                           <div className="leading-[22.4px]">
                              Sunday Emergency only
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="my-20">
               <SmallNewsCard />
            </div>
         </div>
      </>
   );
};

export default Contact;
