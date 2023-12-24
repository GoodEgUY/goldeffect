import "./App.css";
import Main from "./components/Main/Main";
import React, { useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
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
  Notification.requestPermission().then(permission => {
    if (permission === 'granted') {
        console.log('Permission for receiving notifications was granted');
        // Получаем токен
        getToken(messaging, { vapidKey: 'BNITij7os0zJH7E14wKNsVp_VroN6NI0qCZHpqCAODD04PTdyzyQwIP5O19ob1t0KVvYpGt2w4E-IF7yINt1Wu8' }).then(currentToken => {
            if (currentToken) {
                console.log('Notification Token:', currentToken);
                // Отправьте этот токен на ваш сервер, если нужно
            } else {
                console.log('No registration token available. Request permission to generate one.');
            }
        }).catch((err) => {
            console.log('An error occurred while retrieving token. ', err);
        });
    } else {
        console.log('Permission for receiving notifications was denied');
    }
});
onMessage(messaging, (payload) => {
  console.log('Message received. ', payload);
  // Здесь можно кастомизировать уведомления, например, показать их в интерфейсе
});
  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
