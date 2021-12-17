<template>
  <div class="banner">
    <div class="swiper-banner swiper-carousel swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="https://via.placeholder.com/1000x350?text=Banner+Görseli">
        </div>
        <div class="swiper-slide">
          <img src="https://via.placeholder.com/1000x350?text=Banner+Görseli">
        </div>
        <div class="swiper-slide">
          <img src="https://via.placeholder.com/1000x350?text=Banner+Görseli">
        </div>
        <div class="swiper-slide">
          <img src="https://via.placeholder.com/1000x350?text=Banner+Görseli">
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
  mounted() {
    this.getSwiper();
  },
  methods: {
    getSwiper() {
      setTimeout(() => {
        this.swiperModal = new Swiper(".swiper-banner", {
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
.banner{
  width: 100%;
  height: 350px;

  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>