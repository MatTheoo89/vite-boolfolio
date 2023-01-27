import { createRouter, createWebHistory } from "vue-router";

import home from "./pages/home.vue";
import about from "./pages/about.vue";
import contacts from "./pages/contacts.vue";
import Error404 from "./pages/Error404.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: home
        },
        {
            path: '/chi-siamo',
            name: 'about',
            component: about
        },
        {
            path: '/contatti',
            name: 'contacts',
            component: contacts
        },
        {
            path: '/:pathMatch(.*)*',
            component: Error404
        }
    ]
});

export { router };