import 'peach-x/theme/dark.css'

import { ThemeConfig, applyTheme, useTheme } from 'peach-x/theme';

import App from './App.vue'
import { createApp } from 'vue'

const {toggleTheme} = useTheme();
const themeConfig: ThemeConfig = {
    primary: '#8ec8be'
}
applyTheme(themeConfig);
toggleTheme();
createApp(App).mount('#app')

