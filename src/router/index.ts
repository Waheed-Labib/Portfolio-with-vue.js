import { createRouter, createWebHistory } from 'vue-router';

// Import pages
import Home from '../pages/Home/Home.vue';
import About from '../pages/About/About.vue';
import Projects from '../pages/Projects/Projects.vue';
import Experience from '../pages/Experience/Experience.vue';
import Contact from '../pages/Contact/Contact.vue';


const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/projects',
        name: 'Projects',
        component: Projects
    },
    {
        path: '/experience',
        name: 'Experience',
        component: Experience
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
