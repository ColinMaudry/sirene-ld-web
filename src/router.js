import Vue from "vue";
import Router from "vue-router";
import PresentationPage from "@/components/PresentationPage.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "presentation-page",
      component: PresentationPage
    }
  ]
});
