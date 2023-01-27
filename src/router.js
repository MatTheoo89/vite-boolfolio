import { createRouter, createWebHistory } from "vue-router";

import home from "./pages/home.vue";
import about from "./pages/about.vue";
import contacts from "./pages/contacts.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: home
        },
        {
            path: '/',
            name: 'about',
            component: about
        },
        {
            path: '/',
            name: 'contacts',
            component: contacts
        }
    ]
});

export { router };