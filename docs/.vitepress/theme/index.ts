import "peach-x/theme/style.css";
import "peach-x/theme/dark.css";
import "virtual:group-icons.css";
import "./custom.css";

import { AntdTheme } from "vite-plugin-vitepress-demo/theme";
import PeachX from "peach-x";
import Theme from "vitepress/theme";

export default {
  ...Theme,
  enhanceApp({ app }) {
    app.component("Demo", AntdTheme);
    app.use(PeachX);
  },
};
