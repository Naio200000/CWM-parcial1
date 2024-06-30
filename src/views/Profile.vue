<script setup>
import ProfileData from '../components/fragments/profile/ProfileData.vue';
import MainH1 from '../components/labels/MainH1.vue';
import { getUserProfilebyId } from '../services/userProfile';
import { useRoute } from 'vue-router';
import { onMounted, ref } from 'vue';

const route = useRoute();
const { user } = userUserProfile(route.params.id)

function userUserProfile(id) {

    const user = ref({
        id: null,
        email: null,
        displayName: null,
        bio: null,
        photoURL: null,
    })

    onMounted(async () => {
        user.value = await getUserProfilebyId(id);
    })

    return {
        user,
    }
}
</script>
<template>
    <section class="w-full">
        <header class="mt-8">
            <MainH1>Mi perfil</MainH1>
        </header>
        <article>
            <ProfileData :userData="user"/>
        </article>
    </section>
</template>