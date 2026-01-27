// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey:import.meta.env.VITE_apiKey,
  authDomain:import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId:import.meta.env.VITE_appId ,
  measurementId:import.meta.env.VITE_measurementId,
  
//    apiKey:"AIzaSyAep1-5Kh27PnS3sTAOGUm3OmjZzk-8TwA",
//   authDomain:"job-portal-4909c.firebaseapp.com",
//    projectId:"job-portal-4909c",
//    storageBucket:"job-portal-4909c.firebasestorage.app",
//    messagingSenderId:"226934917446",
//    appId:"1:226934917446:web:7897b8a88b5a2fb4f8fd47",
//    measurementId:"G-EFPJK5N7YF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);
export default auth