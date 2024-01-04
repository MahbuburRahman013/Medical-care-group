import { useLocation } from "react-router";
import banner from "../../assets/Rectangle 3 (4).png"
import PageBanner from "../../shared/PageBanner/PageBanner";
const News = () => {
   const location = useLocation()
   const path = location.pathname.replace("/n", "/ N")
   return (
      <>
         <PageBanner banner={banner} path={path} value="Blog Post" />
      </>
   );
};

export default News; 