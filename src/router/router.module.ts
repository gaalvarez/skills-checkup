import { VueModule } from "@/vue.module";
import { App } from "vue";
import {
  createRouter,
  createWebHistory,
  Router,
  RouteRecordRaw,
} from "vue-router";

const routes: Array<RouteRecordRaw> = [
  //podrían ponerse rutas core
  {
    path: "/",
    name: "Home",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../features/present-quiz/views/SkillQuiz.vue"
      ),
  },
  //   {
  //     path: "/angular-quiz",
  //     name: "AngularQuiz",
  //     // route level code-splitting
  //     // this generates a separate chunk (about.[hash].js) for this route
  //     // which is lazy-loaded when the route is visited.
  //     component: () =>
  //       import(/* webpackChunkName: "about" */ "../views/SkillQuiz.vue"),
  //   },
];

export class RouterModule implements VueModule {
  readonly name: string = "router";
  readonly router?: Router;

  constructor() {
    this.router = createRouter({
      history: createWebHistory(process.env.BASE_URL),
      routes,
    });
  }

  install(app: App<any>) {
    app.use(this.router as Router);
  }
}
