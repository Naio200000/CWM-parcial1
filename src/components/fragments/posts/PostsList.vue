<script>
    import PostSkeleton from '../skeletons/PostSkeleton.vue';
    import CommentForm from '../comments/CommentForm.vue';
    import CommentsList from '../comments/CommentsList.vue';
    import MainH2 from '../../labels/MainH2.vue';
    import MainP from '../../labels/MainP.vue';
    import MainImg from '../../labels/MainImg.vue';
    import { subscribeToPosting } from '../../../services/post';
    export default {
        name: 'Posts',
        components: { MainH2, MainP, PostSkeleton, CommentForm, CommentsList, MainImg },
        data (){

            return {
                newPost: {
                    post: '',
                },                
                posts:[],
                postSkeleton: false,
                unsubscribeToPosting: () =>{},
            }
        },
        methods: {

            /**
             * Conviere la fecha que recibimos del servidor en un formateo de "Dia DD/MM/AAAA"
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
            <div :class="['w-10/12', 'max-w-post', 'mx-auto mt-4', 'rounded-lg', 'shadow-lg', 'shadow-slate-400', 'bg-gray-100', 'rounded-b-none'] ">
                <div class="pt-2 px-2">
                    <MainP class="text-2xl font-bold pb-0">{{post.user}}</MainP>
                    <span v-if="post.date != null" class="px-2 ps-4 text-sm capitalize">{{ `Publicado:  ${formatDate(post.date)}` }}</span>
                    <span v-else class="px-2 ps-4 text-sm capitalize">Publicando... </span>
                </div>
                <div class="px-2 py-4">
                    <MainImg :src="post.photoURL" />
                    <img class="w-full" src="../../../../img/eldenringcover.jpg" alt="">
                </div>
                <div class="px-2 py-4">
                    <MainP>{{ post.post }}</MainP>
                </div>
                <div class="flex justify-evenly border-gray-200 border-t-2">
                    <MainP class="py-2 font-bold text-lg text-gray-500">Like</MainP>
                    <MainP @click="post.showComments = !post.showComments" class="py-2 font-bold text-lg text-gray-500">Comentario</MainP>
                </div>
            </div>
            <template v-if="post.showComments">
                <div :class="['w-10/12', 'mx-auto', 'bg-white']">
                    <CommentsList :postId="post.id" />
                </div>
            </template>
            <div :class="['w-10/12', 'max-w-post', 'mx-auto', 'bg-white', 'rounded-b-lg']">
                <CommentForm :postId="post.id" />
            </div>
        </template>
    </section>
</template>