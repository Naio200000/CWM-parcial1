<script>
import MainNav from '../components/fragments/MainNav.vue';
import MenuList from '../components/fragments/MenuList.vue';
import PostsList from '../components/fragments/PostsList.vue';
import ProfileData from '../components/fragments/ProfileData.vue';
import MainH1 from '../components/labels/MainH1.vue';
import MainP from '../components/labels/MainP.vue';
    export default {
        name: 'Home',
        components: { MainH1, MainP, MainNav, MenuList, PostsList, ProfileData },
    }
</script>

<template>
    <section class="flex">
        <aside class="w-1/4 hidden lg:block">
            <MenuList />
        </aside>
        <section class="w-1/2">
            <header class="mt-8">
                <MainH1>Mi perfil</MainH1>
            </header>
            <article>
                <ProfileData />
            </article>
        </section>
    </section>
</template>