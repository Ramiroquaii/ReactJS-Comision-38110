import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


import { initializeApp } from "firebase/app";  // Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfEtv_pDSRCTVwH_1AsSv35zuV940g1Uk",
  authDomain: "coder-react-38110.firebaseapp.com",
  projectId: "coder-react-38110",
  storageBucket: "coder-react-38110.appspot.com",
  messagingSenderId: "291144674617",
  appId: "1:291144674617:web:9114c919b89d5626a54ce8"
};
const app = initializeApp(firebaseConfig);  // Initialize Firebase


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
