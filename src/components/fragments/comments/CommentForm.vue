<script>
import PostingLoader from '../skeletons/PostingLoader.vue';
import MainH2 from '../../labels/MainH2.vue';
import MainLabel from '../../labels/MainLabel.vue';
import { subscribeToAuth } from '../../../services/auth';
import { saveComment } from '../../../services/post';
import MainP from '../../labels/MainP.vue';
export default {
    name: 'CommentForm',
    components: { MainH2, PostingLoader, MainLabel, MainP },
    props: ['postId'],
    data() {

        return {
            authUser: {
                id: null,
                email: null,
            },
            newComment: {
                comment: '',
            },
            postinSkeleton: false,
            feedbackMsg: '',
            unsubscribeToAUth: () => {},
        };
    },
    methods: {

        submitComment() {

            this.postinSkeleton = true;
            this.feedbackMsg = ''; 
            saveComment({
                user_Id: this.authUser.id,
                user_email: this.authUser.email,
                comment: this.newComment.comment,
            },this.postId).then(() =>{
                this.postinSkeleton = false
                this.newComment.comment = '';
            }).catch((error) => {
                this.postinSkeleton = false;
                this.feedbackMsg = error.message;
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
    <section class="bg-gray-100 rounded-b-lg">
        <form
            class="flex"
            action="#"
            @submit.prevent="submitComment">
            <div class="w-1/4">
                <MainLabel for="usuario">Usuario :</MainLabel>
                <input
                    class="px-4 py-2 text-xl font-bold rounded-lg"
                    type="text" 
                    id="usuario"
                    disabled
                    v-model="authUser.displayName">
            </div>
            <div class="mx-4 flex-grow">
                <MainLabel for="post">comentario</MainLabel>
                <input 
                    class="w-full p-2"
                    name="post" 
                    id="post"
                    placeholder="Escribe un comentario"
                    :disabled="postinSkeleton"
                    v-model="newComment.comment">
            </div>
            <div class="w-1/5">
                <button type="submit" 
                    class=" px-2 py-1 rounded-lg text-xl text-end text-white bg-green-600 hover:bg-green-500 active:bg-green-700 transition-all">
                    <template v-if="postinSkeleton">
                        <PostingLoader />
                    </template>
                    <template v-else>
                        Comentar
                    </template>
                </button>
            </div>
        </form>
        <div class="mx-4">
            <MainP class="text-center pb-1 text-red-500 font-bold">{{feedbackMsg}}</MainP>
        </div>
    </section>
</template>