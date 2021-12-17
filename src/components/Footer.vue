<template>
  <footer class="d-flex align-items-center justify-content-center">
    <div class="container d-flex align-items-center justify-content-between">
      <div><router-link to="/" class="logo"><img src="/img/kartal-logo.png" alt=""></router-link></div>
      
      <p>2021 Her Hakkı Saklıdır</p>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer{
  // position: fixed;
  // bottom: 0;
  // left: 0;
  width: 100%;
  height: 60px;
  background-color: #fff;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0, .1);

  .logo{
    img{
      height: 50px;
    }
  }

  nav{
    .nav-item{
      padding: 0 1rem;
    }
  }
}
</style>