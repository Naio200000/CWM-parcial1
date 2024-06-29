<script>
import ProfileEditForm from '../components/fragments/ProfileEditForm.vue';
import MainH1 from '../components/labels/MainH1.vue';
    export default {
        name: 'Profile',
        components: { MainH1, ProfileEditForm },
        data() {
            
            return {
                profileData: {
                    displayName: '',
                },
            };
        },
        methods: {
            editProfile() {

            }
        }
    }
</script>

<template>
    <section class="w-full">
        <header class="mt-8">
            <MainH1>Editar Perfil</MainH1>
        </header>
        <article>
            <ProfileEditForm />
        </article>
    </section>
</template>