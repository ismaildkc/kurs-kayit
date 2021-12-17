<template>
  <header class="d-flex align-items-center justify-content-center">
    <div class="container d-flex align-items-center justify-content-between">
      <div><router-link to="/" class="logo"><img src="/img/kartal-logo.png" alt=""></router-link></div>
      
      <nav>
        <router-link class="nav-item" to="/kurs-olustur">Kurs Oluştur</router-link>
        <router-link class="nav-item" to="/kurslar">Kurslar</router-link>
        <router-link class="nav-item" to="/giris-yap">Giriş Yap</router-link>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--headerSize);
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