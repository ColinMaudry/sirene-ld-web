import Vue from "vue";
import Router from "vue-router";
import PresentationPage from "@/views/PresentationPage.vue";
import DashboardPage from "@/views/DashboardPage.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "dashboard",
      component: DashboardPage
    },
    {
      path: "/presentation",
      name: "presentation",
      component: PresentationPage
    }
  ]
});
