import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Replace with your Firebase config from Firebase Console
const firebaseConfig = {
  apiKey: "AIzaSyD_EXcodeExample_YOUR_API_KEY",
  authDomain: "vimal-sadan-hostel.firebaseapp.com",
  projectId: "vimal-sadan-hostel",
  storageBucket: "vimal-sadan-hostel.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123def456"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
