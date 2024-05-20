<script>
    import { logout, subscribeToAuth } from '../../services/auth';
    import Logo from '../fragments/Logo.vue';
    export default {
        name: 'MainNav',
        components: {Logo},
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
                    path: '/iniciar',
                });
            }
        },
        mounted() { 
            subscribeToAuth(userData => this.authUser = userData);
        },
    }
</script>

<template>
        <nav class="flex justify-between text-black bg-gray-light p-4">
            <Logo />
            <ul class="flex items-center gap-4">
                <li><routerLink to="/" href="#">Inicio</routerLink></li>
                <template v-if="authUser.id === null">
                    <li><routerLink to="/iniciar" href="#">Iniciar Sesión</routerLink></li>
                    <li><routerLink to="/registrarse" href="#">Registro</routerLink></li>
                </template>
                <template v-else>
                    <li><routerLink to="/posts" href="#">Posts</routerLink></li>
                    <li><routerLink to="/perfil" href="#">Mi Perfil</routerLink></li>
                    <li>
                        <form action="" @submit.prevent="submitLogout">
                            <button type="submit">Cerrar Sesion</button>
                        </form>
                    </li>
                </template>
            </ul>
        </nav>
</template>