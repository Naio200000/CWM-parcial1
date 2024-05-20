<script>
    import MainH1 from '../labels/MainH1.vue';
    import MainP from '../labels/MainP.vue';
    export default {
        name: 'LogTitle',
        components: {MainH1, MainP},
    }
</script>

<template>
    <div class="my-8 text-center lg:text-left">
        <MainH1 class="text-5xl lg:text-left">Gaming Room</MainH1>
        <MainP class="text-xl">La primera Red Social para Gamers.</MainP>
        <MainP class="text-xl">Comunicate, Comparte y Relacionate con Gamers de todos el mundo de una forma facil y amigable</MainP>
    </div>
</template>

