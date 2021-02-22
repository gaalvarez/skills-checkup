import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "list-quiz",
    name: "ListQuiz",
    component: () =>
      import(/* webpackChunkName: "ListQuiz" */ "../views/ListQuiz.vue"),
  },
  {
    path: "skill-quiz/:id",
    name: "AngularQuiz",
    component: () =>
      import(/* webpackChunkName: "AngularQuiz" */ "../views/SkillQuiz.vue"),
  },
];

export default routes;
