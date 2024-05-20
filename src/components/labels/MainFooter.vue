<script>
    export default {
        name: 'MainFooter',
    }
</script>

<template>
    <footer class="flex flex-col justify-center items-center bg-black text-white">
        <div class="text-lg">
            <p>Copyright &copy; Naio200000 - 2024</p>
        </div>
        <div>
            <ul class="flex gap-8 my-4 text-lg">
                <li><routerLink to="/iniciar" href="#">Iniciar Sesión</routerLink></li>
                <li><routerLink to="/registrarse" href="#">Registro</routerLink></li>
            </ul>
        </div>
    </footer>
</template>