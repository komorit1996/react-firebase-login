import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB6LBMsuGf4hk0og98rKQjnSZk5A2hMOns",
    authDomain: "nodejs-login-firebase.firebaseapp.com",
    projectId: "nodejs-login-firebase",
    storageBucket: "nodejs-login-firebase.appspot.com",
    messagingSenderId: "839280793104",
    appId: "1:839280793104:web:f7b05d98517b646e2f9c95",
    measurementId: "G-8NLRCEP2RR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
