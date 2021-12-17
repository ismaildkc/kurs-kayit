<template>
  <div class="container">
    <div class="content">
      <h1>{{ course.name }}</h1>

      <div class="row mt-4">
        <div class="col-12 col-md-6">
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

        <div class="col-12 col-md-6">
          <!-- Info Card -->
          <div class="course-info">
            <div class="course-detail">
              <div class="lines d-flex">
                <p>Hakkında:</p>
                <span>{{ course.description }}</span>
              </div>

              <div class="lines d-flex">
                <p>Kapasite:</p>
                <span>{{ course.capacity }}</span>
              </div>

              <div class="lines d-flex">
                <p>Başlangıç:</p>
                <span v-html="startDate"></span>
              </div>

              <div class="lines d-flex">
                <p>Bitiş:</p>
                <span v-html="endtDate"></span>
              </div>

              <div class="lines d-flex">
                <p>İlçe:</p>
                <span>{{ course.district }}</span>
              </div>

              <div class="lines d-flex">
                <p>Mahalle:</p>
                <span>{{ course.neighbourhodd }}</span>
              </div>

              <div class="lines d-flex">
                <p>Eğitmenler:</p>
                <span v-for="(item, index) in course.teacher" :key="index">{{
                  item
                }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- <div class="prduct-detail-info d-flex flex-column flex-md-row mb-5">
        <div class="sides">
          <h3>Cross Code</h3>
          <p>CONTITECH FS 70-7 2681 015 000</p>
          <p>WEFORMA WBE 200-E1</p>
          <p>BOSCH 822419002</p>
          <p>FESTO EB 165 65</p>
          <p>AIRKRAFT 111002</p>
        </div>

        <div class="sides">
          <h3>OEM Part No</h3>
          <p>SAF 3.229.0027.00</p>
          <p>3.229.2127.00</p>
          <p>3.229.2227.00</p>
        </div>
      </div> -->
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
      const colRef = collection(db, "courses");
      // console.log("slug", this.$route.params.slug);
      // queries
      const q = query(
        colRef,
        where("id", "==", parseInt(this.$route.params.slug))
      );

      onSnapshot(q, (snapshot) => {
        let course = [];
        snapshot.docs.forEach((doc) => {
          course.push({ ...doc.data(), id: doc.id });
        });
        this.course = course[0];

        this.startDate = this.$api.timestampConvert(
          this.course.startDate.seconds
        );
        this.endtDate = this.$api.timestampConvert(this.course.endDate.seconds);

        console.log("course", this.course);
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
</style>