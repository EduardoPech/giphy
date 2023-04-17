import Vue from "vue";
import VueRouter from "vue-router";
import SearchView from "../views/SearchView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "search",
    component: SearchView,
  },
  {
    path: "/stars",
    name: "stars",
    component: () =>
      import(/* webpackChunkName: "stars" */ "../views/StarsView.vue"),
  },
  {
    path: "/history",
    name: "history",
    component: () =>
      import(/* webpackChunkName: "history" */ "../views/HistoryView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
