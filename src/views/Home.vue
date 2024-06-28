<script setup>
import MainH1 from '../components/labels/MainH1.vue';
import PostsList from '../components/fragments/PostsList.vue';
import PostForm from '../components/fragments/PostForm.vue';
</script>
<template>
    <section class="w-full">
        <header class="mt-8">
            <div>
                <MainH1 class="sr-only">Gaming Room</MainH1>
            </div>
        </header>
        <article class="">
            <PostForm />
            <PostsList/>
        </article>
    </section>
</template>