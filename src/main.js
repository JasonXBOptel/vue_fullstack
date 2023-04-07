import { createApp } from "vue";
import { createPinia } from "pinia";
import liteStore from "./liteStore";
import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const app = createApp(App);
app.provide("liteStore", liteStore); // make available project-wide
app.use(createPinia());
app.use(router);

app.mount("#app");
