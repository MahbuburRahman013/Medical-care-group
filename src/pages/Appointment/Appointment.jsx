import { useLocation } from "react-router";
import banner from "../../assets/Rectangle 3 (3).png"
import PageBanner from "../../shared/PageBanner/PageBanner";
const Appointment = () => {
   const location = useLocation()
   const path = location.pathname.replace("/s", "/ S")
   return (
      <>
         <PageBanner banner={banner} path={path} value="Book an Appointment" />
      </>
   );
};

export default Appointment;
