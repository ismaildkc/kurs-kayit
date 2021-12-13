import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// import { } from 'firebase/<service>';
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

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


async function getCities(db) {
  const citiesCol = collection(db, 'users');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  console.log("users", cityList)
  return cityList;
}

getCities(db)

// export default app;