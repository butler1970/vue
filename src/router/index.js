import { createWebHistory, createRouter } from "vue-router";
import HomePage from "@/components/HomePage.vue";
import AboutPage from "@/components/AboutPage.vue";
import MyIPPage from "@/components/MyIPPage.vue";
import Base64Page from "@/components/Base64Page.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: HomePage,
    },
    {
        path: "/about",
        name: "About",
        component: AboutPage,
    },
    {
        path: "/my-ip",
        name: "MyIP",
        component: MyIPPage,
    },
    {
        path: "/base64",
        name: "Base64",
        component: Base64Page,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;