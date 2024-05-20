<script>
import MainH1 from '../components/labels/MainH1.vue';
import MainP from '../components/labels/MainP.vue';
    export default {
        name: 'Home',
        components: {MainH1, MainP},
    }
</script>

<template>
    <header class="container mx-auto mt-8">
        <div>
            <MainH1>Mi perfil</MainH1>
        </div>
    </header>
</template>