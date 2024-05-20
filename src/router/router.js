import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import Profile from '../views/Profile.vue';
import Posts from '../views/Posts.vue';
import { subscribeToAuth } from '../services/auth';

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


let authUser = {id:null, email:null,};
subscribeToAuth(userData => authUser = userData);

router.beforeEach((to, from) => {
    if (authUser.id === null && to.path == '/posts') {
        return {
            path: '/iniciar'
        };
    }
});

export default router;
