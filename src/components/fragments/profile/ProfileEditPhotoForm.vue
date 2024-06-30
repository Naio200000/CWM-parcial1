<script>
import PostingLoader from '../skeletons/PostingLoader.vue';
import MainH2 from '../../labels/MainH2.vue';
import MainLabel from '../../labels/MainLabel.vue';
import { subscribeToAuth, updateUserData } from '../../../services/auth';
import MainImg from '../../labels/MainImg.vue';
import MainP from '../../labels/MainP.vue';
export default {
    name: 'ProfileEditPhotoForm',
    components: { MainH2 , PostingLoader, MainLabel, MainImg},
    data() {

        return {
            profileData: {
                photoURL: '',
            },
            authUser: {
                id: null,
                email: null,
                displayName: null,
                playing: null,
                bio: null,
            },
            postinSkeleton: false,
            unsubscribeToAUth: () => {},
        };
    },
    methods: {
       async editProfile() {

        },
    },
    mounted() {
        this.unsubscribeToAUth = subscribeToAuth(userData => {
        this.authUser = userData;     
        });
    },
    unmounted() {

    this.unsubscribeToAUth();
    },
}
</script>
<template>
    <section>
        <section class="w-10/12 max-w-post mx-auto mb-8 rounded-lg shadow-lg shadow-slate-400 bg-gray-100">
            <MainH2 class="sr-only">Ingresar un Datos</MainH2>
            <form 
                action="#"
                @submit.prevent="editProfile">
                <div class="my-2 py-4 px-4 flex justify-between">
                    <MainLabel class="w-full not-sr-only inline px-4 py-2 text-xl font-bold" for="photoURL">Foto</MainLabel>
                <input 
                    type="file" 
                    class="w-full p-2 bg-white border-gray-200 border-2 rounded-lg focus:border-gray-200 focus:outline-none" 
                    id="photoURL" 
                    name="photoURL">
                </div>
                <div class="text-end mt-1 flex justify-between ">
                    <div class="w-6/12 px-6 py-1 m1-1 me-4 mb-2">
                        <MainP class="sr-only">Foto actual</MainP>
                        <MainImg class="" :src="'./../img/icons/profile.png'"/>
                    </div>
                    <button type="submit" 
                        class="flex-none max-h-9 px-6 py-1 m1-1 me-4 mb-2 rounded-lg text-xl text-end text-white bg-green-600 hover:bg-green-500 active:bg-green-700 transition-all">
                        <template v-if="postinSkeleton">
                            <PostingLoader />
                        </template>
                        <template v-else>
                            Editar
                        </template>
                    </button>
                </div>
            </form>
        </section>
    </section>
</template>