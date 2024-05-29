<script>
import { subscribeToAuth } from '../../services/auth';
import { getUserProfilebyId } from '../../services/userProfile';
import MainH3 from '../labels/MainH3.vue';
import MainP from '../labels/MainP.vue';

export default {
    name: 'ProfileData.vue',
    components: { MainP, MainH3 },
    props: ['profileId'],
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
           },
           unsubscribeToAuth: () => {},
        }
    },
    async mounted() {
        this.unsubscribeToAuth = subscribeToAuth(userData => this.authUser = userData);
        this.userData = await getUserProfilebyId(this.profileId);

    },
    unmounted() {
        this.unsubscribeToAuth();
    },
}
</script>

<template>
    <div class="w-10/12 max-w-post mx-auto my-4 rounded-lg shadow-lg shadow-slate-400 bg-gray-100">
        <div class="pt-2 px-2">
            <MainP class="text-base pb-0"><span class="font-bold">Email: </span>{{authUser.email}}</MainP>
        </div>
        <div class="px-2 py-4">
            <MainP><span class="font-bold">Id: </span>{{ authUser.id }}</MainP>
        </div>
    </div>
</template>