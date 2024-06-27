<script setup>
import ProfileData from '../components/fragments/ProfileData.vue';
import MainH1 from '../components/labels/MainH1.vue';
// import {useAuth} from '../composition/useAuth';

// const {user: authUser} = useAuth();
</script>
<template>
    <section class="w-full">
        <header class="mt-8">
            <MainH1>Mi perfil</MainH1>
        </header>
        <article>
            <ProfileData />
        </article>
    </section>
</template>