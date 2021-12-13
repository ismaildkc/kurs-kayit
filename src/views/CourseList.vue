<template>
  <div class="container">
    <div class="content">
      <h1>Kurs Ara</h1>

      <div class="d-flex flex-wrap mt-5">
        <CourseCard v-for="(item, index) in courses" :key="index"
          :CourseName="item.name"
          :Neighbourhood="item.neighborhood" 
          :Description="item.description"
          Image="../img/kurslar/satranc.jpg"
         />
      </div>
    </div>
  </div>
</template>

<script>
import CourseCard from "@/components/CourseCard"

import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore';
import "firebase/firestore";
export const db = getFirestore();


export default {
  components: {
    CourseCard
  },
  data(){
    return{
      courses: '',
    }
  },
  mounted(){
    this.getCourse();
  },
  methods: {
    getCourse(){
      const colRef = collection(db, "courses")

      getDocs(colRef).then((snapshot) =>{
        let data = [];
        snapshot.docs.forEach((doc) => {
          data.push({ ...doc.data(), id: doc.id })
        })
        console.log(data);
        this.courses = data;
      })
      .catch(err => {
        console.log(err.message);
      })
    }
  }
}
</script>