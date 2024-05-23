<script>
import Home from './views/Home.vue';
import LogTitle from './components/fragments/LogTitle.vue';
import MainFooter from './components/fragments/MainFooter.vue';
import MainNav from './components/fragments/MainNav.vue';
export default {
    name: 'App',
    components: {Home, LogTitle, MainFooter, MainNav},
    methods: {
        showNav(){
            if (this.$route.path == '/' || this.$route.path == '/registrarse') {
                return false;
            }
            return true;
        }
    }
}
</script>

<template>
    <div class="h-full grid grid-rows-layout mx-auto">
        <div class="bg-gray-300">
            <MainNav v-if="showNav()" />
        </div>
        <main class="pb-8 bg-gray-300">
            <routerView />
        </main>
        <MainFooter />
    </div>
</template>