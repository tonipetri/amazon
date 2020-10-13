import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCUtLcRhIp5hW5ZliOx6Qq0uIFYTjRXUPk",
  authDomain: "clone-82d4f.firebaseapp.com",
  databaseURL: "https://clone-82d4f.firebaseio.com",
  projectId: "clone-82d4f",
  storageBucket: "clone-82d4f.appspot.com",
  messagingSenderId: "171366664062",
  appId: "1:171366664062:web:298878cf98ffe0fac8952f",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
