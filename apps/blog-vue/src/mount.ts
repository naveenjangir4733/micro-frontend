import { createApp } from "vue";
import type { App as VueApp } from "vue";
import Blog from "./components/Blog.vue";

let app: VueApp<Element> | null = null;

export function mount(container: Element) {
  app = createApp(Blog);
  app.mount(container);
}

export function unmount() {
  if (!app) {
    return;
  }

  app.unmount();
  app = null;
}
