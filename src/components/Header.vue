<template>
  <header class="d-flex align-items-center justify-content-center">
    <div class="container d-flex align-items-center justify-content-between">
      <div><router-link to="/" class="logo"><img src="/img/kartal-logo.png" alt=""></router-link></div>
      
      <nav>
        <!-- <router-link class="nav-item" to="/kurs-olustur">Kurs Oluştur</router-link> -->
        <router-link class="nav-item" to="/kurslar">Kurslar</router-link>
        <router-link class="nav-item" to="/kurslar">Kültür Merkezleri</router-link>
        <router-link class="nav-item" to="/giris-yap" v-if="!isLogedin">Giriş Yap</router-link>
        <span class="nav-item" v-if="isLogedin" @click="signOut">Çıkış Yap</span>
      </nav>
    </div>
  </header>
</template>

<script>
import { getFirestore } from 'firebase/firestore';
import { getAuth, signOut, onAuthStateChanged } from 'firebase/auth';
import "firebase/firestore";

// init services
export const db = getFirestore();
export const auth = getAuth();
import { getData } from "../config/firebase";

export default {
  data() {
    return{
      isLogedin: false
    }
  },
  mounted(){
    onAuthStateChanged(auth, (user) => {
      // console.log("user state", user);
      this.$store.commit("_userInfo", user);
      this.isLogedin = this.$store.state.userInfo ? this.$store.state.userInfo.emailVerified : false
    })
  },
  methods: {
    signOut(){
      signOut(auth)
      .then(() => {
        console.log("signed out.");
      })
      .catch((err) => {
        console.log(err.message);
      })
    }
  }
}
</script>

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
      border-bottom: 1px solid transparent;

      // &.router-link-active{
      //   border-bottom: 1px solid #000;
      // }

    }
  }
}
</style>