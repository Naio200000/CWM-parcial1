<script>
    import { subscribeToComments2 } from '../../services/post';
    import MainP from '../labels/MainP.vue';
    export default {
        name: 'CommentsList',
        components: { MainP },
        props: ['postId'],
        data (){

            return {
                newComment: {
                    comment: '',
                },
                comments: [],
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
            this.unsubscribeToComment = subscribeToComments2(
                this.postId, 
                newComments => {this.comments = newComments});
        },
        unmounted() {
            this.unsubscribeToComment();
        },
    }

</script>

<template>

    <div>
        <div>
            <div>
                <p>megameg</p>
            </div>
            <div>
                <p>megamegamegameg</p>
            </div>
        </div>
    </div>
        <!-- <div v-for="comment in post.comments" >
            <div class="py-2 px-4">
                <p class="font-bold">{{ comment.user_email }}</p>
            </div>
            <div class="px-4 pb-4">
                <MainP>{{ comment.comment }}</MainP>
            </div>
        </div> -->
</template>
