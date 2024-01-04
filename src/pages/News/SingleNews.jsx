import banner from "../../assets/Rectangle 3 (5).png"
import PageBanner from "../../shared/PageBanner/PageBanner";
const SingleNews = () => {

   const path = "/news"

   return (
      <>
         <PageBanner banner={banner} path={path} value="Single News" />
      </>
   );
};

export default SingleNews;
