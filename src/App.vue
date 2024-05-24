<script>
import Home from './views/Home.vue';
import LogTitle from './components/fragments/LogTitle.vue';
import MainFooter from './components/fragments/MainFooter.vue';
import MainNav from './components/fragments/MainNav.vue';
import MenuList from './components/fragments/MenuList.vue';
export default {
    name: 'App',
    components: {Home, LogTitle, MainFooter, MainNav, MenuList},

    methods: {
        showNav(){
            if (this.$route.path == '/' || this.$route.path == '/registrarse') {
                return false;
            }
            return true;
        },
    },
}
</script>

<template>
    <div class="h-full grid grid-rows-layout mx-auto">
        <div class="bg-gray-300">
            <MainNav v-if="showNav()" />
        </div>
        <main class="pb-8 bg-gray-300 flex">
            <aside v-if="showNav()" class="w-1/4 hidden lg:block">
                <MenuList />
            </aside>
            <section class="w-1/2 flex-grow">
                <routerView />
            </section>
            <article v-if="showNav()" class="w-1/4 hidden lg:block">
            </article>
        </main>
        <MainFooter />
    </div>
</template>