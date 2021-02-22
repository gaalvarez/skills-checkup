import { createApp } from "vue";
import App from "./App.vue";
import { CoreModule } from "./core";
import { PresentQuizModule } from "./features/present-quiz/present-quiz.module";
import { RouterModule } from "./router";
import { StoreModule } from "./store/store.module";

function bootstrap() {
  const app = createApp(App);

  const routerModule = new RouterModule();
  routerModule.install(app);

  const storeModule = new StoreModule();
  storeModule.install(app);

  const presentQuizModule = new PresentQuizModule(
    routerModule.router!,
    storeModule.store!
  );
  presentQuizModule.install(app);

  //importante montar la aplicación core al final porque hace el mount
  const coreModule = new CoreModule(routerModule.router!, storeModule.store!);
  coreModule.install(app);
}

bootstrap();
