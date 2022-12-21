import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD6IlW-Z3QucoS3Ugf_ZgUegRL41waEWoc",
  authDomain: "appcontas-auth.firebaseapp.com",
  projectId: "appcontas-auth",
  storageBucket: "appcontas-auth.appspot.com",
  messagingSenderId: "963988753615",
  appId: "1:963988753615:web:83255c213f9001dffabbba",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
