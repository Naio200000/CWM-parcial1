<script>
    import { logout, subscribeToAuth } from '../../services/auth';
    import ImageLogo from '../fragments/ImageLogo.vue';
    import MainImg from './MainImg.vue';
    export default {
        name: 'MainNav',
        components: { ImageLogo, MainImg },
        data() {
            return {
                authUser: {
                    id: null,
                    email: null,
                },
            };
        },
        methods: {
            submitLogout() {
                logout();
                this.$router.push({
                    path: '/',
                });
            }
        },
        mounted() { 
            subscribeToAuth(userData => this.authUser = userData);
        },
    }
</script>

<template>
        <nav class="h-20 p-4 flex justify-between items-center bg-gray-100 text-black text-xl">
            <div class="w-16">
                <ImageLogo />
            </div>
            <ul class="flex justify-evenly gap-4 lg:gap-16 items-center ">
                <li><routerLink to="/home" href="#">Inicio</routerLink></li>
                <template v-if="authUser.id === null">
                    <li><routerLink to="/" href="#">Iniciar Sesión</routerLink></li>
                    <li><routerLink to="/registrarse" href="#">Registro</routerLink></li>
                </template>
                <template v-else>
                    <!-- <li><routerLink to="/posts" href="#">Posts</routerLink></li> -->
                    <li><routerLink to="/perfil" href="#">Mi Perfil</routerLink></li>
                    <li>
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