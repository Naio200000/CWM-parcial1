<script>
import { subscribeToUsers } from '../../services/userProfile';
import MainP from '../labels/MainP.vue';
import MainRouterLink from '../labels/MainRouterLink.vue';
export default {
    name: 'GamersList',
    components: {MainP, MainRouterLink},
    data() {
        return {
            gamers: [],
            unsubscribeToUsers: () => {},
        }
    },
    mounted() {
        this.unsubscribeToUsers = subscribeToUsers(newGamers =>{
            this.gamers = newGamers;
        })
    },
    unmounted() {
        this.unsubscribeToUsers();
    }
}
</script>

<template>
    <template v-for="gamer in gamers" :key="gamer.id">
        <div class="w-10/12 flex items-end max-w-post mx-auto my-4 rounded-lg shadow-lg shadow-slate-400 bg-gray-100">
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

