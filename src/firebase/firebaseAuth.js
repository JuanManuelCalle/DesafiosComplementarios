import { initializeApp } from "firebase/app";
import {getAuth, initializeAuth} from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyCn_9w7gpS9C6_MDM4BmXoNiLf1Iupv7DI",
  authDomain: "reactnative-5f7d2.firebaseapp.com",
  databaseURL: "https://reactnative-5f7d2-default-rtdb.firebaseio.com",
  projectId: "reactnative-5f7d2",
  storageBucket: "reactnative-5f7d2.appspot.com",
  messagingSenderId: "214152009844",
  appId: "1:214152009844:web:7b48fbc964bd79cb4c5921"
};

export const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
