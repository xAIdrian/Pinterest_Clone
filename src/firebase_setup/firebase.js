// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4fv3VnMYTsUzTB6TJa9y7Sc5cZGzkBhI",
  authDomain: "fakepinterest-fa0a4.firebaseapp.com",
  projectId: "fakepinterest-fa0a4",
  storageBucket: "fakepinterest-fa0a4.appspot.com",
  messagingSenderId: "1004363117337",
  appId: "1:1004363117337:web:e72d7012b991fd58ca4b88"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
