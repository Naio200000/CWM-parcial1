import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import Profile from '../views/Profile.vue';
// import Posts from '../views/Posts.vue';
import { subscribeToAuth } from '../services/auth';

const routes = [
    {path: '/home',         component: Home,},
    {path: '/',             component: Login,},
    {path: '/registrarse',  component: Register,},
    {path: '/perfil',       component: Profile,},
    // {path: '/posts',        component: Posts,},
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
