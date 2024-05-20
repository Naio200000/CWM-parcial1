<script>
import MainH1 from '../components/labels/MainH1.vue';
import MainP from '../components/labels/MainP.vue';
import MainNav from '../components/labels/MainNav.vue';
import PostsList from '../components/fragments/PostsList.vue';
import PostForm from '../components/fragments/PostForm.vue';
    export default {
        name: 'Home',
        components: { MainH1, MainP, MainNav, PostsList, PostForm },
    }
</script>

<template>
    <MainNav />
    <section>
        <aside>
            <nav>
                
            </nav>
        </aside>
        <section>
            <header class="container mx-auto mt-8">
                <div>
                    <MainH1 class="sr-only">Gaming Room</MainH1>
                </div>
            </header>
            <article>
                <PostForm />
                <PostsList />
            </article>
        </section>
    </section>
</template>