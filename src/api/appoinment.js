// Import necessary dependencies
import axiosSecure from ".";

// Save appointment data in the database
export const saveAppointment = async (appointmentData) => {
   try {
      const response = await axiosSecure.post(`/appointment`, appointmentData);
      const result = response.data; // Access the 'data' property of the response
      return result;
   } catch (error) {
      console.error("Error saving appointment:", error);
      throw error; // Re-throw the error to be handled by the calling code
   }
};
