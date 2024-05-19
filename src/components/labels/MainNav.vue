<script>
    import Logo from '../fragments/Logo.vue';
    export default {
        name: 'MainNav',
        components: {Logo}
    }
</script>

<template>
        <nav class="flex justify-between text-black bg-gray-light p-4">
            <Logo />
            <ul class="flex items-center gap-4">
                <li><routerLink to="/" href="#">Inicio</routerLink></li>
                <li><routerLink to="/posts" href="#">Posts</routerLink></li>
                <li><routerLink to="/iniciar" href="#">Iniciar Sesión</routerLink></li>
                <li><routerLink to="/registrarse" href="#">Registro</routerLink></li>
            </ul>
        </nav>
</template>