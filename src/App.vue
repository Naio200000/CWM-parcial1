<script>
import Home from './views/Home.vue';
import MainNav from './components/labels/MainNav.vue'
export default {
    name: 'App',
    components: {Home, MainNav},
}
</script>

<template>
    <div class="h-full grid grid-rows-layout">
        <MainNav />
        <main>
            <routerView />
        </main>
        <footer class="flex justify-center items-center bg-black text-gray-light">
            <p>Copyright &copy; Naio200000 - 2024</p>
        </footer>
    </div>
</template>