<script>
import { updateUserData } from '../../services/auth';
import MainH2 from '../labels/MainH2.vue';
import MainLabel from '../labels/MainLabel.vue';
import PostingLoader from './PostingLoader.vue';
export default {
    name: 'PostForm',
    components: { MainH2 , PostingLoader, MainLabel},
    data() {

        return {
            profileData: {
                displayName: '',
            },
            postinSkeleton: false,
        };
    },
    methods: {
       async editProfile() {
            console.log('meg')
            await updateUserData({
                displayName: this.profileData.displayName,
            })
        },
    },
    mounted() {

    },
    unmounted() {

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
                <div class="my-2 py-4">
                    <MainLabel class="not-sr-only inline px-4 py-2 text-xl font-bold" for="displayName">Nombre de Usuario:</MainLabel>
                    <input 
                    class=" p-2 border-gray-200 border-2 rounded-lg focus:border-gray-200 focus:outline-none" 
                    type="text"
                    name="displayName" 
                    id="displayName"
                    v-model="profileData.displayName">
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