<script>
    import MainImgLogo from '../labels/MainImgLogo.vue';
    import MainP from '../labels/MainP.vue';
    export default {
        name: 'Logo',
        components: {MainImgLogo, MainP},
    }
</script>

<template>
    <div class="flex gap-4">
        <MainImgLogo />
        <MainP>Gaming Room</MainP>
    </div>
</template>