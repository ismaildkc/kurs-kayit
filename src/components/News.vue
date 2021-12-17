<template>
  <div class="news" v-if="data">
    <div class="swiper-news swiper-carousel swiper">
      <div class="swiper-wrapper">
        
        <div class="swiper-slide" v-for="(item, index) in data" :key="index">
          <img src="/img/kurslar/10kasim.jpg">
          <div class="description">
            <h4>{{ data.title }}</h4>
            <p>{{ data.description }}</p>
          </div>
        </div>

      </div>

      <div class="swiper-pagination" slot="pagination"></div>
    </div>
  </div>
</template>

<script>
import { Swiper, Scrollbar, EffectCoverflow, SwiperClass, Pagination, Navigation, Mousewheel, Autoplay, EffectFade,} from "swiper";
Swiper.use([ Navigation, Pagination, Scrollbar, EffectCoverflow, Mousewheel, Autoplay, EffectFade, ]);
import "swiper/swiper-bundle.css";


export default {
  props: [ "data" ],
  mounted() {
    this.getSwiper();
  },
  methods: {
    getSwiper() {
      setTimeout(() => {
        this.swiperModal = new Swiper(".swiper-news", {
          spaceBetween: 16,
          allowTouchMove: true,
          paginationClickable: true,
          grabCursor: false,
          slidesPerView: 1,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
        });
      }, 100);
    },
  }
}
</script>

<style lang="scss" scoped>
.news{
  width: 100%;
  height: 350px;
  
  .swiper-news{
    position: relative;

    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .description{
      position: absolute;
      background: rgba(227,227,227, .8);
      bottom: 0;
      left: 0;
      padding: 1rem;
      h4{
        font-weight: 500;
      }

      p{
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
    }
  }

}
</style>