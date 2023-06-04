// Import the functions you need from the SDKs you need
//I am not sure if I am going to use this because it is for using firestore and I think that I may want to use a
//different database.

import {getFirestore} from "firebase/firestore";
import { getApp, getApps, initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2IGLEOOQ9mxD0HVhBKfZxzxG7q7py7Lc",
  authDomain: "blog-ai-f3598.firebaseapp.com",
  projectId: "blog-ai-f3598",
  storageBucket: "blog-ai-f3598.appspot.com",
  messagingSenderId: "13113887391",
  appId: "1:13113887391:web:fe7aadcc922131f0b830aa"
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
// I am not sure if I am going to use this
const db = getFirestore(app);
export{db};