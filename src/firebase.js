// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD3WMXmx_lR4M182pofB2m8KZ5WtGHeqwQ',
  authDomain: 'realtor-sahand.firebaseapp.com',
  projectId: 'realtor-sahand',
  storageBucket: 'realtor-sahand.appspot.com',
  messagingSenderId: '287420431561',
  appId: '1:287420431561:web:75f470bf2396651b876118',
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
