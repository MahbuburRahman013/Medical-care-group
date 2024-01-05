import { useLocation } from "react-router";
import banner from "../../assets/Rectangle 3 (1).png"
import PageBanner from "../../shared/PageBanner/PageBanner";
const Services = () => {
   const location = useLocation()
   const path = location.pathname.replace("/s", "/ S")
   return (
      <>
         <PageBanner banner={banner} path={path} value="Our Services" />
      </>
   );
};

export default Services;