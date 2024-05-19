import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import Posts from '../views/Posts.vue';

const routes = [
    {path: '/',             component: Home,},
    {path: '/iniciar',      component: Login,},
    {path: '/registrarse',  component: Register,},
    {path: '/posts',        component: Posts,},
];

const router = createRouter({
    routes,
    history: createWebHashHistory(),
});

export default router;