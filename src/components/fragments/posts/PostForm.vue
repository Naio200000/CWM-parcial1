<script>
import { subscribeToAuth } from '../../../services/auth';
import { savePost } from '../../../services/post';
import MainH2 from '../../labels/MainH2.vue';
import MainLabel from '../../labels/MainLabel.vue';
import MainP from '../../labels/MainP.vue';
import PostingLoader from '../skeletons/PostingLoader.vue';
export default {
    name: 'PostForm',
    components: { MainH2, PostingLoader, MainLabel, MainP },
    data() {

        return {
            authUser: {
                id: null,
                email: null,
            },
            newPost: {
                post: '',
            },
            feedbackMsg: '',
            postinSkeleton: false,
            posts: [],
            unsubscribeToAUth: () => {},
        };
    },
    methods: {

        submitPost() {
            this.postinSkeleton = true;
            this.feedbackMsg = ''; 
            savePost({
                user_Id: this.authUser.id,
                user: this.authUser.email,
                post: this.newPost.post,
            }).then(() => {
                this.postinSkeleton = false;
                this.newPost.post = '';
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
                <div class="flex justify-between">
                    <div class="mx-4">
                        <MainP class="text-red-500 font-bold">{{feedbackMsg}}</MainP>
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