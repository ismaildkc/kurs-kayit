import axios from 'axios';

import { getFirestore, collection, getDocs, addDoc, deleteDoc, doc, onSnapshot } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import "firebase/firestore";

// init services
export const db = getFirestore();
export const auth = getAuth();

import { getData } from "./config/firebase";

export default {
  timestampConvert(seconds){
    var d = new Date(parseInt(seconds, 10));
    var ds = d.toString('MM/dd/yy HH:mm:ss');
    return ds
  },
  getTeacherList(){
    const colRef = collection(db, "teachers")
    getDocs(colRef).then((snapshot) =>{
      let data = [];
      snapshot.docs.forEach((doc) => {
        data.push({ ...doc.data(), id: doc.id })
      })
      return data
    })
    .catch(err => {
      console.log(err.message);
    })
  },
  getDocs(toTable){
    const colRef = collection(db, toTable);
    let data = [];
    return getDocs(colRef).then((snapshot) =>{
      snapshot.docs.forEach((doc) => {
        data.push({ ...doc.data(), id: doc.id })
      })
      return data;
    })
    .catch(err => {
      console.log(err.message);
    })
  },
  onsnapshot(toTable){
    const colRef = collection(db, toTable);
    let data = [];
    return onSnapshot(colRef, (snapshot) =>{
      snapshot.docs.forEach((doc) => {
        data.push({...doc.data(), id: doc.id})
      })
      return data
    })
  },
  addDoc(toTable, dataObj){
    const colRef = collection(db, toTable);
    
    addDoc(colRef, dataObj)
    .then((err) => {
      dataObj.reset;
      console.log(err);
    })
  },
  deleteDoc(fromTable, dataObj){
    const docRef = doc(db, fromTable, dataObj);
    
    deleteDoc(docRef)
    .then((err) => {
      dataObj.reset;
      console.log(err);
    })
  },
  createUser(email, password){
    // const email = "ismail@dikici.com";
    // const password = "123456";
    createUserWithEmailAndPassword(auth, email, password )
    .then((cred) => {
      console.log("user created: ",cred.user);
    })
    .catch(err => {
      console.log(err.message);
    })
  },
  signOut(){
    signOut(auth).then(() => {
      console.log("user signed out...");
    })
    .catch((err) => {
      console.log(err.message);
    })
  },


  infoCreate(data) {
    return axios.post(URL + 'donation/info/create', data).then(response => {
      return response.data;
    });
  },
  
}
