<script>
import Home from './views/Home.vue';
import LogTitle from './components/fragments/LogTitle.vue';
import MainFooter from './components/labels/MainFooter.vue';
export default {
    name: 'App',
    components: {Home, LogTitle, MainFooter},
}
</script>

<template>
    <div class="h-full grid grid-rows-layout mx-auto">
        <main class="pb-8 bg-gray-300">
            <routerView />
        </main>
        <MainFooter />
    </div>
</template>