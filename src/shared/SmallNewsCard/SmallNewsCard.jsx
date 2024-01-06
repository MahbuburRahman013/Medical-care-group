import { FaEye, FaRegHeart } from "react-icons/fa";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Grid, Pagination } from "swiper/modules";

const SmallNewsCard = () => {
   return (
      <>
         <div className="p-2 xl:p-0">
            <div className="my-5">
               <h3 className="text-center text-lg font-['Work_Sans'] font-bold tracking-[2.88] uppercase text-[#159eec]">
                  Better information, Better health
               </h3>
               <h2 className="text-center text-3xl font-['Yeseva_One'] text-[#1f2b6c]">
                  News
               </h2>
            </div>
            <Swiper
               grid={{
                  rows: 2,
                  fill: "row"
               }}
               breakpoints={{
                  640: {
                     slidesPerView: 1,
                     spaceBetween: 20,
                  },
                  768: {
                     slidesPerView: 1,
                     spaceBetween: 30,
                  },
                  1024: {
                     slidesPerView: 2,
                     spaceBetween: 30,
                  },
               }}
               spaceBetween={25}
               pagination={{
                  clickable: true,
               }}
               modules={[Grid, Pagination]}
               className="mySwiper"
            >
               <SwiperSlide>
                  <div className="shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] bg-[#fcfefe] flex flex-row gap-5 w-full items-start rounded">
                     <img
                        src="https://file.rendit.io/n/Q4yUntYIKXh1IFZINWVX.png"
                        alt="Rectangle1"
                     />
                     <div className="flex flex-col mt-5 gap-6 w-3/5 font-['Work_Sans'] items-start">
                        <div className="flex flex-col gap-2 w-full items-start">
                           <div className="text-sm text-[#159eec]">
                              Monday 05, September 2021 | By Author
                           </div>
                           <div className="text-lg leading-[25.2px] text-[#212124]">
                              This Article’s Title goes Here, <br />
                              but not too long.
                           </div>
                        </div>
                        <div className="flex flex-row gap-2 w-20 items-start">
                           <div className="flex flex-row gap-1 w-10 items-start">
                              <FaEye className="text-blue-500" />
                              <div className="text-sm text-[#212124]">68</div>
                           </div>
                           <div className="flex flex-row gap-1 w-10 items-start">
                              <FaRegHeart className="text-red-600" />
                              <div className="text-sm text-[#212124]">86</div>
                           </div>
                        </div>
                     </div>
                  </div>
               </SwiperSlide>
               <SwiperSlide>
                  <div className="shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] bg-[#fcfefe] flex flex-row gap-5 w-full items-start rounded">
                     <img
                        src="https://file.rendit.io/n/Q4yUntYIKXh1IFZINWVX.png"
                        alt="Rectangle1"
                     />
                     <div className="flex flex-col mt-5 gap-6 w-3/5 font-['Work_Sans'] items-start">
                        <div className="flex flex-col gap-2 w-full items-start">
                           <div className="text-sm text-[#159eec]">
                              Monday 05, September 2021 | By Author
                           </div>
                           <div className="text-lg leading-[25.2px] text-[#212124]">
                              This Article’s Title goes Here, <br />
                              but not too long.
                           </div>
                        </div>
                        <div className="flex flex-row gap-2 w-20 items-start">
                           <div className="flex flex-row gap-1 w-10 items-start">
                              <FaEye className="text-blue-500" />
                              <div className="text-sm text-[#212124]">68</div>
                           </div>
                           <div className="flex flex-row gap-1 w-10 items-start">
                              <FaRegHeart className="text-red-600" />
                              <div className="text-sm text-[#212124]">86</div>
                           </div>
                        </div>
                     </div>
                  </div>
               </SwiperSlide>
               <SwiperSlide>
                  <div className="shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]  bg-[#fcfefe] flex flex-row gap-5 w-full items-start rounded">
                     <img
                        src="https://file.rendit.io/n/Q4yUntYIKXh1IFZINWVX.png"
                        alt="Rectangle1"
                     />
                     <div className="flex flex-col mt-5 gap-6 w-3/5 font-['Work_Sans'] items-start">
                        <div className="flex flex-col gap-2 w-full items-start">
                           <div className="text-sm text-[#159eec]">
                              Monday 05, September 2021 | By Author
                           </div>
                           <div className="text-lg leading-[25.2px] text-[#212124]">
                              This Article’s Title goes Here, <br />
                              but not too long.
                           </div>
                        </div>
                        <div className="flex flex-row gap-2 w-20 items-start">
                           <div className="flex flex-row gap-1 w-10 items-start">
                              <FaEye className="text-blue-500" />
                              <div className="text-sm text-[#212124]">68</div>
                           </div>
                           <div className="flex flex-row gap-1 w-10 items-start">
                              <FaRegHeart className="text-red-600" />
                              <div className="text-sm text-[#212124]">86</div>
                           </div>
                        </div>
                     </div>
                  </div>
               </SwiperSlide>
               <SwiperSlide>
                  <div className="shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]  bg-[#fcfefe] flex flex-row gap-5 w-full items-start rounded">
                     <img
                        src="https://file.rendit.io/n/Q4yUntYIKXh1IFZINWVX.png"
                        alt="Rectangle1"
                     />
                     <div className="flex flex-col mt-5 gap-6 w-3/5 font-['Work_Sans'] items-start">
                        <div className="flex flex-col gap-2 w-full items-start">
                           <div className="text-sm text-[#159eec]">
                              Monday 05, September 2021 | By Author
                           </div>
                           <div className="text-lg leading-[25.2px] text-[#212124]">
                              This Article’s Title goes Here, <br />
                              but not too long.
                           </div>
                        </div>
                        <div className="flex flex-row gap-2 w-20 items-start">
                           <div className="flex flex-row gap-1 w-10 items-start">
                              <FaEye className="text-blue-500" />
                              <div className="text-sm text-[#212124]">68</div>
                           </div>
                           <div className="flex flex-row gap-1 w-10 items-start">
                              <FaRegHeart className="text-red-600" />
                              <div className="text-sm text-[#212124]">86</div>
                           </div>
                        </div>
                     </div>
                  </div>
               </SwiperSlide>
               <SwiperSlide>
                  <div className="shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]  bg-[#fcfefe] flex flex-row gap-5 w-full items-start rounded">
                     <img
                        src="https://file.rendit.io/n/Q4yUntYIKXh1IFZINWVX.png"
                        alt="Rectangle1"
                     />
                     <div className="flex flex-col mt-5 gap-6 w-3/5 font-['Work_Sans'] items-start">
                        <div className="flex flex-col gap-2 w-full items-start">
                           <div className="text-sm text-[#159eec]">
                              Monday 05, September 2021 | By Author
                           </div>
                           <div className="text-lg leading-[25.2px] text-[#212124]">
                              This Article’s Title goes Here, <br />
                              but not too long.
                           </div>
                        </div>
                        <div className="flex flex-row gap-2 w-20 items-start">
                           <div className="flex flex-row gap-1 w-10 items-start">
                              <FaEye className="text-blue-500" />
                              <div className="text-sm text-[#212124]">68</div>
                           </div>
                           <div className="flex flex-row gap-1 w-10 items-start">
                              <FaRegHeart className="text-red-600" />
                              <div className="text-sm text-[#212124]">86</div>
                           </div>
                        </div>
                     </div>
                  </div>
               </SwiperSlide>
               <SwiperSlide>
                  <div className="shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]  bg-[#fcfefe] flex flex-row gap-5 w-full items-start rounded">
                     <img
                        src="https://file.rendit.io/n/Q4yUntYIKXh1IFZINWVX.png"
                        alt="Rectangle1"
                     />
                     <div className="flex flex-col mt-5 gap-6 w-3/5 font-['Work_Sans'] items-start">
                        <div className="flex flex-col gap-2 w-full items-start">
                           <div className="text-sm text-[#159eec]">
                              Monday 05, September 2021 | By Author
                           </div>
                           <div className="text-lg leading-[25.2px] text-[#212124]">
                              This Article’s Title goes Here, <br />
                              but not too long.
                           </div>
                        </div>
                        <div className="flex flex-row gap-2 w-20 items-start">
                           <div className="flex flex-row gap-1 w-10 items-start">
                              <FaEye className="text-blue-500" />
                              <div className="text-sm text-[#212124]">68</div>
                           </div>
                           <div className="flex flex-row gap-1 w-10 items-start">
                              <FaRegHeart className="text-red-600" />
                              <div className="text-sm text-[#212124]">86</div>
                           </div>
                        </div>
                     </div>
                  </div>
               </SwiperSlide>
            </Swiper>
         </div>
      </>
   );
};

export default SmallNewsCard;