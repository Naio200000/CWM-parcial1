
<script setup>
import MainRouterLink from '../labels/MainRouterLink.vue';
import MainImg from '../labels/MainImg.vue';
import { useAuth } from '../../composition/useAuth';

const {user: authUser} = useAuth();


</script>
<template>
    <div class="h-ful px-8 m-8 rounded-lg shadow-lg shadow-slate-400 bg-gray-100">
        <ul class="py-8">
            <li v-if="authUser.id == null" class="py-4 ps-2 ms-6 xl:text-xl font-bold">    
                <MainRouterLink class="font-bold text-2xl" :to="'/'">Iniciar Sesion</MainRouterLink>
            </li>
            <li v-else class="py-4 ps-2 xl:text-xl font-bold">
                <MainImg class="xl:w-10 w-8 inline me-2 rounded-full" :alt="''" :src="authUser.photoURL"/>
                <MainRouterLink class="align-middle" :to="'/home'">{{ authUser.displayName }}</MainRouterLink>
            </li>

                    
            <li class="py-4 ps-2 xl:text-xl  font-bold">
                <MainRouterLink class="align-middle" :to="'/gamers'">
                    <MainImg class="xl:w-10 w-8 inline me-2" :alt="'Link a Gamers'" :src="'../img/icons/gamers.png'"/>
                    Gamers
                </MainRouterLink>
            </li>
            <li class="py-4 ps-2 xl:text-xl font-bold">
                <MainRouterLink class="align-middle" :to="`/posts/${authUser.id}`">
                    <MainImg class="xl:w-10 w-8 inline me-2" :alt="'Link a Posts'" :src="'../img/icons/posts.png'"/>
                    Mis Posts
                </MainRouterLink>
            </li>
            <li class="py-4 ps-2 xl:text-xl font-bold">
                <MainRouterLink class="align-middle" :to="`/perfil/${authUser.id}`">
                    <MainImg class="xl:w-10 w-8 inline me-2" :alt="'Link a Perfil'" :src="'../img/icons/profile.png'"/>
                    Mi Perfil
                </MainRouterLink>
            </li>
        </ul>
    </div>

</template>