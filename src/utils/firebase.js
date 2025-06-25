// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTN2zauUaN7rxBXpruYdA6qNKS8L89Hww",
  authDomain: "netflixgpt-clean.firebaseapp.com",
  projectId: "netflixgpt-clean",
  storageBucket: "netflixgpt-clean.firebasestorage.app",
  messagingSenderId: "310087470072",
  appId: "1:310087470072:web:fe173b96ebb9723177240d",
  measurementId: "G-QSGF1EBYS1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth();