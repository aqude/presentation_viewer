// @ts-ignore
import Preview from "../views/Preview.vue";
// @ts-ignore
import Main    from "../views/Main.vue";
import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: '/',
        name: '',
        component: Main
    },
    {
        path: '/preview',
        name: 'preview',
        component: Preview
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;