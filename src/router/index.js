import { createWebHistory, createRouter } from "vue-router";
import HomePage from "../components/HomePage.vue";
import AboutPage from "../components/AboutPage.vue";
import MyIPPage from "../components/MyIPPage.vue";

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
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;