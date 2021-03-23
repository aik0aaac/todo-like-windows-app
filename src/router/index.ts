import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
  RouteRecordRaw,
} from "vue-router";
import Todo from "../views/Todo.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Todo",
    component: Todo,
  },
];

const router = createRouter({
  history: process.env.IS_ELECTRON
    ? createWebHashHistory()
    : createWebHistory(),
  routes,
});

export default router;
