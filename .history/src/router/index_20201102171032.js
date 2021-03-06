import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "Home",
    component: () => import("@/views/index")
  },
  {
    path: "/lucky",
    name: "Lucky",
    component: () => import("@/views/lucky")
  },
  {
    path: "/two",
    name: "Two",
    component: () => import("@/views/two")
  }
];

const router = new VueRouter({
  model: "history",
  base: "screens",
  routes
});

export default router;
