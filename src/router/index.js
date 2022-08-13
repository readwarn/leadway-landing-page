import VueRouter from "vue-router";
import vue from "vue";

vue.use(VueRouter);

const routes = [{
        name: "Home",
        path: "/",
        component: () =>
            import (
                /* webpackChunkName: "homePage" */
                "@/pages/home"
            ),
    },

    {
        name: "Welcome",
        path: "/welcome",
        component: () =>
            import (
                /* webpackChunkName: "welcomePage" */
                "@/pages/welcome"
            ),
    },
];

const router = new VueRouter({
    routes,
    mode: "history",
});

export default router;