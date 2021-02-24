import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "response-report",
    name: "ResponseReport",
    component: () =>
      import(/* webpackChunkName: "ListQuiz" */ "../views/ResponseReport.vue"),
  },
];

export default routes;
