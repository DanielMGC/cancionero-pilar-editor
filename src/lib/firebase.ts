// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC24hyrjtPQCn8CLdVjEFffWzkmm1kv96M",
  authDomain: "cancionero-pilar.firebaseapp.com",
  projectId: "cancionero-pilar",
  storageBucket: "cancionero-pilar.firebasestorage.app",
  messagingSenderId: "490716966557",
  appId: "1:490716966557:web:bfe1d7c978ce8767402e74"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

// Export the database instance so we can use it in our pages
export const db = getFirestore(app);