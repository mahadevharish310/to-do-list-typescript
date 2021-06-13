import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { FirebaseAppProvider } from "reactfire";
import fire from "./fire";

const firebaseConfig = {
  apiKey: "AIzaSyBfT9L0fK-y2KcF2lTq2ohlsaVT79BmUoE",
  authDomain: "to-do-typescript-app.firebaseapp.com",
  projectId: "to-do-typescript-app",
  storageBucket: "to-do-typescript-app.appspot.com",
  messagingSenderId: "913242232753",
  appId: "1:913242232753:web:7385e80fee627e0221cf90",
  measurementId: "G-BGVX722VS6",
};

ReactDOM.render(
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <App />
  </FirebaseAppProvider>,
  document.getElementById("root")
);
