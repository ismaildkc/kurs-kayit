<template>
  <div class="container">
    <!-- Banne -->
    <Banner />

    <!-- Kurs Seçimi -->
    <div class="select-course-by-type d-flex">
      <div class="select-course d-flex align-items-center justify-content-center">
        <router-link to="/kurslar">Spor Kursları</router-link>
      </div>
      <div class="select-course d-flex align-items-center justify-content-center">
        <router-link to="/kurslar">Sanat Kursları</router-link>
      </div>
    </div>

    <!-- Haberler Modulü -->
    <News :data="this.newsData"  class="w-50"/>

  </div>
</template>

<script>
import Banner from "@/components/Banner"
import News from "@/components/News"
// import { getData } from "../config/firebase";

export default {
  components: {
    Banner, News
  },
  data(){
    return{
      newsData: '',
    }
  },
  mounted(){
    this.getNews();
  },
  methods: {
    getNews(){
      this.$api.getDocs("news").then(response => {
        this.newsData = response[0]
        console.log(this.newsData);
      })
    }
  }
}
</script>

<style lang="scss">
.select-course-by-type{
  padding: 1rem 0;

  .select-course{
    width: 100%;
    margin-right: .5rem;
    
    &:last-child{
      margin-right: 0;
    }

    a{
      font-size: 26px;
      line-height: 35px;
      color: #ffffff;
      width: 100%;
      text-align: center;
      border-radius: var(--radiusF);
      background-color: var(--purple);
      padding: 2rem;
      transition: var(--slow);

    }
  }
}
</style>