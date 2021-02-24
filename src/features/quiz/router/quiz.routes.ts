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
  {
    path: "quiz-result",
    name: "QuizResult",
    component: () =>
      import(/* webpackChunkName: "QuizResult" */ "../views/QuizResult.vue"),
  },
];

export default routes;
