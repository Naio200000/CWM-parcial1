<script>
    import { subscribeToComments } from '../../services/post';
    import MainP from '../labels/MainP.vue';
    import CommentSkeleton from './CommentSkeleton.vue';
    export default {
        name: 'CommentsList',
        components: { MainP, CommentSkeleton },
        props: ['postId'],
        data (){

            return {
                newComment: {
                    comment: '',
                },
                comments: [],
                commentSkeleton: false,
                unsubscribeToComment: () =>{},
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
            this.unsubscribeToComment = subscribeToComments(
                this.postId, 
                newComments => {
                    this.comments = newComments
                    this.commentSkeleton = true
                });
        },
        unmounted() {
            this.unsubscribeToComment();
        },
    }

</script>

<template>
    <template v-if="!commentSkeleton">
        <div v-for="i in 2" :key="i" class="py-2 px-4">
            <CommentSkeleton />
        </div>
    </template>
    <template v-else v-for="comment in this.comments" class="border-gray-200 border-b-2">
            <div class="py-2 px-4">
                <p class="font-bold">{{ comment.user_email }}</p>
                <span class="px-2 ps-4 text-sm capitalize">{{ `Publicado:  ${formatDate(comment.date)}` }}</span>
            </div>
            <div class="px-4 pb-4">
                <MainP>{{ comment.comment }}</MainP>
            </div>
    </template>
</template>
