<script setup>
import PostsList from '../components/fragments/posts/PostsList.vue';
import PostForm from '../components/fragments/posts/PostForm.vue';
import MainH1 from '../components/labels/MainH1.vue';
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