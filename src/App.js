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
  

    
  
 

  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
