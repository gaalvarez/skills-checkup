import { VueModule } from "@/vue.module";
import { App } from "vue";
import { Router, RouterView } from "vue-router";
import { Store } from "vuex";
import routes from "./router/present-quiz.routes";

import presentQuizStore from "./store";

export class PresentQuizModule implements VueModule {
  readonly name = "presentQuiz";
  constructor(private router: Router, private store: Store<any>) {}

  install(app: App) {
    this.router.addRoute({
      path: "/quiz",
      component: RouterView,
      children: routes,
    });
    this.store.registerModule([this.name], presentQuizStore);
  }
}
