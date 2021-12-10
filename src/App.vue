<template>
  <div id="app" class="smooth-scroll">
    <transition
      enter-active-class="animate__animated animate__fadeIn"
      leave-active-class="animate__animated animate__fadeOut"
      mode="out-in"
    >
      <router-view />
    </transition>
  </div>
</template>
<script>
export default {
  name: "app",
};
</script>