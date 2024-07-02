<script setup>
import PostsList from '../components/fragments/posts/PostsList.vue';
import PostForm from '../components/fragments/posts/PostForm.vue';
import MainH1 from '../components/labels/MainH1.vue';
import { useAuth } from '../composition/useAuth';

const { user: authUser } = useAuth();

</script>
<template>
    <section class="w-full">
        <header class="mt-8">
            <div>
                <MainH1 class="sr-only">Gaming Room</MainH1>
            </div>
        </header>
        <article class="">
            <template v-if="authUser.id">
                <PostForm />
            </template>
            <PostsList/>
        </article>
    </section>
</template>