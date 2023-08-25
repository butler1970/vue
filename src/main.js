import {createApp} from 'vue'
import App from './App.vue'
import VueGtag from "vue-gtag";

// Google's Material Design Resources
import "@mdi/font/css/materialdesignicons.css"

// Vue-Router configuration
import router from "./router";

// Vuetify
import vuetify from "./theme";

// Custom component for reading feeds and rendering them.
import FeedReader from "@/components/FeedReader.vue";

// Custom component encapsulating the markdown-it library.
import Markdown from "@/components/Markdown.vue";

createApp(App)
    .component('FeedReader', FeedReader)
    .component('Markdown', Markdown)
    .use(router)
    .use(vuetify)
    .use(VueGtag, { config: { id: "G-D8LQJ991NR"}})
    .mount('#app');
