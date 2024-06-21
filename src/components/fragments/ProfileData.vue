<script>
import { getUserProfilebyId } from '../../services/userProfile';
import MainH2 from '../labels/MainH2.vue';
import MainP from '../labels/MainP.vue';
import MainRouterLink from '../labels/MainRouterLink.vue';
import UserPosts from './UserPosts.vue';

export default {

    name: 'ProfileData.vue',
    components: { MainP, MainH2, UserPosts, MainRouterLink },
    data() {
        return {
           authUser: {
                id: null,
                email: null,
           },
           userData: {
                id: null,
                email: null,
                displayName: null,
                bio: null,
                photoURL: null,
           },
        }
    },
    async mounted() {

        this.userData = await getUserProfilebyId(this.$route.params.id );

    },
    unmounted() {

    },
}
</script>

<template>
    <section class="w-10/12 max-w-post mx-auto my-4 rounded-lg shadow-lg shadow-slate-400 bg-gray-100">
        <div>
            <div class="flex pt-2 px-2">
                <MainH2 class="w-11/12">{{ userData.displayName }}</MainH2>
                <MainRouterLink class="my-2" :to="`/perfil/editar`" href="#">Editar</MainRouterLink>
            </div>
            <div class="pt-2 px-2 mb-3">
                <MainP class="text-lg"><span class="font-bold"></span>{{userData.bio || 'Cuenta un poco sobre ti. ¿Qué juegos te gustan? ¿Cuáles fueron tus primeros pasos o qué juego estás jugando actualmente?' }}</MainP>
            </div>
            <div class="pt-2 px-2">
                <MainP class="text-lg"><span class="font-bold">Email: </span>{{userData.email }}</MainP>
            </div>
            <div class="px-2 py-4">
                <MainP class="text-lg"><span class="font-bold">Id: </span>{{ userData.id }}</MainP>
            </div>
        </div>
    </section>
    <section class="py-4">
        <UserPosts :userId="userData.id"/>
    </section>
</template>