import { VueModule } from "@/vue.module";
import { App } from "vue";
import { Router } from "vue-router";
import { Store } from "vuex";
import SCPageTitle from "./components/SCPageTitle.vue";

export class CoreModule implements VueModule {
  readonly name = "core";

  constructor(private router: Router, private store: Store<any>) {}

  install(app: App) {
    app
      .use(this.store)
      .use(this.router)
      .component("sc-page-title", SCPageTitle)
      .mount("#app");
  }
}
