<template>
  <div class="container">
    <Banner />

{{list}}
  </div>
</template>

<script>
import Banner from "@/components/Banner"

import { getData } from "../config/firebase";

export default {
  components: {
    Banner
  },
  data(){
    return{
      list : ''
    }
  },
  mounted(){
    this.saveDb();
  },
  methods: {
    saveDb(){
      console.log(getData());

      let obj = {
        name: "Bilge",
        surnmae: "Yanılmaz",
        timestamp: new Date()
      };
    }
  }
}
</script>