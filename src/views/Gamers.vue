<script>
import GamersList from '../components/fragments/GamersList.vue';
import MainH1 from '../components/labels/MainH1.vue';
    export default {
        name: 'Home',
        components: { MainH1, GamersList },
    }
</script>

<template>
    <section class="w-full">
        <header class="mt-8">
            <MainH1>Gamers</MainH1>
        </header>
        <article>
            <GamersList />
        </article>
    </section>
</template>