<template>
  <div id="app">
    <Header />
    <transition
      enter-active-class="animate__animated animate__fadeIn"
      leave-active-class="animate__animated animate__fadeOut"
      mode="out-in"
    >
      <router-view class="header-spacer page-template" />
    </transition>
    <Footer />
  </div>
</template>
<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  name: "app",
  components: {
    Header, Footer
  },
  mounted(){
    
  }
};
</script>