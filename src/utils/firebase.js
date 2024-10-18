// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth  } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6ibL7o_W1vCfBmOV72O9d9R_S5Nq3pRg",
  authDomain: "swiggyclone-68b5b.firebaseapp.com",
  projectId: "swiggyclone-68b5b",
  storageBucket: "swiggyclone-68b5b.appspot.com",
  messagingSenderId: "198218004021",
  appId: "1:198218004021:web:d72c8a0d86e0795251237c",
  measurementId: "G-VTHSEE2Y3E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



 export const auth = getAuth();