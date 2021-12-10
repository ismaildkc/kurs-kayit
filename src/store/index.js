import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    language: '',
  },
  mutations: {
    _language(state, value){
      state.language = value;
    },
  },
  actions: {},
  modules: {},
  getters: {
    langg: state => state.language,

  },
});
