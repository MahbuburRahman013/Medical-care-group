import { useLocation } from "react-router";
import banner from "../../assets/Rectangle 3.png"
import PageBanner from "../../shared/PageBanner/PageBanner";
const Doctors = () => {
   const location = useLocation()
   const path = location.pathname.replace("/d", "/ D")
   return (
      <>
         <PageBanner banner={banner} path={path} value="Our Doctors" />
      </>
   );
};

export default Doctors;