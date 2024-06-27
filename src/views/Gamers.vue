<script setup>
import GamersList from '../components/fragments/GamersList.vue';
import MainH1 from '../components/labels/MainH1.vue';
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