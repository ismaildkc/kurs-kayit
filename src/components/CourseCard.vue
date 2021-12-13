<template>
  <router-link to="/" class="course-card-wrapper">
    <div class="course-card" :style="bgImage">
      <div class="description">
        <p>{{ CourseName }} - Neighbourhood</p>
        <p>{{ Description }}</p>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: ["Image" , "CourseName", "Neighbourhood", "Description"],
  computed: {
    bgImage() {
      return 'background-image: url("' + this.Image + '")';
      // return 'background-image: url("' + this.Image + '")';
    },
  },
}
</script>

<style lang="scss" scoped>
.course-card-wrapper{
  padding: .5rem;
  width: 33%;
  height: 250px;

  .course-card{
    height: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: var(--radiusF);
    
    .description{
      background-color: rgba(255,255, 255, .7);
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      padding: .5rem;
      margin-top: auto;
    }
  }
}
</style>