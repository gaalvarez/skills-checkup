import { App } from "vue";

export interface VueModule<T = Record<string, any>> {
  readonly name: string;
  install(app: App): void;
  install(app: App, options: T): void;
}
