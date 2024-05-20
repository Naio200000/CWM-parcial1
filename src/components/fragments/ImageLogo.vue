<script>
import { RouterLink } from 'vue-router';
import MainImg from '../labels/MainImg.vue';
    export default {
        name: 'ImageLogo',
        components: {MainImg},
    }
</script>

<template>
    <RouterLink to="/">
        <MainImg :src="'../../../img/icons/logo.png'" :alt="'Logo'"/>
    </RouterLink>
</template>