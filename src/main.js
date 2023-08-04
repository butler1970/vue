import {createApp} from 'vue'
import App from './App.vue'
import VueGtag from "vue-gtag";

// Google's Material Design Resources
import "@mdi/font/css/materialdesignicons.css"

// Vue-Router configuration
import router from "./router";

// Vuetify
import vuetify from "./theme";

createApp(App)
    .use(router)
    .use(vuetify)
    .use(VueGtag, { config: { id: "G-D8LQJ991NR"}})
    .mount('#app');
