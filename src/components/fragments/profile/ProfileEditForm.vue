<script>
import PostingLoader from '../skeletons/PostingLoader.vue';
import MainH2 from '../../labels/MainH2.vue';
import MainLabel from '../../labels/MainLabel.vue';
import { subscribeToAuth, updateUserData } from '../../../services/auth';
export default {
    name: 'ProfileEditForm',
    components: { MainH2 , PostingLoader, MainLabel},
    data() {

        return {
            profileData: {
                displayName: '',
                playing: '',
                bio: '',
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
            try {
                await updateUserData({
                    displayName: this.profileData.displayName,
                    playing: this.profileData.playing,
                    bio: this.profileData.bio,
                })
            } catch (error) {
                console.error(error)
            }
        },
    },
    mounted() {
        this.unsubscribeToAUth = subscribeToAuth(userData => {
        this.authUser = userData;
        this.profileData.displayName = this.authUser.displayName        
        this.profileData.playing = this.authUser.playing        
        this.profileData.bio = this.authUser.bio        
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
                    <MainLabel class="w-full not-sr-only inline px-4 py-2 text-xl font-bold" for="displayName">Nombre de Usuario:</MainLabel>
                    <input 
                    class="w-full p-2 border-gray-200 border-2 rounded-lg focus:border-gray-200 focus:outline-none" 
                    type="text"
                    name="displayName" 
                    id="displayName"
                    v-model="profileData.displayName">
                </div>
                <div class="my-2 py-4 px-4 flex justify-between">
                    <MainLabel class="w-full not-sr-only inline px-4 py-2 text-xl font-bold" for="playing">Jugando:</MainLabel>
                    <input 
                    class="w-full p-2 border-gray-200 border-2 rounded-lg focus:border-gray-200 focus:outline-none" 
                    type="text"
                    name="playing" 
                    id="playing"
                    v-model="profileData.playing">
                </div>
                <div class="my-2 py-4 px-4 flex justify-between">
                    <MainLabel class="w-full not-sr-only inline px-4 py-2 text-xl font-bold" for="bio">Bio:</MainLabel>
                    <textarea 
                    class="w-full p-2 border-gray-200 border-2 rounded-lg focus:border-gray-200 focus:outline-none" 
                    type="text"
                    name="bio" 
                    id="bio"
                    v-model="profileData.bio"></textarea>
                </div>
                <div class="text-end mt-1">
                    <button type="submit" 
                        class=" px-6 py-1 m1-1 me-4 mb-2 rounded-lg text-xl text-end text-white bg-green-600 hover:bg-green-500 active:bg-green-700 transition-all">
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