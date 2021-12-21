import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import axios from 'axios';
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/giris-yap",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Login.vue")
  },
  {
    path: "/kayit-ol",
    name: "SignUp",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/SignUp.vue")
  },
  {
    path: "/kurs-olustur",
    name: "CreateCourse",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/CreateCourse.vue")
  },
  {
    path: "/kurslar",
    name: "CourseList",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/CourseList.vue")
  },
  {
    path: "/kurslar/:slug",
    name: "Course",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Course.vue")
  },
  
  // { path: '/:pathMatch(.*)*', redirect: '/404' },
  { path: '*', 
    component: () =>
      import("../views/404.vue") 
  },
];

const router = new VueRouter({
  mode: "history",
  linkExactActiveClass: 'active',
  linkExactActiveClass: "exact-active",
  base: process.env.BASE_URL,
  routes,
});

export default router;
