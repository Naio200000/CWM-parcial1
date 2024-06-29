<script setup>
import { ref } from 'vue';
import MainH2 from '../labels/MainH2.vue';
import MainP from '../labels/MainP.vue';
import MainRouterLink from '../labels/MainRouterLink.vue';
import UserPosts from './UserPosts.vue';
import { useAuth } from '../../composition/useAuth';
import ProfileSkeleton from './ProfileSkeleton.vue';

const {user: authUser} = useAuth();
defineProps({
    userData: {
        type: Object,
        require: true,
    },
});
const showPosts = ref(false);
</script>
<template>
    <section class="w-10/12 max-w-post mx-auto my-4 rounded-lg shadow-lg shadow-slate-400 bg-gray-100">
        <div v-if="!userData.id">
            <ProfileSkeleton />
        </div>
        <div v-else>
            <div>
                <div class="flex pt-2 px-2">
                    <MainH2 class="w-11/12">{{ userData.displayName }}</MainH2>
                    <template v-if="authUser.id == userData.id">
                        <MainRouterLink class="my-2 underline" :to="`/perfil/editar`" href="#">Editar</MainRouterLink>
                    </template>
                </div> 
                <div class="pt-2 px-2 mb-3">
                    <MainP class="text-lg"><span class="font-bold"></span>{{userData.bio || 'Cuenta un poco sobre ti. ¿Qué juegos te gustan? ¿Cuáles fueron tus primeros pasos o qué juego estás jugando actualmente?' }}</MainP>
                </div>
                <div class="pt-2 px-2">
                    <MainP class="text-lg"><span class="font-bold">Nombre de usuario: </span>{{userData.displayName }}</MainP>
                </div>
                <div class="pt-2 px-2">
                    <MainP class="text-lg"><span class="font-bold">Email: </span>{{userData.email }}</MainP>
                </div>
                <div class="px-2 py-4">
                    <MainP class="text-lg"><span class="font-bold">Id: </span>{{ userData.id }}</MainP>
                </div>
            </div>
            <div v-if="authUser.id != userData.id" @click="showPosts = !showPosts" class="flex justify-end px-4 items-center cursor-pointer">
                <MainP class="text-end p-2 me-2">Posts </MainP>
                <span class="">
                    <svg fill="#000000" height="20px" width="20px" viewBox="0 0 330 330" >
                        <path id="XMLID_225_" d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"/>
                    </svg>
                </span>
            </div>
        </div>
    </section>
    <section v-if="showPosts" class="py-4">
        <UserPosts :userId="userData.id"/>
    </section>
</template>