import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import("../views/About.vue"),
  },
  {
    path: "/resume",
    name: "Resume",
    component: () =>
      import("../views/Resume.vue"),
  },
  {
    path: "/certificates",
    name: "Certificates",
    component: () =>
      import("../views/Certificates.vue"),
  },
  {
    path: "/portfolio",
    name: "Portfolio",
    component: () =>
      import("../views/Portfolio.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () =>
      import("../views/Contact.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
