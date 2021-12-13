<template>
  <footer class="d-flex align-items-center justify-content-center">
    <div class="container d-flex align-items-center justify-content-between">
      <div><router-link to="/">Logo</router-link></div>
      
      <nav>
        <router-link class="nav-item" to="/kurs-olustur">Kurs Oluştur</router-link>
        <router-link class="nav-item" to="/giris-yap">Giriş Yap</router-link>
      </nav>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer{
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: #fff;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0, .1);

  nav{
    .nav-item{
      padding: 0 1rem;
    }
  }
}
</style>