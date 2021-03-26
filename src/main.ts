import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// CSSモジュールImport
import "xp.css/dist/XP.css";
// import "xp.css/dist/98.css";
// import "7.css/dist/7.css";

import "./assets/styles/index.sass";

createApp(App).use(store).use(router).mount("#app");
