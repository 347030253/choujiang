import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/index")
  },
  {
    path: "/ones",
    name: "Ones",
    component: () => import("@/views/ones")
  },
  {
    path: "/twos",
    name: "Twos",
    component: () => import("@/views/twos")
  },
  {
    path: "/three",
    name: "Three",
    component: () => import("@/views/three")
  },
  {
    path: "/lucky",
    name: "Lucky",
    component: () => import("@/views/lucky")
  }
];

const router = new VueRouter({
  model: "history",
  base: "screens",
  routes
});

export default router;
