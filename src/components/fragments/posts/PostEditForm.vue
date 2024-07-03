<script setup>
import PostingLoader from '../skeletons/PostingLoader.vue';
import PostEditSkeleton from '../skeletons/PostEditSkeleton.vue';
import MainH2 from '../../labels/MainH2.vue';
import MainImg from '../../labels/MainImg.vue';
import MainLabel from '../../labels/MainLabel.vue';
import MainP from '../../labels/MainP.vue';
import { updatePost, getPostById } from '../../../services/post';
import { useAuth } from '../../../composition/useAuth';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router'

const {user: authUser} = useAuth();

const route = useRoute();

const { post } = userGetPostById(route.params.id)

const postinSkeleton = ref(false);

const loadingSkeleton = ref(true);

const feedbackMsg = ref('');

let uploadedPhoto = ref(null);

function userGetPostById(id) {

    const post = ref({
        id: null,
        post: null,
        photoURL: null,
    })

    onMounted(async () => {
        post.value = await getPostById(id);
    })

    return {
        post,
    }
}

async function submitPost () { 
    postinSkeleton.value = true;
    feedbackMsg.value = '';
    try {
        await updatePost(post.value.id, { 
            post: post.value.post,
            photoURL: post.value.photoURL,
        });
    } catch (error) {
        feedbackMsg.value = 'Ocurrió un error al editar';
    }
    postinSkeleton.value = false;
}

function selectPhoto(e) {
    uploadedPhoto = e.target.files[0];

    const reader = new FileReader();
    reader.addEventListener('load', () => {
        post.value.photoURL = reader.result
    });
    reader.readAsDataURL(uploadedPhoto);
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
                <template v-if="post.photoURL">
                    <div class="w-6/12 px-6 py-1 m1-1 me-4 mb-2">
                        <MainP class="sr-only">Imagen</MainP>
                        <MainImg class="w-full" :src="post.photoURL" />
                    </div>
                </template>
                <div class="mx-4">
                    <MainLabel for="post">Publicacion</MainLabel>
                    <textarea 
                        class="w-full p-2 border-gray-200 border-2 rounded-lg focus:border-gray-200 focus:outline-none"
                        name="post" 
                        id="post"
                        placeholder="Opina sobre que estas jugando"
                        :disabled="postinSkeleton"
                        v-model="post.post"></textarea>
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
                                Editar
                            </template>
                        </button>
                    </div>
                </div>
            </form>
        </section>
    </section>
</template>