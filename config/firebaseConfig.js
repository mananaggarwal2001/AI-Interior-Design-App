// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: "ai-room-redesign-131c6.firebaseapp.com",
    projectId: "ai-room-redesign-131c6",
    storageBucket: "ai-room-redesign-131c6.firebasestorage.app",
    messagingSenderId: "696885833581",
    appId: "1:696885833581:web:2bb86a8fa7a77dc893b464",
    measurementId: "G-D6G01XQJ3D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)