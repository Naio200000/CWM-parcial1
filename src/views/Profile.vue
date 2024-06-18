<script>
import MainNav from '../components/fragments/MainNav.vue';
import MenuList from '../components/fragments/MenuList.vue';
import PostsList from '../components/fragments/PostsList.vue';
import ProfileData from '../components/fragments/ProfileData.vue';
import MainH1 from '../components/labels/MainH1.vue';
import MainP from '../components/labels/MainP.vue';
import { subscribeToAuth } from '../services/auth';
    export default {
        name: 'Profile',
        components: { MainH1, MainP, MainNav, MenuList, PostsList, ProfileData },
        data() {
            
            return {
                authUser: {
                    id: null,
                    email: null,
                },
            };
        },
        mounted() {
            this.unsubscribeToAUth = subscribeToAuth(userData => this.authUser = userData);
        },
        unmounted() {
            this.unsubscribeToAUth();
        },
    }
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