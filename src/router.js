import { createRouter, createWebHistory } from "vue-router";

import home from "./pages/home.vue";
import project from "./pages/project.vue";
import about from "./pages/about.vue";
import contacts from "./pages/contacts.vue";
import ProjectCardDetail from "./pages/ProjectCardDetail.vue";
import Error404 from "./pages/Error404.vue";

const router = createRouter({
    history: createWebHistory(),
    linkExactActiveClass: 'active',
    routes: [
        {
            path: '/',
            name: 'home',
            component: home
        },
        {
            path: '/progetti',
            name: 'project',
            component: project
        },
        {
            path: '/dettaglio-progetto/:slug',
            name: 'detail',
            component: ProjectCardDetail
        },
        {
            path: '/chi-siamo',
            name: 'about',
            component: about
        },
        {
            path: '/contatti',
            name: 'contact',
            component: contacts
        },
        {
            path: '/:pathMatch(.*)*',
            component: Error404
        }
    ]
});

export { router };