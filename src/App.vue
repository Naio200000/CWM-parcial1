<script>
import Home from './views/Home.vue';
import LogTitle from './components/fragments/LogTitle.vue';
export default {
    name: 'App',
    components: {Home, LogTitle},
}
</script>

<template>
    <div class="h-full grid grid-rows-log container mx-auto bg-gray-300">
        <div class="flex flex-col mlg:flex-row lg:items-center items-center justify-center">
            <header class="w-1/2">
                <LogTitle />
            </header>
            <main class="w-1/2">
                <routerView />
            </main>
        </div>
        <footer class="flex justify-center items-center bg-black text-white">
            <p>Copyright &copy; Naio200000 - 2024</p>
        </footer>
    </div>
</template>