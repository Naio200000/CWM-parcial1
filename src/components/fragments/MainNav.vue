<script setup>
import ImageLogo from './ImageLogo.vue';
import MainImg from '../labels/MainImg.vue';
import MainRouterLink from '../labels/MainRouterLink.vue';
import { logout } from '../../services/auth';
import { useAuth } from '../../composition/useAuth';

const {user: authUser} = useAuth();

async function submitLogout() {

    await logout();
    this.$router.push({
        path: '/',
    });
}
</script>
<template>
        <nav class="h-20 p-4 flex justify-between items-center bg-gray-100 text-black text-xl ">
            <div class=" w-1/4">
                <ImageLogo />
            </div>
            <ul :class="['flex', 'w-1/2', 'gap-4', 'lg:gap-16', 'items-center', authUser.id ? 'justify-evenly' : 'justify-end']">
                <template class="" v-if="authUser.id === null">
                    <li><MainRouterLink class="font-bold text-2xl " :to="'/'">Iniciar Sesion</MainRouterLink></li>
                    <li><MainRouterLink class="font-bold text-2xl pe-4 " :to="'/registrarse'">Registrarse</MainRouterLink></li>
                </template>
                <template class="" v-else>
                    <li class="w-12">
                        <MainRouterLink :to="'/home'" href="#">
                            <MainImg :src="'./img/icons/home.png'"/>
                            <span class="sr-only">Inicio</span>
                        </MainRouterLink>
                    </li>
                    <li class="w-12">
                        <MainRouterLink :to="'/gamers'">
                            <MainImg :src="'./img/icons/gamers.png'"/>
                            <span class="sr-only">Gamers</span>
                        </MainRouterLink>
                    </li>
                    <li class="w-12">
                        <MainRouterLink :to="`/posts/${authUser.id}`">
                            <MainImg :src="'./img/icons/posts.png'"/>
                            <span class="sr-only">Mis Posts</span>
                        </MainRouterLink>
                    </li>
                    <li class="w-12">
                        <MainRouterLink :to="`/perfil/${authUser.id}`">
                            <MainImg :src="'./img/icons/profile.png'"/>
                            <span class="sr-only">Mi Perfil</span>
                        </MainRouterLink>
                    </li>
                </template>
            </ul>
            <div v-if="authUser.id != null" class="pe-4 w-1/4 text-end">
                <form action="" @submit.prevent="submitLogout">
                    <button type="submit" class="w-12 ">
                        <MainImg class="block" :src="'./img/icons/close.png'" :alt="'megamemga'"/>
                        <span class="sr-only">Cerrar Sesion</span>
                    </button>
                </form>
            </div>
        </nav>
</template>