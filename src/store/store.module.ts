import { App } from "vue";
import { Store } from "vuex";
import { VueModule } from "../vue.module";
import { createStore } from "vuex";

export class StoreModule implements VueModule {
  readonly name = "store";
  store?: Store<any>;
  install(app: App) {
    this.store = createStore({
      state: {},
      mutations: {},
      actions: {},
      modules: {},
    });
  }
}
