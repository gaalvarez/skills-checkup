import { VueModule } from "@/vue.module";
import { App } from "vue";
import { Router, RouterView } from "vue-router";
import { Store } from "vuex";
import routes from "./router/quiz.routes";

import quizStore from "./store/quiz.store";

export class QuizModule implements VueModule {
  readonly name = "quiz";

  constructor(private router: Router, private store: Store<any>) {}

  install(app: App) {
    //rutas planas deben llevar / al inicio
    // routes.forEach((route) => this.router.addRoute(route));
    //rutas con un path padre, las hijas van sin / al inicio
    this.router.addRoute({
      path: "/quiz",
      component: RouterView,
      children: routes,
    });
    this.store.registerModule([this.name], quizStore);
  }
}
