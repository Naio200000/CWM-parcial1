import { createRouter, createWebHashHistory } from 'vue-router';
import { subscribeToAuth } from '../services/auth';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import Posts from '../views/Posts.vue';
import Home from '../views/Home.vue';
import Profile from '../views/Profile.vue';
import Gamers from '../views/Gamers.vue';

const routes = [
    {path: '/',             component: Login,},
    {path: '/registrarse',  component: Register,},
    {path: '/home',         component: Home,},
    {path: '/perfil',       component: Profile,},
    {path: '/gamers',       component: Gamers,},
    {path: '/posts',        component: Posts,},
];

const router = createRouter({
    routes,
    history: createWebHashHistory(),
});


let authUser = {id:null, email:null,};
subscribeToAuth(userData => authUser = userData);

router.beforeEach((to, from) => {
    if (authUser.id != null && (to.path == '/' || to.path == '/registrarse')) {
        return {
            path: '/home'
        };
    }else if (authUser.id === null && (to.path == '/posts' || to.path == '/perfil')) {
        return {
            path: '/'
        };
    }
});

export default router;
