import {createApp} from 'vue'
import App from './App.vue'

// Google's Material Design Resources
import "@mdi/font/css/materialdesignicons.css"

// Vue-Router configuration
import router from "./router";

// Vuetify
import vuetify from "./theme";

createApp(App).use(router).use(vuetify).mount('#app');
