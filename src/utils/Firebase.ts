// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4_LH249AlG08Ti0uuwbXCGJyOho-rd8w",
  authDomain: "sathvik-inguva.firebaseapp.com",
  projectId: "sathvik-inguva",
  storageBucket: "sathvik-inguva.firebasestorage.app",
  messagingSenderId: "390340876079",
  appId: "1:390340876079:web:405dfdaa9cf30c752473da",
  measurementId: "G-N64G8SBRVT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);