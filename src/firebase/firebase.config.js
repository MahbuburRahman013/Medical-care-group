// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyCE9Q2rpuzgKYrk4OHmsi9J7xh1EftXyk8",
   authDomain: "medical-care-hospital.firebaseapp.com",
   projectId: "medical-care-hospital",
   storageBucket: "medical-care-hospital.appspot.com",
   messagingSenderId: "407906982548",
   appId: "1:407906982548:web:def904e61197fb4cbc3281",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;