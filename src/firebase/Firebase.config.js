
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: import.meta.env.VITE_APIKEY,
   authDomain: import.meta.env.VITE_AUTHDOMAIN,
   projectId: import.meta.env.VITE_PROJECTID,
   storageBucket: import.meta.env.VITE_STORAGEBUCKET,
   messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
   appId: import.meta.env.VITE_APPID,
 };
// const firebaseConfig = {
//   apiKey: "AIzaSyCNCbNTrQs4Wvk1K1ob8Or4195EFa7l1t8",
//   authDomain: "conference-management-a8665.firebaseapp.com",
//   projectId: "conference-management-a8665",
//   storageBucket: "conference-management-a8665.appspot.com",
//   messagingSenderId: "802944627559",
//   appId: "1:802944627559:web:fd06befd011fe23ee075c2",
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;