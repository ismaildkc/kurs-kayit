import axios from 'axios';

import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore';
import "firebase/firestore";
export const db = getFirestore();

let URL = 'https://bilimseferberligi.org/cms/api/v1/';

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
  addDoc(toTable, dataObj){
    const colRef = collection(db, toTable);
    
    addDoc(colRef, dataObj)
    .then((err) => {
      console.log(err);
    })
  },


  infoCreate(data) {
    return axios.post(URL + 'donation/info/create', data).then(response => {
      return response.data;
    });
  },
  
}
