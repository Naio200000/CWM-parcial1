<script setup>
import PostEditForm from '../components/fragments/posts/PostEditForm.vue';
import MainH1 from '../components/labels/MainH1.vue';
</script>
<template>
    <section class="w-full">
        <header class="mt-8">
            <MainH1>Editar Post</MainH1>
        </header>
        <article>
            <PostEditForm />
        </article>
    </section>
</template>