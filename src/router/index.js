import { createWebHistory, createRouter } from "vue-router";
import HomePage from "@/components/HomePage.vue";
import AboutPage from "@/components/AboutPage.vue";
import MyIPPage from "@/components/MyIPPage.vue";
import Base64Page from "@/components/Base64Page.vue";
import EncodeURLPage from "@/components/EncodeURLPage.vue"
import AsciiPage from "@/components/AsciiPage.vue"
import HackerNoonPage from "@/components/HackerNoonPage.vue";

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
    {
        path: "/encode-url",
        name: "EncodeURL",
        component: EncodeURLPage,
    },
    {
        path: "/ascii",
        name: "Ascii",
        component: AsciiPage,
    },
    {
        path: "/hacker-noon",
        name: "HackerNoon",
        component: HackerNoonPage,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;