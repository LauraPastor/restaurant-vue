import LandingPage from "./components/LandingPage.vue";
import SignUp from "./components/SignUp.vue";
import Login from "./components/Login.vue";
import Add from "./components/Add.vue";
import Update from "./components/Update.vue";
import NotFound from "./components/NotFound.vue";

import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", component: LandingPage },
  { path: "/sign-up", component: SignUp },
  { path: "/log-in", component: Login },
  { path: "/add", component: Add },
  { path: "/update/:id", component: Update },
  { path: "/:pathMatch(.*)", component: NotFound },
];

const router = createRouter({ history: createWebHistory(), routes });

export default router;
