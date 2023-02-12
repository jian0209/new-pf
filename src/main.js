import { createApp } from "vue";
import { createPinia } from "pinia";
// import { createI18n } from "vue-i18n";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
import i18n from "./i18n";
import VueKinesis from "vue-kinesis";

const app = createApp(App).use(i18n);

app.use(VueKinesis);
app.use(createPinia());
app.use(router);

app.mount("#app");
