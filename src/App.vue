<script>
import Home from './views/Home.vue';
export default {
    name: 'App',
    components: {Home},
}
</script>

<template>
    <div class="h-full grid grid-rows-layout">
        <nav class="flex justify-between text-black bg-gray-light p-4">
            <p>Gaming Room</p>
            <ul class="flex gap-4">
                <li><routerLink to="/" href="#">Inicio</routerLink></li>
                <li><routerLink to="/iniciar" href="#">Iniciar Sesión</routerLink></li>
                <li><routerLink to="/registrarse" href="#">Registro</routerLink></li>
            </ul>
        </nav>
        <main>
            <routerView />
        </main>
        <footer class="flex justify-center items-center bg-black text-gray-light">
            <p>Copyright &copy; Naio200000 - 2024</p>
        </footer>
    </div>
</template>