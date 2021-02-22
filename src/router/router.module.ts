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

  install(app: App) {
    app.use(this.router as Router);
  }
}
