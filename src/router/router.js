import { createRouter, createWebHashHistory } from 'vue-router';
import { subscribeToAuth } from '../services/auth';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import Posts from '../views/Posts.vue';
import Home from '../views/Home.vue';
import Profile from '../views/Profile.vue';
import ProfileEdit from '../views/ProfileEdit.vue';
import GamerProfile from '../views/GamerProfile.vue';
import Gamers from '../views/Gamers.vue';

const routes = [
    {path: '/',                 component: Login,},
    {path: '/registrarse',      component: Register,},
    {path: '/home',             component: Home,},
    {path: '/perfil/:id',       component: Profile,         meta: {requireAuth: true}},
    {path: '/perfil/editar',    component: ProfileEdit,         meta: {requireAuth: true}},
    {path: '/gamers',           component: Gamers,          meta: {requireAuth: true}},
    {path: '/gamers/:id',       component: GamerProfile,    meta: {requireAuth: true}},
    {path: '/posts',            component: Posts,           meta: {requireAuth: true}},
];

const router = createRouter({
    routes,
    history: createWebHashHistory(),
});


let authUser = {id:null, email:null,};
subscribeToAuth(userData => authUser = userData);

router.beforeEach((to, from) => {
    if (authUser.id != null && ['/', '/registrarse'].includes(to.path)) {
        return {
            path: '/home'
        };
    }else if (authUser.id === null && to.meta.requireAuth) {
        return {
            path: '/'
        };
    }
});

export default router;
