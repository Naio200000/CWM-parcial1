<script>
    import { subscribeToPosting } from '../../services/post';
    
    import MainH2 from '../labels/MainH2.vue';
    import MainH3 from '../labels/MainH3.vue';
    import MainP from '../labels/MainP.vue';
    import PostSkeleton from './PostSkeleton.vue';
    import CommentForm from './CommentForm.vue';
    export default {
        name: 'Posts',
        components: {MainH2, MainH3, MainP, PostSkeleton, CommentForm},
        data (){
            return {
                newPost: {
                    post: '',
                },                
                posts:[],
                postSkeleton: false,
                unsubscribeToPosting: () =>{},
                unsubscribeToComent: () =>{},
            }
        },
        methods: {
            /**
             * Conviere la fecha que recibimos del servidor en un formateo de "Dia DD/MM/AAAA"
             * 
             * @param string Date dato que viene de firebase
             */
            formatDate(date) {

                return Intl.DateTimeFormat('es', {
                        weekday: "short",
                        year: 'numeric',
                        month: '2-digit', 
                        day: '2-digit',
                }).format(date).replace(',', '');
            },
            bringComments() {
                this.showComments = !this.showComments;
            }
        },
        mounted() {
            this.unsubscribeToPosting = subscribeToPosting(newPosts => {
                this.posts = newPosts;
                this.posts = this.posts.map(post => {
                    return {
                        ...post,
                        showComments: false
                    }
                })
                this.postSkeleton = true
            });
        },
        unmounted() {
            this.unsubscribeToPosting();
        },
    }

</script>
<template>
    <section class="">
        <div>
            <MainH2 class="sr-only">Lista de Posts</MainH2>
        </div>
        <template v-if="!postSkeleton">
            <div v-for="i in 2" :key="i" class="w-10/12 max-w-post mx-auto my-4 rounded-lg shadow-lg shadow-slate-400 bg-gray-100">
                <PostSkeleton />
            </div>
        </template>
        <template v-else v-for="post in posts" :key="post.id">
            <div :class="['w-10/12', 'max-w-post', 'mx-auto mt-4', 'rounded-lg', 'shadow-lg', 'shadow-slate-400', 'bg-gray-100', (post.comments ? 'rounded-b-none' : 'rounded-b-lg')] ">
                <div class="pt-2 px-2">
                    <MainH3 class="text-base pb-0">{{post.user}}</MainH3>
                    <span class="px-2 ps-4 text-sm capitalize">{{ `Publicado:  ${formatDate(post.date)}` }}</span>
                </div>
                <div class="px-2 py-4">
                    <MainP>{{ post.post }}</MainP>
                </div>
                <div class="flex justify-evenly border-gray-200 border-t-2">
                    <MainP class="py-2 font-bold text-lg text-gray-500">Like</MainP>
                    <MainP @click="post.showComments = !post.showComments" class="py-2 font-bold text-lg text-gray-500">Comentario</MainP>
                </div>
            </div>
            <template v-if="post.comments">
                <div :class="['w-10/12', 'mx-auto', 'bg-white', 'rounded-b-lg']">
                    <div v-for="comment in post.comments" >
                        <div class="py-2 px-4">
                            <p class="font-bold">{{ comment.user_email }}</p>
                        </div>
                        <div class="px-4 pb-4">
                            <MainP>{{ comment.comment }}</MainP>
                        </div>
                    </div>
                    <div v-if="post.showComments">
                        <CommentForm :postId="post.id" />
                    </div>
                </div>
            </template>
        </template>
    </section>
</template>