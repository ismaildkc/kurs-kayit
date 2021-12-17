<template>
  <div class="container">
    <div class="content">
      <div class="d-flex justify-content-between">
        <h1>{{ course.name }}</h1>

        <div class="btn">Başvur</div>
      </div>

      <div class="row mt-4">
        <div class="col-12 col-md-8 mb-5">
          <div class="swiper-course swiper-carousel swiper">
            <div class="swiper-wrapper">
              <div
                class="swiper-slide"
                v-for="(item, index) in course.photo"
                :key="index"
              >
                <img :src="item" />
              </div>
            </div>

            <div class="swiper-pagination" slot="pagination"></div>
          </div>
        </div>


        <div class="col-12">
          <!-- Info Card -->
          <div class="course-info">
            <div class="course-detail">
              <div class="lines d-flex">
                <p class="title">Hakkında:</p>
                <span>{{ course.description }}</span>
              </div>

              <div class="lines d-flex">
                <p class="title">Kapasite:</p>
                <span>{{ course.capacity }}</span>
              </div>

              <div class="lines d-flex">
                <p class="title">Başlangıç:</p>
                <span v-html="startDate"></span>
              </div>

              <div class="lines d-flex">
                <p class="title">Bitiş:</p>
                <span v-html="endtDate"></span>
              </div>

              <div class="lines d-flex">
                <p class="title">İlçe:</p>
                <span>{{ course.district }}</span>
              </div>

              <div class="lines d-flex">
                <p class="title">Mahalle:</p>
                <span>{{ course.neighbourhodd }}</span>
              </div>

              <div class="lines d-flex">
                <p class="title">Eğitmenler:</p>
                <span v-for="(item, index) in course.teacher" :key="index">{{
                  item
                }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>

    
  </div>
</template>

<script>
import {
  Swiper,
  Scrollbar,
  EffectCoverflow,
  SwiperClass,
  Pagination,
  Navigation,
  Mousewheel,
  Autoplay,
  EffectFade,
} from "swiper";
Swiper.use([
  Navigation,
  Pagination,
  Scrollbar,
  EffectCoverflow,
  Mousewheel,
  Autoplay,
  EffectFade,
]);
import "swiper/swiper-bundle.css";

import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  query,
  doc,
  where,
  onSnapshot,
} from "firebase/firestore";
import "firebase/firestore";
export const db = getFirestore();

export default {
  data() {
    return {
      course: "",
      startDate: "",
      endtDate: "",
    };
  },
  mounted() {
    this.getSwiper();
    this.getCourseData();
  },
  methods: {
    getCourseData() {
      const docRef = doc(db, "courses", this.$route.params.slug);
      
      onSnapshot(docRef, (doc) => {
        this.course = doc.data();
        console.log("course", this.course);

        this.startDate = this.$api.timestampConvert(this.course.startDate.seconds);
        this.endtDate = this.$api.timestampConvert(this.course.endDate.seconds);
      });
    },
    getSwiper() {
      setTimeout(() => {
        this.swiperModal = new Swiper(".swiper-course", {
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
  },
};
</script>


<style lang="scss" scoped>

.lines{
  border-bottom: 1px solid #ebebeb;
  padding: 1rem 0;
  .title{
    font-weight: 600;
    margin-right: .5rem;
  }
}

.btn{
  width: 161px;
  height: 47px;
  background: var(--purple);
  box-shadow: 0px 15px 20px -10px rgba(71,62,166, .55);
  border-radius: 28.5px;
  display: -ms-flexbox;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  line-height: 25px;
  color: #ffffff;
  cursor: pointer;
  transition: 0.3s;
  user-select: none;
}
</style>