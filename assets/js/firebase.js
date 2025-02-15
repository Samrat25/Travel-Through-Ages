// Import the necessary Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBsqWZe8OJDRMxZI0UHwVgth3juKUbIKA0",
    authDomain: "travel-website-ec14d.firebaseapp.com",
    projectId: "travel-website-ec14d",
    storageBucket: "travel-website-ec14d.firebasestorage.app",
    messagingSenderId: "320965784440",
    appId: "1:320965784440:web:c9ea5cda11a90a31bb0e8d"
};

const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const user=auth.curreUser;
function updateUserProfile(user){
    
}
