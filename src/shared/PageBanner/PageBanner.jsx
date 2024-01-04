import { Link } from "react-router-dom";

const PageBanner = ({ banner, path, value }) => {
   return (
      <>
         <div className="relative h-[150px] md:h-[250px] mt-11 md:mt-24 lg:mt-[66px]">
            <img src={banner} alt="" className="h-[150px] md:h-[250px] w-full absolute opacity-50 object-fill" />
            <div className="mx-auto absolute top-[20%] md:top-[30%] left-10 lg:left-24 text-blue-950">
               <Link to="/" className="text-sm font-semibold hover:text-blue-600">Home </Link><Link className="text-sm font-semibold hover:text-blue-600">{path}</Link>
               <h2 className="text-2xl md:text-4xl font-semibold">{value}</h2>
            </div>
         </div>
         <div className="h-2 bg-[#BFD2F8]">
            <div className="h-2 bg-[#1F2B6C] w-[70%] mx-auto"></div>
         </div>
      </>
   );
};

export default PageBanner;