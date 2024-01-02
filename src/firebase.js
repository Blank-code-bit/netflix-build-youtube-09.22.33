import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDJ7pxYbbjsp3BOo40EznE8---u0YzOTqg",
  authDomain: "netflix-clone-db751.firebaseapp.com",
  projectId: "netflix-clone-db751",
  storageBucket: "netflix-clone-db751.appspot.com",
  messagingSenderId: "810502705040",
  appId: "1:810502705040:web:d2465fbff421250fe32d15",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
