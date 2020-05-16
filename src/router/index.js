import Vue from "vue";
import VueRouter from "vue-router";

import StartPage from "../views/StartPage.vue";
import Registration from "../views/Registration.vue";
import UserRoom from "../views/UserRoom.vue";
import TestingPage from "../views/TestingPage.vue";
import UserTest from "../components/user/UserTest.vue";
import UserDataPage from "../components/user/UserDataPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "StartPAge",
    component: StartPage,
  },
  {
    path: "/registration",
    name: "Registration",
    component: Registration,
  },
  {
    path: "/userRoom",
    name: "UserRoom",
    component: UserRoom,
  },
  {
    path: "/Test/",
    name: "TestingPage",
    component: TestingPage,
    children: [
      {
        path: "testing",
        component: UserTest,
      },
      {
        path: ":token/:idT/:idA/userData",
        component: UserDataPage,
      },
    ],
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
