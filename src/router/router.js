import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import Profile from '../views/Profile.vue';
import Posts from '../views/Posts.vue';

const routes = [
    {path: '/',             component: Home,},
    {path: '/iniciar',      component: Login,},
    {path: '/registrarse',  component: Register,},
    {path: '/perfil',       component: Profile,},
    {path: '/posts',        component: Posts,},
];

const router = createRouter({
    routes,
    history: createWebHashHistory(),
});

router.beforeEach((to, from) => {
    if (to.path == '/posts') {
        return false;
    }
});

export default router;