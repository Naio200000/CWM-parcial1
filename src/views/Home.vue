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
            <MainH1>Gaming Room</MainH1>
        </div>
        <div class="text-center text-lg">
            <MainP>Bienvenido a la Primera Red <strong>Social para Gamers</strong></MainP>
        </div>
    </header>
</template>