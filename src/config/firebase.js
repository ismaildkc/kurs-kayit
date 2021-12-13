import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDX67M-FRIYeEVn873F-6MJYU-p6U4ryTw",
  authDomain: "kurs-kayit-5ada9.firebaseapp.com",
  projectId: "kurs-kayit-5ada9",
  storageBucket: "kurs-kayit-5ada9.appspot.com",
  messagingSenderId: "1069168951720",
  appId: "1:1069168951720:web:5f7461a4dd66a1ca5a9d9d",
  measurementId: "G-LFB1RD90RM"
};

initializeApp(firebaseConfig);
export const db = getFirestore();

export const getData = (table) => {
  const colRef = collection(db, "courses")

  getDocs(colRef).then((snapshot) =>{
    let data = [];
    snapshot.docs.forEach((doc) => {
      data.push({ ...doc.data(), id: doc.id })
    })
    console.log(data);
    return data;
  })
  .catch(err => {
    console.log(err.message);
  })
}
