<script>
    import MainLogo from '../labels/MainLogo.vue';
    import MainP from '../labels/MainP.vue';
    export default {
        name: 'Logo',
        components: {MainLogo, MainP},
    }
</script>

<template>
    <div class="flex gap-4">
        <MainLogo />
        <MainP />
    </div>
</template>