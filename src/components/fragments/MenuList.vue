<script>
import MainImg from '../labels/MainImg.vue';
import MainRouterLink from '../labels/MainRouterLink.vue';

    export default {
        name: 'MenuList',
        components: {MainRouterLink, MainImg},
    }
</script>

<template>

    <div class="h-full px-8 m-8 rounded-lg shadow-lg shadow-slate-400 bg-gray-100">
        <ul class="py-8">
            <li class="py-4 ps-2 text-xl font-bold">
                <MainImg class="w-10 inline me-2" :alt="'megameg'" :src="'../img/icons/home.png'"/>
                <MainRouterLink class="align-middle" :to="'/home'">Nombre de usuario</MainRouterLink>
            </li>
            <li class="py-4 ps-2 text-xl font-bold">
                <MainImg class="w-10 inline me-2" :alt="'megameg'" :src="'../img/icons/home.png'"/>
                <MainRouterLink class="align-middle" :to="'/home'">Usuario</MainRouterLink>
            </li>
            <li class="py-4 ps-2 text-xl font-bold">
                <MainImg class="w-10 inline me-2" :alt="'megameg'" :src="'../img/icons/home.png'"/>
                <MainRouterLink class="align-middle" :to="'/home'">Usuario</MainRouterLink>
            </li>
            <li class="py-4 ps-2 text-xl font-bold">
                <MainImg class="w-10 inline me-2" :alt="'megameg'" :src="'../img/icons/home.png'"/>
                <MainRouterLink class="align-middle" :to="'/home'">Usuario</MainRouterLink>
            </li>
        </ul>
    </div>

</template>