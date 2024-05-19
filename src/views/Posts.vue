<script>


    const defaultpost = [
        {
            user: 'Naio',
            post: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, perferendis? Nam vitae earum laboriosam magnam aspernatur ipsam placeat doloribus nesciunt.'
        },
        {
            user: 'Megameg',
            post: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, perferendis? Nam vitae earum laboriosam magnam aspernatur ipsam placeat doloribus nesciunt.'
        },
        {
            user: 'Pexdromeg',
            post: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, perferendis? Nam vitae earum laboriosam magnam aspernatur ipsam placeat doloribus nesciunt.'
        },
    ];


    import MainH1 from '../components/labels/MainH1.vue';
import { savePost } from '../services/post';
    export default {
        name: 'Register',
        components: {MainH1},
        data (){
            return {
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
            this.posts = defaultpost;
        },
    }

</script>

<template>
    <section class="container mx-auto mt-8">

        <div>
            <MainH1>Posts</MainH1>
        </div>
        <div>
            <h2 class="text-center text-2xl mb-6">Ingresa un Post</h2>
            <form 
                action="#"
                @submit.prevent="submitPost">
                <div class="mb-4">
                    <label 
                        class="text-lg font-bold block"
                        for="usuario"
                        >Usuario:</label>
                    <input
                        class="border-black border-2 rounded p-2 m-1"
                        type="text" 
                        id="usuario"
                        v-model="newPost.user">
                </div>
                <div class="mb-4">
                    <label 
                        class="text-lg font-bold block"
                        for="post"
                        >Publicacion</label>
                    <textarea 
                        class="border-black border-2 rounded p-2 m-1"
                        name="post" 
                        id="post"
                        v-model="newPost.post"></textarea>
                </div>
                <button 
                    type="submit"
                    class="mb-4 py-2 px-6 bg-blue-light text-gray-light font-bold rounded hover:bg-blue-dark transition-all"
                    >Postear</button>
            </form>
        </div>
        <div class="w-full border min-h-[500px] p-4">
            <h2 class="text-center text-2xl font-bold uppercase">Posts</h2>
            <div class="m-2 p-4">
                <ul>
                    <li v-for="post in posts">
                       <p><b>{{ post.user }}</b></p> 
                       <p>{{ post.post }}</p> 
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>