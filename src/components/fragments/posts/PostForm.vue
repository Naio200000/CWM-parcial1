<script>
import { subscribeToAuth } from '../../../services/auth';
import { savePost } from '../../../services/post';
import MainH2 from '../../labels/MainH2.vue';
import MainImg from '../../labels/MainImg.vue';
import MainLabel from '../../labels/MainLabel.vue';
import MainP from '../../labels/MainP.vue';
import PostingLoader from '../skeletons/PostingLoader.vue';
export default {
    name: 'PostForm',
    components: { MainH2, PostingLoader, MainLabel, MainP, MainImg },
    data() {

        return {
            authUser: {
                id: null,
                email: null,
            },
            newPost: {
                photoURL: null,
                post: '',
            },
            uploadedPhoto: null, 
            feedbackMsg: '',
            postinSkeleton: false,
            unsubscribeToAUth: () => {},
        };
    },
    methods: {
        selectPhoto(e) {
            this.uploadedPhoto = e.target.files[0];

            const reader = new FileReader();
            reader.addEventListener('load', () => {
                this.newPost.photoURL = reader.result
            });
            reader.readAsDataURL(this.uploadedPhoto);
        },
        submitPost() {
            this.postinSkeleton = true;
            this.feedbackMsg = ''; 
            savePost({
                user_Id: this.authUser.id,
                user: this.authUser.email,
                post: this.newPost.post
            }, this.uploadedPhoto).then(() => {
                this.postinSkeleton = false;
                this.newPost.post = '';
                this.newPost.photoURL = '';
            }).catch((error) => {
                this.postinSkeleton = false;
                this.feedbackMsg = error.message;
                // console.error("Error savingPost:", error);
            });
        },
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
    <template v-if="authUser.id">   
        <section>
            <section class="w-10/12 max-w-post mx-auto mb-8 rounded-lg shadow-lg shadow-slate-400 bg-gray-100">
                <MainH2 class="sr-only">Ingresar un Post</MainH2>
                <form 
                    action="#"
                    @submit.prevent="submitPost">
                    <div class="">
                        <MainLabel for="usuario">Usuario :</MainLabel>
                        <input
                            class="px-4 py-2 text-xl font-bold rounded-lg"
                            type="text" 
                            id="usuario"
                            disabled
                            v-model="authUser.displayName">
                    </div>
                    <div class="w-6/12 px-6 py-1 m1-1 me-4 mb-2">
                        <MainP class="sr-only">Foto a subir</MainP>
                        <MainImg class="w-full" :src="newPost.photoURL" />
                    </div>
                    <div class="mx-4">
                        <MainLabel for="post">Publicacion</MainLabel>
                        <textarea 
                            class="w-full p-2 border-gray-200 border-2 rounded-lg focus:border-gray-200 focus:outline-none"
                            name="post" 
                            id="post"
                            placeholder="Opina sobre que estas jugando"
                            :disabled="postinSkeleton"
                            v-model="newPost.post"></textarea>
                    </div>
                    <div class="mx-4">
                        <MainP class="text-red-500 font-bold">{{feedbackMsg}}</MainP>
                    </div>
                    <div class="flex justify-between items-end">
                        <div class="my-1 px-4">
                            <MainLabel class="w-full not-sr-only inline px-4 py-2" for="photoURL">Agregar una imagen (opcional)</MainLabel>
                            <input 
                                type="file" 
                                class="w-full p-2 bg-white border-gray-200 border-2 rounded-lg focus:border-gray-200 focus:outline-none" 
                                id="photoURL" 
                                name="photoURL"
                                @change="selectPhoto">
                        </div>
                        <div class="text-end mt-1">
                            <button type="submit" 
                                class=" px-6 py-1 m1-1 me-4 mb-2 rounded-lg text-xl text-end text-white bg-green-600 hover:bg-green-500 active:bg-green-700 transition-all">
                                <template v-if="postinSkeleton">
                                    <PostingLoader />
                                </template>
                                <template v-else>
                                    Postear
                                </template>
                            </button>
                        </div>
                    </div>
                </form>
            </section>
        </section>
    </template>
</template>