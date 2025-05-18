import type { App } from "vue";
import { PButton } from "./components";

const components = [PButton /* ... */];

const install = (app: App): void => {
  components.forEach((comp) => {
    comp.name && app.component(comp.name, comp);
  });
};

export default {
  install,
};
