import axios from "axios";

export const imageUpload = async (image) => {
   const formData = new FormData();
   formData.append('image', image);
   const { data } = await axios.post(
      `https://api.imgbb.com/1/upload?key=82116f9fabce44f213e1639b8be914c7`, formData
   );
   return data;
};