<script>
import MainNav from '../components/fragments/MainNav.vue';
import MenuList from '../components/fragments/MenuList.vue';
import PostsList from '../components/fragments/PostsList.vue';
import MainH1 from '../components/labels/MainH1.vue';
import MainP from '../components/labels/MainP.vue';
    export default {
        name: 'Home',
        components: { MainH1, MainP, MainNav, MenuList, PostsList },
    }
</script>

<template>
    <section class="w-full">
        <header class="mt-8">
            <MainH1>Gamers</MainH1>
        </header>
        <article>
            
        </article>
    </section>
</template>