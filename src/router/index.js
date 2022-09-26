import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/HomeView.vue";
import Category from "../views/Category.vue";
import AboutView from "../views/AboutView.vue";
import Contact from "../views/Contact.vue";
import ErrorPage from "../views/ErrorPage.vue";
import Carsinfo from "../component/cars/Carsinfo.vue";
import EachCar from "../component/cars/EachCar.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/Home",
    name: "Home",
    component: Home,
  },
  {
    path: "/Category",
    name: "Category",
    component: Category,
  },
  {
    path: "/AboutView",
    name: "AboutView",
    component: AboutView,
  },
  {
    path: "/Contact",
    name: "Contact",
    component: Contact,
  },
  // {
  //   path: "/EachCar",
  //   name: "EachCar",
  //   component: EachCar,
  // },
  {
    path: "/View/cars/:carName/:carFailed",
    name: "Carsinfo",
    component: Carsinfo,
  },
  {
    path: "/View/cars/:carType",
    name: "EachCar",
    component: EachCar,
  },
  {
    path: "/:catchAll(.*)",
    name: "ErrorPage",
    component: ErrorPage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  console.log(to); // جاى من
  console.log(from.name); // رايح من
  if (to.name != null) {
    if (to.params.pageTitle == undefined) {
      to.params.pageTitle = from.name;
    }
    document.title =
      process.env.VUE_APP_TITLE +
      " |" +
      " " +
      to.name +
      " |" +
      " " +
      to.params.pageTitle;
  }
  next(); //function
});
export default router;
