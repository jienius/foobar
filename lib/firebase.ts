import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAZHiD58H4owNFp1LjvcW7DCAS6YSNiOaM",
  authDomain: "royal-regal-website.firebaseapp.com",
  projectId: "royal-regal-website",
  storageBucket: "royal-regal-website.appspot.com",
  messagingSenderId: "1009422892014",
  appId: "1:1009422892014:web:c8d7c3b20dd387aa6c2cff",
  measurementId: "G-335W63XDR3"
};

const app = firebase.initializeApp(firebaseConfig);

export const auth = getAuth(app);
