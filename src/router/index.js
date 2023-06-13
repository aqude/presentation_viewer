import {createRouter, createWebHistory} from "vue-router";
const routes = [
    {
        path: '/',
        name: 'preview',
        component: () => import('../views/Preview.vue')
        //component: () => import('../views/Information.vue')
    },
    {
        path: '/viewPresentation',
        name: 'viewPresentation',
        component: () => import('../components/PresentationPicker.vue')
    },
    {
        path: '/information',
        name: 'information',
        component: () => import('../components/Information.vue')
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;