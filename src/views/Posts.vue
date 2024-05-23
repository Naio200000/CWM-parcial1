<script>
import MainNav from '../components/fragments/MainNav.vue';
import MenuList from '../components/fragments/MenuList.vue';
import PostsList from '../components/fragments/PostsList.vue';
import MainH1 from '../components/labels/MainH1.vue';
import MainP from '../components/labels/MainP.vue';
    export default {
        name: 'Posts',
        components: { MainH1, MainP, MainNav, MenuList, PostsList, },
        data() {
            return {
                userId: 'Ac5N104v5ofh7Gmonap21Qy3AdX2',
            }
        },
    }
</script>

<template>
    <section class="flex">
        <aside class="w-1/4 hidden lg:block">
            <MenuList />
        </aside>
        <section class="w-1/2">
            <header class="mt-8">
                <MainH1>Mis Posts</MainH1>
            </header>
            <article>
                <PostsList :userId="userId" />
            </article>
        </section>
    </section>
</template>