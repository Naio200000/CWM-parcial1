<script setup>
import UserPosts from '../components/fragments/posts/UserPosts.vue';
import MainH1 from '../components/labels/MainH1.vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const userId = route.params.id

</script>
<template>
    <section class="w-full">
        <header class="mt-8">
            <MainH1>Mis Posts</MainH1>
        </header>
        <article>
            <UserPosts :userId="userId" />
        </article>
    </section>
</template>