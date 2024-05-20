<script>
    import { savePost, subscribeToPosting } from '../../services/post';
    import { subscribeToAuth } from '../../services/auth';
    
    import MainH2 from '../labels/MainH2.vue';
    import MainH3 from '../labels/MainH3.vue';
    import MainP from '../labels/MainP.vue';
    export default {
        name: 'Posts',
        components: {MainH2, MainH3, MainP},
        data (){
            return {
                authUser: {
                    id: null,
                    email: null,
                },
                newPost: {
                    post: '',
                },                
                posts:[],
            }
        },
        methods: {
            submitPost() {
                savePost({
                    user: this.authUser.email,
                    post: this.newPost.post,
                });
                this.newPost.post = '';
            },
        },
        mounted() {
            subscribeToPosting(newPosts => this.posts = newPosts);
            subscribeToAuth(userData => this.authUser = userData);
        },
    }

</script>
<template>
    <div class="">
        <MainH2 class="sr-only">Ingresar un Post</MainH2>
        <section class="w-10/12 mx-auto mb-8 rounded-lg shadow-lg shadow-slate-400 bg-gray-100">
            <form 
                action="#"
                @submit.prevent="submitPost">
                <div class="">
                    <label 
                        class="block sr-only"
                        for="usuario"
                        >Usuario:</label>
                    <input
                        class="px-4 py-2 text-xl font-bold rounded-lg"
                        type="text" 
                        id="usuario"
                        disabled
                        v-model="authUser.email">
                </div>
                <div class="mx-4">
                    <label 
                        class="block sr-only"
                        for="post"
                        >Publicacion</label>
                    <textarea 
                        class="w-full p-2 border-gray-200 border-2 rounded-lg focus:border-gray-200 focus:outline-none"
                        name="post" 
                        id="post"
                        v-model="newPost.post"></textarea>
                </div>
                <div class="text-end">
                    <button type="submit" 
                        class=" px-6 py-1 m1-1 me-4 mb-2 rounded-lg text-xl text-end text-white bg-green-600 hover:bg-green-500 active:bg-green-700 transition-all">Postear
                    </button>
                </div>
            </form>
        </section>
        <section >
            <div>
                <MainH2 class="sr-only">Posts</MainH2>
            </div>
            <template v-for="post in posts">
                <div class="w-10/12 mx-auto my-4 rounded-lg shadow-lg shadow-slate-400 bg-gray-100">
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