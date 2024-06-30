<script>
import MainImg from '../labels/MainImg.vue';
import MainP from '../labels/MainP.vue';
import { RouterLink } from 'vue-router';
    export default {
        name: 'ImageLogo',
        components: {MainImg, MainP},
    }
</script>

<template>
    <RouterLink class="flex items-center gap-4" to="/">
        <MainImg class="w-16" :src="'../../../img/icons/logo.png'" :alt="'Logo'"/>
        <MainP class="text-xl font-bold hidden lg:block">Gaming Room</MainP>
    </RouterLink>
</template>