<script setup>
import GamersListSkeleton from './skeletons/GamersListSkeleton.vue';
import MainP from '../labels/MainP.vue';
import MainRouterLink from '../labels/MainRouterLink.vue';
import { subscribeToUsers } from '../../services/userProfile';
import { onMounted, onUnmounted, ref } from 'vue';
import { useAuth } from '../../composition/useAuth';

const {user: authUser} = useAuth();

const { gamers } = useGamerList();

let showGamersList = ref(false);

function useGamerList() {
    
    const gamers = ref([]);
    let unsubscribeToUsers = () =>{};

    onMounted(()=>{
        unsubscribeToUsers = subscribeToUsers(newGamers => {
            gamers.value.push(...newGamers);
            showGamersList.value = true;
        })
    })
    onUnmounted(()=>{
        unsubscribeToUsers();
    })
    return {
        gamers,
    }
}
</script>
<template>
    <template v-if="!showGamersList" class="w-10/12 flex items-end max-w-post mx-auto my-4 rounded-lg shadow-lg shadow-slate-400 bg-gray-100">
        <div v-for="i in 4" :key="i" class="w-10/12 mx-auto my-4 max-w-post rounded-lg shadow-lg shadow-slate-400 bg-gray-100">
            <GamersListSkeleton />
        </div>
    </template>
    <template v-else>
        <template v-for="gamer in gamers" :key="gamer.id">
            <div v-if="gamer.id != authUser.id" class="w-10/12 flex items-end max-w-post mx-auto my-4 rounded-lg shadow-lg shadow-slate-400 bg-gray-100">
                <div class="w-10/12 pt-2 px-2">
                    <MainP class="text-base py-2"><span class="font-bold">Nombre de Usuario: </span>{{ gamer.displayName }}</MainP>
                    <MainP class="text-base py-2"><span class="font-bold">Email: </span>{{ gamer.email }}</MainP>
                </div>
                <div class="py-2">
                    <MainRouterLink :to="`/gamers/${gamer.id}`" href="#">Ver Perfil</MainRouterLink>
                </div>
            </div>
        </template>
    </template>
</template>

