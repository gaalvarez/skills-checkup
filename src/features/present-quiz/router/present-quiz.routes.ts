import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "list-quiz",
    name: "ListQuiz",
    component: () =>
      import(/* webpackChunkName: "AngularQuiz" */ "../views/ListQuiz.vue"),
  },
  {
    path: "skill-quiz",
    name: "AngularQuiz",
    component: () =>
      import(/* webpackChunkName: "AngularQuiz" */ "../views/SkillQuiz.vue"),
  },
];

export default routes;
