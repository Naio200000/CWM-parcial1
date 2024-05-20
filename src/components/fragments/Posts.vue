<script>
    import { savePost, subscribeToPosting } from '../../services/post';
    import { subscribeToAuth } from '../../services/auth';
    
    import MainH2 from '../labels/MainH2.vue';
    export default {
        name: 'Posts',
        components: {MainH2},
        data (){
            return {
                authUser: {
                    id: null,
                    email: null,
                },
                newPost: {
                    user: '',
                    post: '',
                },                
                posts:[],
            }
        },
        methods: {
            submitPost() {
                savePost({
                    user: this.newPost.user,
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
        <section class="w-10/12 mx-auto rounded-lg shadow-lg shadow-slate-400 bg-gray-100">
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
        <section class="w-full border min-h-[500px] p-4">
            <h2 class="text-center text-2xl font-bold uppercase">Posts</h2>
            <div class="m-2 p-4">
                <ul>
                    <li v-for="post in posts">
                       <p><b>{{ post.user }}</b></p> 
                       <p>{{ post.post }}</p> 
                    </li>
                </ul>
            </div>
        </section>
    </div>
</template>