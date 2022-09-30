import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOhUxxZBftlAScuwNesO87S2BgrsjirdU",
  authDomain: "twitter-clone-d293a.firebaseapp.com",
  projectId: "twitter-clone-d293a",
  storageBucket: "twitter-clone-d293a.appspot.com",
  messagingSenderId: "174995465349",
  appId: "1:174995465349:web:f476c0818e73e71aa835ec"
};

const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();

export default db;