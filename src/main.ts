import { createApp } from "vue";
import { Router } from "vue-router";
import App from "./App.vue";
import { CoreModule } from "./core/core.module";
import { QuizModule } from "./features/quiz/quiz.module";
import { ReportingModule } from "./features/reporting/reporting.module";
import { RouterModule } from "./router/router.module";
import { StoreModule } from "./store/store.module";

function bootstrap() {
  const app = createApp(App);

  const routerModule = new RouterModule();
  routerModule.install(app);

  const storeModule = new StoreModule();
  storeModule.install(app);

  const quizModule = new QuizModule(routerModule.router!, storeModule.store!);
  quizModule.install(app);

  const reportingModule = new ReportingModule(
    routerModule.router!,
    storeModule.store!
  );
  reportingModule.install(app);

  //importante montar la aplicación core al final
  const coreModule = new CoreModule(routerModule.router!, storeModule.store!);
  coreModule.install(app);
}

bootstrap();
