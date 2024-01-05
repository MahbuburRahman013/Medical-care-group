import { IoLocationOutline, IoMailOutline, IoTimeOutline } from "react-icons/io5";
import { LuPhoneCall } from "react-icons/lu";

const Contact = () => {
   return (
      <div className="max-w-[1100px] mx-auto my-20">
         <div className="flex flex-col gap-8 w-full font-['Yeseva_One'] items-start">
            <div className="flex flex-col items-center justify-center w-full">
               <h2 className="text-center text-lg font-['Work_Sans'] font-bold tracking-[2.88] uppercase text-[#159eec]">
                  Get in touch
               </h2>
               <h2 className="text-center text-3xl text-[#1f2b6c] font-semibold">Contact</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 w-full p-2 xl:p-0">

               <div className="bg-[#bfd2f8] hover:bg-[#1f2b6c] text-[#1f2b6c] hover:text-[#bfd2f8] flex flex-col justify-center pl-4 gap-4 h-56 items-start rounded">
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

               <div className="bg-[#bfd2f8] hover:bg-[#1f2b6c] text-[#1f2b6c] hover:text-[#bfd2f8] flex flex-col justify-center pl-4 gap-4 h-56 items-start rounded">
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
               <div className="bg-[#bfd2f8] hover:bg-[#1f2b6c] text-[#1f2b6c] hover:text-[#bfd2f8] flex flex-col justify-center pl-5 gap-5 h-56 items-start rounded">
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
               <div className="bg-[#bfd2f8] hover:bg-[#1f2b6c] text-[#1f2b6c] hover:text-[#bfd2f8] flex flex-col justify-center pl-4 gap-5 h-56 items-start rounded">
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
      </div>
   );
};

export default Contact;