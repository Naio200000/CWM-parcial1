<script>
import MainH1 from '../components/labels/MainH1.vue';
import MainP from '../components/labels/MainP.vue';
import MainNav from '../components/fragments/MainNav.vue';
import PostsList from '../components/fragments/PostsList.vue';
import PostForm from '../components/fragments/PostForm.vue';
import MenuList from '../components/fragments/MenuList.vue';
    export default {
        name: 'Home',
        components: { MainH1, MainP, MainNav, PostsList, PostForm, MenuList },
    }
</script>

<template>
    <section class="flex">
        <aside class="w-1/4 hidden lg:block">
            <MenuList />
        </aside>
        <section class="w-1/2">
            <header class="mt-8">
                <div>
                    <MainH1 class="sr-only">Gaming Room</MainH1>
                </div>
            </header>
            <article class="overflow-y-scroll max-h-screen">
                <PostForm />
                <PostsList />
            </article>
        </section>
        <article class="w-1/4 hidden lg:block">

        </article>
    </section>
</template>