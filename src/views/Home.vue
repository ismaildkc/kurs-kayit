<template>
  <div class="container">
    <Banner />

  </div>
</template>

<script>
import Banner from "@/components/Banner"
import { getData } from "../config/firebase";

export default {
  components: {
    Banner
  },
}
</script>