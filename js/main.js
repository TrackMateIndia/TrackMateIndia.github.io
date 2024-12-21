// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtgmFMUi58nXoQ3EOwIIYvQ3v6m9X_TmY",
  authDomain: "trackmate-4119f.firebaseapp.com",
  projectId: "trackmate-4119f",
  storageBucket: "trackmate-4119f.firebasestorage.app",
  messagingSenderId: "1012944442093",
  appId: "1:1012944442093:web:1878f65131da6ddbe272e4",
  measurementId: "G-270JF81BBP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


// Title fade out and options fade in
setTimeout(() => {
    document.getElementById('titleSection').style.display = 'none'; // Hide title
    const optionsSection = document.getElementById('optionsSection');
    optionsSection.style.display = 'block'; // Show options
}, 1000);
