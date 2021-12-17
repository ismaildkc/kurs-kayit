<template>
  <div class="container">
    <div class="content">
      <h1>Kurs Ara</h1>

      <div class="row">
        <div class="form-group col-12 col-sm-6">
          <label for="il">Mahalle Seçiniz</label>
          <select name="il" id="" v-model="selected.district" @change="adressFilter(selected.district)">
            <option value="0" disabled selected>Seçiniz</option>
            <option v-for="(item, index) in location.district" :key="index" :value="item.id">{{ item.name }}</option>
          </select>
        </div>
        
        
        <div class="form-group col-12 col-sm-6" v-if="selected.district">
          <label for="ilce">Kültür Merkezi Seçiniz</label>
          <select name="ilce" id="" >
            <option value="0" disabled selected>Seçiniz</option>
            <option v-for="(item, index) in selected.neighbourhood" :key="index" :value="item.id">{{ item.name }}</option>
          </select>
        </div>
        
      </div>

      <div class="d-flex flex-wrap  mt-5">
        
        <p class="mb-2">Toplam {{ courses.length }} sonuç bulundu</p>
        
        <CourseCard v-for="(item, index) in courses" :key="index"
          :CourseName="item.name"
          :Neighbourhood="item.neighborhood" 
          :Description="item.description"
          :Capacity="item.capacity"
          :Students="item.students"
          Link="/kurs-detay"
          :Id="item.id"
          Image="/img/kurslar/satranc-1.jpg"
         />
      </div>
    </div>
  </div>
</template>

<script>
import { getFirestore, collection, getDocs, onSnapshot, doc, query, where } from 'firebase/firestore';
import "firebase/firestore";

// init services
export const db = getFirestore();

import CourseCard from "@/components/CourseCard"

export default {
  components: {
    CourseCard
  },
  data(){
    return{
      courses: '',
      location: '',
      selected: {
        district: '',
        neighbourhood: '',
      }
    }
  },
  mounted(){
    this.getCourse();
    this.getAdressData();
  },
  methods: {
    courseFilter(event){
      const colRef = collection(db, 'courses');
      const q = query(colRef, where("district", "==", "kartal"));

      onSnapshot(q, (snapshot) => {
        let course = [];
        snapshot.docs.forEach((doc) => {
          course.push({ ...doc.data(), id: doc.id })
        })
        console.log("bu", course);
      })

    },
    adressFilter(data){
      console.log(data);
      let arr = [];
      this.location.neighbourhood.filter((e) => {
        if(e.district_id == data){
          arr.push(e)
        }
        this.selected.neighbourhood = arr;
      })
      
    },
    getAdressData(){
      this.$api.getDocs("location").then(response => {
        this.location = {
          district: response[0].district,
          neighbourhood: response[0].neighbourhood
        };

        console.log(this.location);
      });
    },
    
    getCourse(){
      this.$api.getDocs("courses").then(response => {
        this.courses = response;
        console.log(this.courses);
      });
    }
  }
}
</script>