import { useLocation } from "react-router";
import banner from "../../assets/Rectangle 3 (2).png"
import PageBanner from "../../shared/PageBanner/PageBanner";
const Contact = () => {
   const location = useLocation()
   const path = location.pathname.replace("/c", "/ C")
   return (
      <>
         <PageBanner banner={banner} path={path} value="Our Contact" />
      </>
   );
};

export default Contact;
