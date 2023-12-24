import "./App.css";
import Main from "./components/Main/Main";
import React, { useEffect } from "react";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getMessaging,
  getToken,
  onMessage,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging.js";
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// Initialize Firebase

function App() {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("./service-worker.js")
        .then((registration) => {
          console.log("Service Worker Registered", registration);
        })
        .catch((error) => {
          console.log("Service Worker Registration failed", error);
        });
    }
  }, []);
  console.log("apply");
  const firebaseConfig = {
    apiKey: "AIzaSyD6S2EXkCINnLaWdTSyuk4IKRNckSHutRo",
    authDomain: "test-83bd7.firebaseapp.com",
    projectId: "test-83bd7",
    storageBucket: "test-83bd7.appspot.com",
    messagingSenderId: "901694726007",
    appId: "1:901694726007:web:ec8b45542d93d098a9cb72",
  };
  const app = initializeApp(firebaseConfig);
  const messaging = getMessaging(app);
  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
