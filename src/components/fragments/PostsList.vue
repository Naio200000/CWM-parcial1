<script>
    import { subscribeToPosting } from '../../services/post';
    
    import MainH2 from '../labels/MainH2.vue';
    import MainH3 from '../labels/MainH3.vue';
    import MainP from '../labels/MainP.vue';
    export default {
        name: 'Posts',
        components: {MainH2, MainH3, MainP},
        data (){
            return {
                newPost: {
                    post: '',
                },                
                posts:[],
                unsucribeToPosting: () =>{},
            }
        },
        mounted() {
            this.unsucribeToPosting = subscribeToPosting(newPosts => this.posts = newPosts);
        },
        unmounted() {
            this.unsucribeToPosting();
        },
    }

</script>
<template>
    <div class="">
        <section >
            <div>
                <MainH2 class="sr-only">Lista de Posts</MainH2>
            </div>
            <template v-for="post in posts">
                <div class="w-10/12 max-w-post mx-auto my-4 rounded-lg shadow-lg shadow-slate-400 bg-gray-100">
                    <div>
                        <div class="pt-2 px-2">
                            <MainH3 class="text-base pb-0">{{post.user}}</MainH3>
                            <span class="px-2 text-sm ">{{ post.date }}</span>
                        </div>
                        <div class="px-2 py-4">
                            <MainP>{{ post.post }}</MainP>
                        </div>
                        <div class="flex justify-evenly border-gray-200 border-t-2">
                            <MainP class="py-2 font-bold text-lg text-gray-500">Like</MainP>
                            <MainP class="py-2 font-bold text-lg text-gray-500">Comentario</MainP>
                        </div>
                    </div>
                </div>
            </template>
        </section>
    </div>
</template>