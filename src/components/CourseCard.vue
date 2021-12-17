<template>
  <router-link :to="{ name: 'Course', params: { slug: Id } }" :id="Id" class="course-card d-flex justify-content-between">
    <div class="leftSide d-flex flex-column justify-content-between">
      <div>
        <label>KURS</label>
        <h3>{{ CourseName }}</h3>
      </div>

      <div class="left-btn d-flex aling-items-center">
        <a>11.12.2021 - 11.01.2022</a>
      </div>
    </div>

    <div class="rightSide d-flex justify-content-between w-100">
      <div class="title">
        <h5>Başvuru Tarihleri</h5>
        <h5>11.12.2021 - 11.01.2022</h5>
        <h3>Lorem Ipsum</h3>
        <p>{{ Description }}</p>
      </div>

      <div class="box d-flex flex-column align-items-end">
        <div class="progBar">
          <div class="bar" :style="barWidth"></div>
        </div>
        <small><span v-html="Students ? Students.length : '0' "></span> /{{ Capacity }} Kapasite</small>

        <div class="btn">Kayıt ol</div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: ["Image", "CourseName", "Neighbourhood", "Description", "Link", "Id", "Capacity", "Students"],
  computed: {
    barWidth() {
      return 'width:' + (this.Students.length * 100) / this.Capacity + '%';
    },
  },
};
</script>

<style lang="scss" scoped>
.course-card {
  width: 100%;
  background: #ffffff;
  // box-shadow: 0px 23px 49px -5px #6961bd;
  border-radius: 15px;
  overflow: hidden;
  display: flex;
  margin-bottom: 2rem;
  transition: var(--slow);
  border: 1px solid #e7e7e7;
  

  &:hover{
    box-shadow: 0px 23px 49px -5px #d3d3d3;
    
    .left-btn svg{
      margin-left: 1rem;
    }
  }

  .leftSide {
    width: 322px;
    padding: 1.5rem;
    background: var(--purple);
    border-radius: 15px;

    label {
      font-size: 14px;
      line-height: 18px;
      letter-spacing: 2.1px;      
      color: #ada5ff;
      mix-blend-mode: normal;
      opacity: 0.7;
    }

    h3 {
      font-size: 28px;
      line-height: 35px;
      color: #ffffff;
      margin-top: 0.5rem;
    }

    .left-btn {
      svg{
        transition: var(--fast);
      }

      a {
        font-size: 16px;
        line-height: 20px;
        margin-right: .5rem;
        color: #ada5ff;
      }

    }
  }

  .rightSide {
    display: flex;
    .title {
      padding: 2rem 0 2rem 2rem;
      
      h5 {
        font-size: 14px;
        line-height: 18px;
        letter-spacing: 2.1px;
        color: #242e4c;

        mix-blend-mode: normal;
        opacity: 0.7;
      }

      h3 {
        margin-top: .5rem;
        font-size: 32px;
        line-height: 35px;
        color: var(--purple);
      }
      p{
        font-size: 0.9rem;
        margin-top: 1rem;
        color: #242e4c;
        mix-blend-mode: normal;
        opacity: 0.7;
      }
    }

    .box{
      padding: 2rem 2rem 2rem .5rem;
    
      .progBar {
        width: 218px;
        height: 6px;
        background: #dddbf1;
        border-radius: 3px;
        overflow: hidden;

        .bar {
          // width: 140px;
          height: 6px;
          background: var(--purple);
          border-radius: 3px;
        }
      }

      small {
        margin-top: 1rem;

        font-size: 12px;
        line-height: 15px;
        
        text-align: right;
        letter-spacing: 1.8px;

        color: #242e4c;

        mix-blend-mode: normal;
        opacity: 0.7;
      }

    }

    
    .btn {
      width: 161px;
      height: 47px;
      background: var(--purple);
      box-shadow: 0px 15px 20px -10px rgba(71, 62, 166, 0.552989);
      border-radius: 28.5px;
      display: flex;
      align-items: center;
      justify-content: center;

      font-size: 20px;
      line-height: 25px;
      color: #ffffff;
      margin-top: 5rem;
      cursor: pointer;
      transition: 0.3s;
      user-select: none;

      &:active {
        transform: scale(1.01);
      }
    }
  }
}
</style>