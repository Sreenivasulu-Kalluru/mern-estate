// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'vsk-estate.firebaseapp.com',
  projectId: 'vsk-estate',
  storageBucket: 'vsk-estate.appspot.com',
  messagingSenderId: '346117533279',
  appId: '1:346117533279:web:d07a25ab61faa10184f5ea',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
