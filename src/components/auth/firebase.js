import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAYlggnHkMFgCJzHibtoOZkmPb72sRYAQg",
  authDomain: "clone-42421.firebaseapp.com",
  projectId: "clone-42421",
  storageBucket: "clone-42421.appspot.com",
  messagingSenderId: "165227643485",
  appId: "1:165227643485:web:8a23e7491bc4913ce583b4",
  measurementId: "G-ZXC6R35PXL",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db ,auth};