import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";
import { FirebaseAppProvider } from "reactfire";

const firebaseConfig = {
  apiKey: "AIzaSyBfT9L0fK-y2KcF2lTq2ohlsaVT79BmUoE",
  authDomain: "to-do-typescript-app.firebaseapp.com",
  projectId: "to-do-typescript-app",
  storageBucket: "to-do-typescript-app.appspot.com",
  messagingSenderId: "913242232753",
  appId: "1:913242232753:web:7385e80fee627e0221cf90",
  measurementId: "G-BGVX722VS6",
};

const app = firebase.initializeApp(firebaseConfig);
app.auth().useEmulator("http://localhost:9099/");
app.firestore().useEmulator("localhost", 8080);

export default firebase;
