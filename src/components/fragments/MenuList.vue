<script>
import { subscribeToAuth } from '../../services/auth';
import MainImg from '../labels/MainImg.vue';
import MainRouterLink from '../labels/MainRouterLink.vue';
    export default {
        name: 'MenuList',
        components: {MainRouterLink, MainImg},
        data() {
            return {
                authUser: {
                    id: null,
                    email: null,
                },
                unsubscribeToAUth: () => {},
            }
        },
        mounted() {
            this.unsubscribeToAUth = subscribeToAuth(userData => this.authUser = userData)
        },
        unmounted() {
            this.unsubscribeToAUth();
        },
    }
    
</script>

<template>

    <div class="h-ful px-8 m-8 rounded-lg shadow-lg shadow-slate-400 bg-gray-100">
        <ul class="py-8">
            <li v-if="authUser.id == null" class="py-4 ps-2 ms-6 xl:text-xl font-bold">    
                <MainRouterLink class="font-bold text-2xl" :to="'/'">Iniciar Sesion</MainRouterLink>
            </li>
            <li v-else class="py-4 ps-2 xl:text-xl font-bold">
                <MainImg class="xl:w-10 w-8 inline me-2" :alt="''" :src="''"/>
                <MainRouterLink class="align-middle" :to="'/home'">{{ authUser.email }}</MainRouterLink>
            </li>

                    
            <li class="py-4 ps-2 xl:text-xl  font-bold">
                <MainRouterLink class="align-middle" :to="'/gamers'">
                    <MainImg class="xl:w-10 w-8 inline me-2" :alt="'Link a Gamers'" :src="'../img/icons/gamers.png'"/>
                    Gamers
                </MainRouterLink>
            </li>
            <li class="py-4 ps-2 xl:text-xl font-bold">
                <MainRouterLink class="align-middle" :to="'/posts'">
                    <MainImg class="xl:w-10 w-8 inline me-2" :alt="'Link a Posts'" :src="'../img/icons/posts.png'"/>
                    Mis Posts
                </MainRouterLink>
            </li>
            <li class="py-4 ps-2 xl:text-xl font-bold">
                <MainRouterLink class="align-middle" :to="'/perfil'">
                    <MainImg class="xl:w-10 w-8 inline me-2" :alt="'Link a Perfil'" :src="'../img/icons/profile.png'"/>
                    Mi Perfil
                </MainRouterLink>
            </li>
        </ul>
    </div>

</template>