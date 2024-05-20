<script>
import Home from './views/Home.vue';
import LogTitle from './components/fragments/LogTitle.vue';
export default {
    name: 'App',
    components: {Home, LogTitle},
}
</script>

<template>
    <div class="h-full grid grid-rows-log mx-auto bg-gray-300">
        <div class="flex flex-col lg:flex-row lg:items-center lg:justify-evenly items-center justify-center">
            <header class="lg:w-1/2 w-10/12 max-w-log">
                <LogTitle />
            </header>
            <main class="lg:w-1/2 w-10/12 max-w-log">
                <routerView />
            </main>
        </div>
        <footer class="flex justify-center items-center bg-black text-white">
            <p>Copyright &copy; Naio200000 - 2024</p>
        </footer>
    </div>
</template>