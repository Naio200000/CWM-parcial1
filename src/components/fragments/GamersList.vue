<script>
import { subscribeToUsers } from '../../services/userProfile';
import MainP from '../labels/MainP.vue';
export default {
    name: 'GamersList',
    components: {MainP},
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
    <template v-for="gamer in gamers" :key="index">
        <div class="w-10/12 max-w-post mx-auto my-4 rounded-lg shadow-lg shadow-slate-400 bg-gray-100">
            <div class="pt-2 px-2">
                <MainP class="text-base py-2"><span class="font-bold">Email: </span>{{ gamer.email }}</MainP>
                
            </div>
        </div>
    </template>
</template>

