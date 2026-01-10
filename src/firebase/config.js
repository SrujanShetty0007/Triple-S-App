// Firebase Configuration and Initialization
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';

// Firebase configuration (from existing HTML project)
const firebaseConfig = {
    apiKey: "AIzaSyCHZcDv3pXIU9J3CASXi3sM-V7mZsMuqBM",
    authDomain: "triple-s-bd006.firebaseapp.com",
    projectId: "triple-s-bd006",
    storageBucket: "triple-s-bd006.firebasestorage.app",
    messagingSenderId: "933483210420",
    appId: "1:933483210420:web:66fde1b5571ef1741299e1",
    measurementId: "G-TPHZ0H6L5J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export { app, auth, analytics };
