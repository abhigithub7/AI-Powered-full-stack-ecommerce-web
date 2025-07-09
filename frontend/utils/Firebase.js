import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "loginonecart-1fc2c.firebaseapp.com",
  projectId: "loginonecart-1fc2c",
  storageBucket: "loginonecart-1fc2c.firebasestorage.app",
  messagingSenderId: "407937277689",
  appId: "1:407937277689:web:ff545929c42a041be74c28"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export {auth,provider}