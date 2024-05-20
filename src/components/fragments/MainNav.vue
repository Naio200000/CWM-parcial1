<script>
    import { logout, subscribeToAuth } from '../../services/auth';
    import ImageLogo from './ImageLogo.vue';
    import MainImg from '../labels/MainImg.vue';
    import MainRouterLink from '../labels/MainRouterLink.vue';
    export default {
        name: 'MainNav',
        components: { ImageLogo, MainImg, MainRouterLink },
        data() {
            return {
                authUser: {
                    id: null,
                    email: null,
                },
                unsubscribeToAUth: () => {},
            };
        },
        methods: {
            async submitLogout() {
                await logout();
                this.$router.push({
                    path: '/',
                });
            }
        },
        mounted() { 
            this.unsubscribeToAUth = subscribeToAuth(userData => this.authUser = userData);
        },
        unmounted() {
            this.unsubscribeToAUth();
        }
    }
</script>

<template>
        <nav class="h-20 p-4 flex justify-between items-center bg-gray-100 text-black text-xl">
            <div class="">
                <ImageLogo />
            </div>
            <ul class="flex justify-evenly gap-4 lg:gap-16 items-center ">
                <li class="w-12">
                    <routerLink to="/home" href="#">
                        <MainImg :src="'./img/icons/home.png'"/>
                        <span class="sr-only">Inicio</span>
                    </routerLink>
                </li>
                <template v-if="authUser.id === null">
                    <li><MainRouterLink :to="'/'">Iniciar Sesion</MainRouterLink></li>
                    <li><MainRouterLink :to="'/registrarse'">Registro</MainRouterLink></li>
                </template>
                <template v-else>
                    <li class="w-12">
                        <MainRouterLink :to="'/gamers'">
                            <MainImg :src="'./img/icons/gamers.png'"/>
                            <span class="sr-only">Gamers</span>
                        </MainRouterLink>
                    </li>
                    <li class="w-12">
                        <MainRouterLink :to="'/registrarse'">
                            <MainImg :src="'./img/icons/posts.png'"/>
                            <span class="sr-only">Mis Posts</span>
                        </MainRouterLink>
                    </li>
                    <li class="w-12">
                        <MainRouterLink :to="'/perfil'">
                            <MainImg :src="'./img/icons/profile.png'"/>
                            <span class="sr-only">Mi Perfil</span>
                        </MainRouterLink>
                    </li>
                </template>
            </ul>
            <div v-if="authUser.id != null" class="">
                <form action="" @submit.prevent="submitLogout">
                    <button type="submit" class="w-12 ">
                        <MainImg class="block" :src="'./img/icons/close.png'" :alt="'megamemga'"/>
                        <span class="sr-only">Cerrar Sesion</span>
                    </button>
                </form>
            </div>
        </nav>
</template>