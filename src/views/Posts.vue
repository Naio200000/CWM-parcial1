<script setup>
import UserPosts from '../components/fragments/UserPosts.vue';
import MainH1 from '../components/labels/MainH1.vue';
import {useAuth} from '../composition/useAuth';

const {user: authUser} = useAuth();

</script>
<template>
    <section class="w-full">
        <header class="mt-8">
            <MainH1>Mis Posts</MainH1>
        </header>
        <article>
            <UserPosts :userId="authUser.id" />
        </article>
    </section>
</template>