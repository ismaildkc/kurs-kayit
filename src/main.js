import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/main.scss";
import JQuery from "jquery";
import Vuelidate from 'vuelidate';

import VueTheMask from 'vue-the-mask';
Vue.use(Vuelidate);
Vue.use(VueTheMask);
window.$ = JQuery;

import api from "@/api";
window.vm = {};
Vue.config.productionTip = false;
Vue.prototype.$api = api;

vm = new Vue({
  router,
  store,
  methods: {
    
  },
  render: h => h(App)
}).$mount("#app");
