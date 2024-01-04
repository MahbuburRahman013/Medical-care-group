import { useLocation } from "react-router-dom";
import banner from "../../assets/Rectangle 3.png"
import PageBanner from "../../shared/PageBanner/PageBanner";
const AboutUs = () => {
   const location = useLocation()
   const path = location.pathname.replace("/a", "/ A")
   return (
      <>
         <PageBanner banner={banner} path={path} value="About Us" />
      </>
   );
};

export default AboutUs;