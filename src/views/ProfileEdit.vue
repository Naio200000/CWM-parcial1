<script setup>
import ProfileEditForm from '../components/fragments/profile/ProfileEditForm.vue';
import ProfileEditPhotoForm from '../components/fragments/profile/ProfileEditPhotoForm.vue';
import MainH1 from '../components/labels/MainH1.vue';
// Agregar mensaje de feedback
</script>
<template>
    <section class="w-full">
        <header class="mt-8">
            <MainH1>Editar Perfil</MainH1>
        </header>
        <article>
            <div>
                <ProfileEditPhotoForm />
            </div>
            <div>
                <ProfileEditForm />
            </div>
        </article>
    </section>
</template>