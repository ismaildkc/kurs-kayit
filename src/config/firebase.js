import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBCYso9jngLmHoh6W6lrHkYBP2zJcH36do",
  authDomain: "kurs-kayit-b572a.firebaseapp.com",
  projectId: "kurs-kayit-b572a",
  storageBucket: "kurs-kayit-b572a.appspot.com",
  messagingSenderId: "677252918728",
  appId: "1:677252918728:web:af08fe5eb5d8ca737564fd",
  measurementId: "G-CK14M6DRM6"
};

initializeApp(firebaseConfig);
export const db = getFirestore();

const colRef = collection(db, "courses")

// getDocs(colRef).then((snapshot) =>{
//   let data = [];
//   snapshot.docs.forEach((doc) => {
//     data.push({ ...doc.data(), id: doc.id })
//   })
//   console.log(data);
//   return data;
// })
// .catch(err => {
//   console.log(err.message);
// })
