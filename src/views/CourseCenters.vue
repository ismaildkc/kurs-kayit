<template>
  <div></div>
</template>

<script>
import { getFirestore, collection, getDocs, onSnapshot, doc, query, where } from 'firebase/firestore';
import "firebase/firestore";

// init services
export const db = getFirestore();

export default {
  data(){
    return{
      courseCenters: '',
    }
  },
  mounted() {
    this.getCourseCenter()
  },
  methods: {
    getCourseCenter(){
      this.$api.getDocs("course-center").then(response => {
        this.courseCenters = response;
        console.log(this.courseCenters);
      });
    }
  }
}
</script>