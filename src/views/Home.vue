<template>
  <div class="container">
    <Banner />


  </div>
</template>

<script>
import Banner from "@/components/Banner"


import firebase from "../config/firebase"

export default {
  components: {
    Banner
  },
  mounted(){
    this.saveDb();
  },
  methods: {
    saveDb(){
      let obj = {
        name: "Bilge",
        surnmae: "Yanılmaz",
        timestamp: new Date()
      };
      // console.log(firebase);
    }
  }
}
</script>