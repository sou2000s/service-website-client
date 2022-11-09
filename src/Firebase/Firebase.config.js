// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apikey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId:process.env.REACT_APP_appId 
};








// const firebaseConfig = {
//   apiKey: "AIzaSyCU7Q4EPEJPkb-3aPvoJ9ry9Qro6PbglIg",
//   authDomain: "travelfy-9959c.firebaseapp.com",
//   projectId: "travelfy-9959c",
//   storageBucket: "travelfy-9959c.appspot.com",
//   messagingSenderId: "159035282793",
//   appId: "1:159035282793:web:cfa2268c45601d771c59f8"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;